import { twMerge } from 'tailwind-merge'

const ControllerHelpers = {
  twMerge(...args) {
    return twMerge(...args)
  },
  eventHandler({ detail: { event } }) {
    if (this.eventIdsParams.includes(event.payload.id) && this.id !== event.payload.controller.id) {
      this[event.payload.action](event)
    }
  },

  toggle(event) {
    this.isOpenValue = !this.isOpenValue
  },

  open() {
    this.isOpenValue = true
  },

  close() {
    this.isOpenValue = false
  },

  isOpenValueChanged(value, previousValue) {
    this.startViewTransition(() => {
      if (this.isOpenValue) {
        this.element.setAttribute('open', '')
      } else {
        this.element.removeAttribute('open')
      }
    })
  },

  getTargetIndex({targets, target}) {
    let resultIndex;
    targets.forEach((element, index) => {
      if (element.id === target.id) { resultIndex = index }
    })
    return resultIndex
  },

  getTargetIndexFromEvent({event, targets}) {
    console.log(event)
    return this.getTargetIndex({ targets: targets, target: event.currentTarget })
  },

  startViewTransition(callback) {
    // if (document.startViewTransition) {
    //   document.startViewTransition(() => callback())
    // } else {
    //   callback()
    // }
    callback()
  },

  findController(controllerName) {
    const controllerElement = this.findControllerElement(controllerName)
    if (controllerElement) {
      let controller = this.application.getControllerForElementAndIdentifier(controllerElement, controllerName)
      if (!controller) {
        controller = this.application.getControllerForElementAndIdentifier(controllerElement, `${controllerName}-component`)
      }
      return controller
    }
  },

  findControllers(controllerName) {
    const controllerElements = this.findControllerElements(controllerName)
    let controllers = []
    if (controllerElements.length > 0) {
      controllers = Array.from(controllerElements).map((element) => this.application.getControllerForElementAndIdentifier(element, controllerName))
      if (this.isArraytNull(controllers)) {
        controllers = Array.from(controllerElements).map((element) => {
          return this.application.getControllerForElementAndIdentifier(element, `${controllerName}-component`)
        })
      }
      return controllers
    }
  },

  findControllerElement(controller) {
    return this.element.querySelector(`[data-controller*="${controller}"]`)
  },

  findControllerElements(controller) {
    return this.element.querySelectorAll(`[data-controller*="${controller}"]`)
  },

  addAction(element, action) {
    if (this.isUndefined(element)) { return }
    element.dataset.action = ((element.dataset.action || '') + ' ' + action).trim()
  },

  replaceAction(element, oldAction, newAction) {
    if (this.isUndefined(element)) { return }

    element.dataset.action = element.dataset.action.replace(oldAction, newAction).trim()
  },

  removeAction(element, action) {
    if (this.isUndefined(element)) { return }

    this.replaceAction(element, action, '')
  },

  mergeClass(element, klass) {
    if (this.isUndefined(element)) { return }
    if (element.tagName === 'svg') {
      element.className.baseVal = this.twMerge(element.className.baseVal, klass)
    } else {
      element.className = this.twMerge(element.className, klass)
    }
  },

  removeClass(element, klass) {
    if (this.isUndefined(element)) { return }

    element.classList.remove(klass)
  },

  mergeElementWithHTML(element, html) {
    const newNode = this.createNodeFromHTML(html).firstElementChild
    this.cloneAttributes(element, newNode)
    element.innerHTML = newNode.innerHTML
  },

  isEventBrowser(event) {
    return !!event.target
  },
  isEventDispatch(event) {
    return !this.isEventDispatch(event)
  },

}

export default ControllerHelpers;