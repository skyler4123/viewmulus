import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['modal']
  static values = {
    hasModal: Boolean,
  }

  initialize() {
    if (this.hasModalValue) {
      this.element.setAttribute('data-action', "click->button--button-component#openModal")
      this.element.querySelector('div[data-controller="modal--modal-component"]').setAttribute('data-button--button-component-target', 'modal')
    }
  }
  connect() {
    console.log(this.element)
  }
  openModal() {
    this.modalTarget.classList.remove('hidden')
  }
}
