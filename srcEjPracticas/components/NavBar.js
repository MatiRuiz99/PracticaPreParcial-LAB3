//Solucion ej API
const [Value, setValue] = useState("");
useEffect(() => {
  fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books")
    .then((res) => res.json())
    .then((respuesta) => {
      if (Array.isArray(respuesta)) {
        setValue(respuesta);
      } else {
        throw new Error(respuesta.error);
      }
    })
    .catch(() => {});
  console.log(Value);
});
