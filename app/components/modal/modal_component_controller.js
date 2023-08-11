import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  initialize() {
    // console.log(this.parent())
  }
  parent() {
    return this.element.parentNode.closest('[data-controller]')
  }
  close() {
    this.parent().removeAttribute('open')
  }
}
