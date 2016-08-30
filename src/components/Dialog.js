import React from 'react'

class ModalDialog extends React.Component {

    componentDidMount() {
        const {hideHandler} = this.props
        if (hideHandler && typeof hideHandler === "function") {
            this.hide = hideHandler
        } else {
            this.hide = function() {}
        }
    }

    doHide() {
        this.hide()
    }

    render() {
        const {
            canClose
        } = this.props



        return (
            <div className='Modal__dialog'>
                <div className='Modal__dialog__box'>
                    {canClose && (
                        <button onClick={this.doHide.bind(this)} type="button" class="Modal__dialog__close" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    )}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export {ModalDialog}
