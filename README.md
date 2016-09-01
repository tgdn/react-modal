# React Modal [![npm version](https://badge.fury.io/js/%40tgdn%2Freact-modal.svg)](https://badge.fury.io/js/%40tgdn%2Freact-modal)

An accessible, easy to use, customizable modal library for the web.

Ongoing work on the library.


## Playground
To run demo on your computer

-     npm install
-     npm run storybook
- visit http://localhost:9001/


## Installing
```
npm install --save @tgdn/react-modal
```

## Usage
```javascript
import React from 'react'
import {
    ModalContent,
    Modal,
    ModalComposite,
} from '@tgdn/react-modal'

class MyModalView extends React.Component {
    constructor(props) {
        super(props)
        this.closeOnClick = this.closeOnClick.bind(this)
        this.showDialog = this.showDialog.bind(this)
    }

    closeOnClick() {
        this.modal.hide()
    }

    showDialog() {
        this.modal.show()
    }

    render() {
        return (
            <ModalComposite>
                <button className='btn' onClick={this.showDialog}>open</button>
                <Modal ref={(c) => {this.modal = c}}>
                    <ModalContent>
                        This is an example
                        <br />
                        <br />
                        <button
                            className='btn'
                            onClick={this.closeOnClick}
                        >
                            Close with a button
                        </button>
                    </ModalContent>
                </Modal>
            </ModalComposite>
        )
    }
}
```

## Configuration
Different prop types are available for use on `Modal`

Prop|Default|Value|Description
----|-------|-----|-----------
`visible`|false|true/false|Whether the modal should be visible after mounting
`closeOnClick`|true|true/false|If true, clicking outside the modal will hide it
`keyboard`|true|true/false or function|If true, pressing Escape will close the modal, if a function is provided, it will be called whenever a key is pressed
`canClose`|true|true/false|If true, a close button will be displayed, and clicking on it will hide the modal


## Done
- Simple UI
- Reactive Component
