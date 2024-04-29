const DispatchHelpers = {

  toggleDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('toggle'), controller: this } } })
  },

  openDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('open'), controller: this } } })
  },

  closeDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('close'), controller: this } } })
  },

  switchDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('switch'), controller: this } } })
  },

  tabDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tab'), controller: this } } })
  },

  copyLinkDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('copyLink'), controller: this } } })
  },

  copyTextDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('copyText'), controller: this } } })
  },

  scrollBackDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('scrollBack'), controller: this } } })
  },

  scrollForwardDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('scrollForward'), controller: this } } })
  },

  scrollForwardAutoDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('scrollForwardAuto'), controller: this } } })
  },

  rotateDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('rotate'), controller: this } } })
  },

  changeRatioDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('changeRatio'), controller: this } } })
  },

  tabDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tab'), controller: this } } })
  },

  tabNextDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tabNext'), controller: this } } })
  },

  tabBackDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tabBack'), controller: this } } })
  },

  tabFirstDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tabFirst'), controller: this } } })
  },

  tabLastDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('tabLast'), controller: this } } })
  },

  toggleRememberMeDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('toggleRememberMe'), controller: this } } })
  },

  increaseDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('increase'), controller: this } } })
  },

  decreaseDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('decrease'), controller: this } } })
  },

  ratingDispatch(event) {
    this.dispatch('dispatch', { detail: { event: { ...this.getEventWithAction('rating'), controller: this } } })
  },
}

export default DispatchHelpers;