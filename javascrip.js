function hacerCirculo(element) {
  element.classList.remove('cuadrado');
  element.classList.add('circulo');
}

function hacerCuadrado(element) {
  element.classList.remove('circulo');
  element.classList.add('cuadrado');
}

function sacarSombra(element) {
  element.classList.remove('sombra');
}

function ponerSombra(element) {
  element.classList.add('sombra');
}

function pressed(element) {
  let atributos = element.attributes;

  for (var i = 1; i < atributos.length; i++) {
    element.removeAttribute(atributos[i].name);
  }
  element.removeAttribute('onmouseout');
  element.removeAttribute('onmouseup');
  element.classList.remove('cuadrado');
  element.classList.remove('sombra');

  element.classList.add('circulo');
  element.classList.add('pressed');
}

function Eliminar(element) {
  var padre = element.parentNode;
  element.classList.add('hidden');
  padre.classList.add('desaparecer');

  setTimeout(function() {
    padre.remove();
  }, 1000);
}
