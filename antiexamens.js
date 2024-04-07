// Poner fuente tamaño 0 para el baner en los examenes
var style = document.createElement('style');
style.innerHTML = `
text.font-rubik{
font-size: 0;
}

.v-window__container {
width: 0;

.mt-6.problem-card.v-card.v-sheet.theme--light {
    position: absolute;
    left: 10000px;
}

.my-2.rounded-lg.v-card.v-card--flat.v-sheet.theme--light.transparent {
    position: absolute;
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

