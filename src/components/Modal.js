import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {ModalDialog} from './Dialog'
import {ModalBackdrop} from './Backdrop'

class Modal extends React.Component {

    constructor(props) {
        super(props)

        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
        this.handleKeyboard = this.handleKeyboard.bind(this)
    }

    state = {
        visible: false,
        closeOnClick: false,
    }

    componentWillMount() {
        const {
            visible,
            closeOnClick,
        } = this.props

        this.setState({
            visible,
            closeOnClick,
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true)
        document.addEventListener('keydown', this.handleKeyboard, true)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true)
        document.removeEventListener('keydown', this.handleKeyboard, true)
    }

    shouldComponentUpdate() {
        console.log('shouldUpdate Modal?');
        return true
    }

    componentDidUpdate() {
        console.log('Modal updated');
    }

    handleOutsideClick(e) {
        if (!this.state.visible) return // early exit
        const domNode = ReactDOM.findDOMNode(this.dialog)
        if ((!domNode || !domNode.contains(e.target)) && this.state.closeOnClick) {
            this.hide()
        }
    }

    handleKeyboard(event) {
        if (!this.state.visible) return // early exit
        if (this.props.keyboard && (typeof this.props.keyboard) === 'function') {
            this.props.keyboard(event)
        } else if (this.props.keyboard) {
            if (
                event.key === 'Escape' ||
                event.keyCode === 27) {
                this.hide()
            }
        }
    }

    blockScrolling() {
        const overflow = window.getComputedStyle(document.body).getPropertyValue('overflow')
        if (overflow !== 'hidden') {
            document.body.style.overflow = 'hidden'
        }
    }

    unblockScrolling() {
        // TODO: check whether there are multiple mounted modals
        document.body.style.overflow = ''
    }

    hide() {
        // delegate hide
        this.setState({
            visible: false,
        })
    }

    show() {
        this.setState({
            visible: true,
        })
    }

    renderModal() {
        const {
            children,
            canClose,
        } = this.props

        // block body scrolling
        if (this.state.visible && this.props.blockScrolling) {
            this.blockScrolling()
        } else if (!this.state.visible && this.props.blockScrolling) {
            this.unblockScrolling()
        }

        return this.state.visible && (
            <ModalBackdrop key='backdrop' ref={(c) => {this.backdrop = c}}>
                <ModalDialog
                    key='dialog'
                    ref={c => {this.dialog = c}}
                    canClose={canClose}
                    hideHandler={this.hide}
                >
                    {children}
                </ModalDialog>
            </ModalBackdrop>
        )
    }

    render() {
        const modal = this.renderModal()

        return (
            <ReactCSSTransitionGroup
                component='div'
                transitionName={`Modal--${this.props.transitionName}`}
                transitionEnter={this.props.animate}
                transitionLeave={this.props.animate}
                transitionEnterTimeout={this.props.enterTimeout}
                transitionLeaveTimeout={this.props.leaveTimeout}
            >
                {modal}
            </ReactCSSTransitionGroup>
        )
    }
}

Modal.propTypes = {
    children: React.PropTypes.node,
    visible: React.PropTypes.bool,
    closeOnClick: React.PropTypes.bool,
    keyboard: React.PropTypes.oneOfType([
        React.PropTypes.func,
        React.PropTypes.bool,
    ]),
    canClose: React.PropTypes.bool,
    beforeClose: React.PropTypes.func,
    beforeShow: React.PropTypes.func,
    hasClosed: React.PropTypes.func,
    hasShown: React.PropTypes.func,
    blockScrolling: React.PropTypes.bool,
    animate: React.PropTypes.bool,
    transitionName: React.PropTypes.string,
    appearTimeout: React.PropTypes.number,
    enterTimeout: React.PropTypes.number,
    leaveTimeout: React.PropTypes.number,
}

Modal.defaultProps = {
    visible: false,
    closeOnClick: true,
    keyboard: true,
    canClose: true,
    blockScrolling: true,
    animate: true,
    transitionName: 'fade',
    enterTimeout: 300,
    leaveTimeout: 200,
}

export {Modal}
