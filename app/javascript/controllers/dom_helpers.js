const DomHelpers = {
  getAttributes(element) {
    let result = {}
    Array.from(element.attributes).forEach(((nodeMap) => {
      result = { ...result, [nodeMap.nodeName]: nodeMap.nodeValue }
    }))
    return result
  },
  
  cloneAttributes(element, refElement) {
    const refAttributes = this.getAttributes(refElement)
    Object.keys(refAttributes).forEach((attributeKey) => {
      element.setAttribute(attributeKey, refAttributes[attributeKey])
    })
  },
  
  createNodeFromHTML(html) {
    return document.createRange().createContextualFragment(html)
  },
}

export default DomHelpers;