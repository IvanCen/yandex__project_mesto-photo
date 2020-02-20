export default class Overlay {
    constructor(popup) {
        this.popup = popup;
    }
    show() {
        this.popup.classList.add('overlay_visible');
    }
    hide() {
        this.popup.classList.remove('overlay_visible');
    }
}