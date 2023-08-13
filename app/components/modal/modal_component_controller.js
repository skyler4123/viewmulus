import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"]

  initialize() {
    // console.log(this.hiddenClass)
    // const exitElement = this.element.querySelector('[data-controller="button--exit-component"]')
    // if (exitElement) {
    //   exitElement.setAttribute('data-button--exit-component-exit-type-value', "modal")
    // }
  }

  exit() {
    console.log(this.element)
    this.element.setAttribute('style', "display: none")
  }

}
