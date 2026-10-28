export const createElement = function (type, aClass, aParent) {
  let myElement = document.createElement(type);
  myElement.classList.add(aClass);
  aParent.appendChild(myElement);
  return myElement;
};
