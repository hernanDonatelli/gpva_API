class Torneo{
  constructor(torneo, simulator, racePoints, qualyPoints){
    this.torneo = torneo;
    this.simulator = simulator;
    this.racePoints = racePoints;
    this.qualyPoints = qualyPoints;
    this.status = true;
  }
}

//Array de todos los torneos
let arrayTorneos = [];

function nuevoTorneo(){
  const torneo = document.getElementById("name").value;
  const simulator = document.getElementById("simulator").value;
  const racePoints = document.getElementById("racePoints").value;
  const qualyPoints = document.getElementById("qualyPoints").value;

  return new Torneo(torneo, simulator, racePoints, qualyPoints);
}

const create = document.getElementById("create");
create.addEventListener("submit", (e) => {
  e.preventDefault();

  //Aca hay que pintar la tabla html
  const torneo = nuevoTorneo();
  arrayTorneos.push(torneo);
})

console.log(arrayTorneos);
