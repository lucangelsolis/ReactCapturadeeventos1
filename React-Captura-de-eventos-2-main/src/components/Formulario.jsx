import React from 'react';
import './Formulario.css';

function Formulario () {
  function alerta (e) {
    e.preventDefault ();
    const texto = e.target.texto.value;
    let contador = 0;
    const testo = texto.toLowerCase ();
    for (let i = 0; i < testo.length; i++) {
      if (
        testo[i] === 'a' ||
        testo[i] === 'e' ||
        testo[i] === 'i' ||
        testo[i] === 'o' ||
        testo[i] === 'u'
      ) {
        contador++;
      }
    }
    alert(contador)
  }

  return (
    <div className="Formulario">
      <form onSubmit={alerta}>
        <p>Escribe un texto:</p>
        <input type="text" name="texto" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Formulario;
