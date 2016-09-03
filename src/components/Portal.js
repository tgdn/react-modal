import React from 'react'
import ReactDOM from 'react-dom'

class ModalPortal extends React.Component {

    componentDidMount() {
        const modalsContainerId = 'modals-container'

        let modalsContainer = document.getElementById(modalsContainerId)
        if (!modalsContainer) {
            modalsContainer = document.createElement('div')
            modalsContainer.id = modalsContainerId
            document.body.appendChild(modalsContainer)
        }
        this.portal = document.createElement('div')
        modalsContainer.appendChild(this.portal)

        this.componentDidUpdate()
    }

    componentDidUpdate() {
        if (this.portal) {
            ReactDOM.render(<div>{this.props.children}</div>, this.portal)
        }
    }

    componentWillUnmount() {
        if (this.portal) {
            ReactDOM.unmountComponentAtNode(this.portal)
            this.portal.parentElement.removeChild(this.portal)
        }
    }

    render() {
        return null
    }
}


ModalPortal.propTypes = {
    children: React.PropTypes.node,
}

export {ModalPortal}
