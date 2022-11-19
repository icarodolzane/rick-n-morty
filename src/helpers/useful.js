
export const createGeneralElement = (element, className) => {
  const getElement = document.createElement(element)
  getElement.className = className
  return getElement
}
