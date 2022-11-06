/*! Moneda*/
const moneda = document.querySelector(".moneda");
const sellofront = document.querySelector(".sellofront");
const caraback = document.querySelector(".caraback");

moneda.addEventListener("click", () => {
  sellofront.classList.remove("sellofront");
  caraback.classList.remove("caraback");

  const ramdom = Math.floor(Math.random() * 2) + 1;

  console.log(ramdom);

  if (ramdom == 1) {
    moneda.classList.add("caraback1");
  } else if (ramdom == 2) {
    moneda.classList.add("sellofront1");
  }
});

/*! Fin moneda*/

// let m = document.getElementById("monto");
// let s = document.getElementById("seleccion");
// let juego = document.getElementById("jugar");

// juego.addEventListener("click", () => {
//   let seleccion = s.value;
//   let monto = m.value;

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//   }
//   if (seleccion == 1 && ramdom == 1) {
//     alert(`La maquina ha seleccionado cara`);
//     let ganancia = 0;
//     ganancia = ganancia + monto * 2;

//     alert(`El monto que lleva hasta el momento es ${ganancia}`);
//   } else if (seleccion == 2 && ramdom == 2) {
//     alert(`La maquina ha seleccionado sello`);
//     let ganancia = 0;
//     ganancia = ganancia + monto * 2;

//     alert(`El monto que lleva hasta el momento es ${ganancia}`);
//   } else {
//     alert("Ha perdido");
//     let perdida = 0;
//     perdida = perdida - monto;
//   }
// });
