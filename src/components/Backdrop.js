import React from 'react'

class ModalBackdrop extends React.Component {
    render() {
        return (
            <div className='Modal__backdrop'>
                {this.props.children}
            </div>
        )
    }
}

export {ModalBackdrop}
