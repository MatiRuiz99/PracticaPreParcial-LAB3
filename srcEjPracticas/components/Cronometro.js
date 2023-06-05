import React, { useState, useEffect } from "react";

const ContadorTiempo = () => {
  const [tiempoInicial] = useState(5 * 60); // 5 minutos en segundos
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (corriendo) {
      intervalo = setInterval(() => {
        setTiempoRestante((tiempoRestante) => {
          if (tiempoRestante === 0) {
            setCorriendo(false);
            return tiempoInicial;
          }
          return tiempoRestante - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [corriendo]);

  const iniciarContador = () => {
    setCorriendo(true);
  };

  const pausarContador = () => {
    setCorriendo(false);
  };

  const reiniciarContador = () => {
    setTiempoRestante(tiempoInicial);
    setCorriendo(false);
  };

  const segundos = tiempoRestante % 60;
  const minutos = Math.floor(tiempoRestante / 60);

  return (
    <div>
      <div>
        Tiempo restante: {minutos < 10 ? "0" + minutos : minutos}:
        {segundos < 10 ? "0" + segundos : segundos}
      </div>
      <button onClick={iniciarContador}>Iniciar</button>
      <button onClick={pausarContador}>Pausar</button>
      <button onClick={reiniciarContador}>Reiniciar</button>
    </div>
  );
};

export default ContadorTiempo;
