import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "head", "contents", "content"]
  static values = {
    // initTabIndex: { type: Number, default: 0 },
    // currentTabIndex: Number,
  }
  connect() {
    // console.log(this.currentTabIndexValue)
  }
  initialize() {
    // console.log('hahahahha')
    // this.contentTargets.forEach((content, index) => {
    //   if (index == initTabIndexValue) {
    //     console.log(index)
    //     content.classList.remove('hidden')
    //   }
    // })
  }
  openContent(event) {
    // hide current tab to open another tab
    this.contentTargets[this.currentTabIndexValue].classList.add('hidden')
    this.headTargets[this.currentTabIndexValue].querySelector('details').removeAttribute('open')
    const currentHead = event.target.closest('[data-controller]')
    this.currentTabIndexValue = this.headTargets.indexOf(currentHead)
    // this.headTargets.filter(head => head != currentHead).forEach(head => head.querySelector('details').removeAttribute('open'))
    this.contentTargets[this.currentTabIndexValue].classList.remove('hidden')
  }
}
