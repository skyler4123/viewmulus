import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    hasModal: { type: Boolean, default: false }
  }

  initialize() {
    if (this.modalElement()) {
      this.hasModalValue = true
      this.element.setAttribute('data-action', "click->button--button-component#openModal")
    }
  }
  connect() {
    // console.log(this.element)
  }
  modalElement() {
    const modalElement = this.element.querySelector('[data-controller="modal--modal-component"]')
    return modalElement
  }
  openModal() {
    this.modalElement().classList.remove('hidden')
    // this.modalElement().removeAttribute('style')
  }
}
