import React from 'react'
import ReactDOM from 'react-dom'

import {ModalDialog} from './Dialog'
import {ModalBackdrop} from './Backdrop'

class Modal extends React.Component {

    state = {
        visible: false,
        closeOnClick: false,
    }

    constructor(props) {
        super(props)

        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    handleOutsideClick(e) {
        const domNode = ReactDOM.findDOMNode(this.dialog)
        if ( (!domNode || !domNode.contains(e.target)) && this.state.closeOnClick ) {
            this.hide()
        }
    }

    componentDidMount() {
        const that = this
        const {
            visible,
            closeOnClick
        } = this.props

        this.setState({
            visible: visible,
            closeOnClick: closeOnClick
        }, function() {
            document.addEventListener('click', that.handleOutsideClick, true)
        })
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true)
    }

    hide() {
        // delegate hide
        this.setState({
            visible: false
        })
    }

    show() {
        this.setState({
            visible: true
        })
    }

    render() {
        const {
            children,
            canClose,
            ...otherProps
        } = this.props

        return this.state.visible && (
            <ModalBackdrop ref={(c) => this.backdrop = c}>
                <ModalDialog
                    ref={(c) => this.dialog = c}
                    canClose={canClose}
                    hideHandler={this.hide.bind(this)}
                >
                    {children}
                </ModalDialog>
            </ModalBackdrop>
        )
    }
}

Modal.propTypes = {
    visible: React.PropTypes.bool,
    closeOnClick: React.PropTypes.bool,
    canClose: React.PropTypes.bool,
    beforeClose: React.PropTypes.func,
    beforeShow: React.PropTypes.func,
    hasClosed: React.PropTypes.func,
    hasShown: React.PropTypes.func,
}

Modal.defaultProps = {
    visible: false,
    closeOnClick: true,
    canClose: true,
}

export {Modal}
