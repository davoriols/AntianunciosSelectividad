// Poner fuente tamaño 0 para el baner en los examenes
var style = document.createElement('style');
style.innerHTML = `
text.font-rubik{
font-size: 0;
}
`;


// Codigo para seleccionar elementos html cuando existan
// No me acuerdo de donde lo he copiado
document.head.appendChild(style);

function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

// Usar la funcion de antes para seleccionar el 
// input para hacer la promo
waitForElementToExist('label').then(element => {
  element.innerHTML = "antianuncios por David O";
  console.log('The element exists', element);
});

