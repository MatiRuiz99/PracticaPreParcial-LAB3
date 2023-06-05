import React, { useState } from "react";

const Calculadora = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState(0);

  const handleChangeNumero1 = (event) => {
    const valor = event.target.value;
    // Validar si es un número
    if (!isNaN(valor)) {
      setNumero1(Number(valor));
    }
  };

  const handleChangeNumero2 = (event) => {
    const valor = event.target.value;
    // Validar si es un número
    if (!isNaN(valor)) {
      setNumero2(Number(valor));
    }
  };

  const calcularSuma = () => {
    setSuma(numero1 + numero2);
  };

  return (
    <div>
      <input type="text" value={numero1} onChange={handleChangeNumero1} /> +{" "}
      <input type="text" value={numero2} onChange={handleChangeNumero2} />
      <button onClick={calcularSuma}>Calcular Suma</button>
      <p>La suma es: {suma}</p>
    </div>
  );
};

export default Calculadora;
