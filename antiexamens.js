// Selecciona los diferentes elementos de la página web a través de las clases y le 
// cambia la fuente o no lo renderiza:
var style = document.createElement('style');
style.innerHTML = `
/* La watermark de "examenselectivitat.cat */
text.font-rubik{
  font-size: 0;
}

/* Carroussell de arriba de Aprofita el temps */ 
.v-window__container {
  display: none !important;
}

/* Carroussell con las libretas */
.px-10.pt-8{
    display: none;
}

/* Carroussell con las libretas */
.slide-suggested.py-5.prevent-select.mt-6.v-item-group.theme--light.v-slide-group.v-slide-group--has-affixes.v-slide-group--is-overflowing{
    display: none;

}

/* Anuncio de que no salgan más anuncios */ 
.v-image.v-responsive.rounded-lg.mt-5.theme--light {
    display: none;
}

/* Anuncio de libretas que sale cuando seleccionas exámenes */
.align-center.rounded-lg.my-6.v-card.v-card--flat.v-card--link.v-sheet.theme--light.d-flex.pa-6 {
  display: none !important;
}

`;

// Código para seleccionar elementos html cuando existan
// No me acuerdo de dónde lo he copiado
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

// Usar la función de antes para seleccionar el 
// input para hacer la promo B)
waitForElementToExist('label').then(element => {
  element.innerHTML = "antianuncios por David O";
  console.log('The element exists', element);
});

