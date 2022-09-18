class Torneo {
  constructor(nombre, simulator, racePoints, qualyPoints) {
    this.nombre = nombre;
    this.simulator = simulator;
    this.racePoints = racePoints;
    this.qualyPoints = qualyPoints;
    this.status = true;
  }
}

let arrayTorneos = [];
let nombre;
let simulator;
let racePoints;
let qualyPoints;

//Creacion de objetos Torneos
const nuevoTorneo = () => {
  nombre = document.getElementById("name").value;
  simulator = document.getElementById("simulator").value;
  racePoints = document.getElementById("racePoints").value;
  qualyPoints = document.getElementById("qualyPoints").value;

  return new Torneo(nombre, simulator, racePoints, qualyPoints);
}

//Tabla dinamica de torneos creados
const form = document.getElementById("formTorneo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTorneo = nuevoTorneo();
  arrayTorneos.push(newTorneo);

  let newRow = document.getElementById("newRow");
  let fila = document.createElement("tr");

  arrayTorneos.forEach(torneo => {
    fila.innerHTML = `<th scope="row">1</th>
                      <td>${torneo.nombre}</td>
                      <td>${torneo.simulator}</td>
                      <td>${torneo.racePoints}</td>
                      <td>${torneo.qualyPoints}</td>
                      <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                        <button type="button" class="btn btn-danger">Borrar</button>
                      </td>`
    newRow.append(fila);

  });

});


