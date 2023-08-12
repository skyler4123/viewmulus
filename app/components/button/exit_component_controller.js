import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    exitType: String
  }
  exit() {
    console.log(this.element)
    // switch(this.exitTypeValue) {
    //   case "modal":
    //     this.element.closest('[data-controller="modal--modal-component"]').classList.add('hidden')
    //     break;
    // }
  }
}
