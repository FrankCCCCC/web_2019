// TODO:
// In this js-file, you should define a new component "Reset" extending from "Component" and import its css-file.
// Besides, in the component, you shold fire a event if this button is clicked.

import Component from './component.js';

export default class Reset extends Component {
    static getRootClass() {
        return '.Reset';
    }

    constructor(root) {
        super(root);
        root.addEventListener("click", this.handleResetClick.bind(this));
    }

    handleResetClick(e) {
        this.fire('reset');
    }
}