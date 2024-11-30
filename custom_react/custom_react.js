function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;

  // if (reactElement.props.href) {
  //   domElement.setAttribute('href', reactElement.props.href);
  // }
  
  // if (reactElement.props.target) {
  //   domElement.setAttribute('target', reactElement.props.target);
  // }

  // container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.inner = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);


// document is defined wali error aayegi , but render ho jayenge elements jo humne custom react se banaye hain

// documents ka access nhi hota hai nodejs ke environment pe