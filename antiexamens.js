// Poner fuente tamaño 0 para el baner en los examenes
var style = document.createElement('style');
style.innerHTML = `
text.font-rubik{
  font-size: 0;
}

.v-window__container {
  display: none;
}

/* Carroussell con las libretas */
.mt-6.problem-card.v-card.v-sheet.theme--light {
    display: none;
}

/* Anuncio de que no salgan más anuncios */
.v-image.v-responsive.rounded-lg.mt-5.theme--light {
    display: none;
}


`;

//.mt-6.problem-card.v-card.v-sheet.theme--light {
//    position: absolute !important;
//    left: 10000px !important;
//}



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

