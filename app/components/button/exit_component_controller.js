import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  exit() {
    this.element.closest('data-exitable').classList.add('hidden')
  }
}
