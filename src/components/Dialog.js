import React from 'react'

class ModalDialog extends React.Component {

    constructor(props) {
        super(props)
        this.doHide = this.doHide.bind(this)
    }

    componentDidMount() {
        const {hideHandler} = this.props
        if (hideHandler && typeof hideHandler === 'function') {
            this.hide = hideHandler
        } else {
            this.hide = function nop() {}
        }
    }

    doHide() {
        this.hide()
    }

    render() {
        return (
            <div className='Modal__dialog'>
                <div className='Modal__dialog__box'>
                    {this.props.canClose && (
                        <button
                            onClick={this.doHide}
                            type="button"
                            className="Modal__dialog__close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    )}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ModalDialog.propTypes = {
    children: React.PropTypes.node,
    hideHandler: React.PropTypes.func,
    canClose: React.PropTypes.bool,
}

export {ModalDialog}
