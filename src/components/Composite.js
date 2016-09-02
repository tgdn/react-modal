import React from 'react'
import ReactDOM from 'react-dom'

import {Modal} from './Modal'

class ModalComposite extends React.Component {

    componentDidMount() {
        const {children} = this.props
        const modalsContainerId = 'modals-container'

        let modalsContainer = document.getElementById(modalsContainerId)
        if (!modalsContainer) {
            modalsContainer = document.createElement('div')
            modalsContainer.id = modalsContainerId
            document.body.appendChild(modalsContainer)
        }
        this.container = document.createElement('div')
        modalsContainer.appendChild(this.container)

        this.modal = React.Children.map(children, function(el) {
            if (el.type === Modal) {
                return el
            }
        })[0]

        ReactDOM.render(this.modal, this.container)
    }

    componentWillUnmount() {
        if (this.container) {
            ReactDOM.unmountComponentAtNode(this.container)
            this.container.parentElement.removeChild(this.container)
        }
    }

    render() {
        return (
            <span>
                {React.Children.map(this.props.children, function(el) {
                    if (el.type !== Modal) {
                        return el
                    }
                })}
            </span>
        )
    }
}

ModalComposite.propTypes = {
    children: React.PropTypes.node,
}

export {ModalComposite}
