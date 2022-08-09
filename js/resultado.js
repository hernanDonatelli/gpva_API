const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e803178294mshff58520438cf35bp1ab069jsne123d38a4fa5",
    "X-RapidAPI-Host": "formula-18.p.rapidapi.com",
  },
};

let contenido_race = document.querySelector("#contenido_race");
let contenido_qualy = document.querySelector("#contenido_qualy");
let circuito = document.querySelector("#circuito");
let date = document.querySelector("#date");

fetch("https://formula-18.p.rapidapi.com/raceResult?year=2022&race=13", options)
  .then((response) => response.json())
  .then((datos) => {
      console.log(datos);

      //Extraigo el nombre del circuito, fecha del evento y la ronda actual de carreras totales
      for(let item of datos){
        // console.log(circuito.raceName);

        circuito.innerHTML = `${item.Circuit.circuitName}`;
        date.innerHTML = new Date(`${item.date}`).toLocaleDateString();
        race_actual.innerHTML = `${item.round}`;
      }


      //Extraigo el objeto Results del array original y lo convierto en "Array de Resultados"
      let resultados = datos.map(dato => dato.Results);
      //console.log(resultados);

      for (let i = 0; i < resultados.length; i++) {
        let arrayResultados = resultados[i];
        //console.log(arrayResultados)

        for(let valor of arrayResultados){

            contenido_race.innerHTML += `
              <tr>
                  <td>${valor.position}</td>
                  <td>${valor.Driver.givenName} ${valor.Driver.familyName}</td>
                  <td>${valor.Time ? valor.Time.time : valor.status}</td>
                  <td>${valor.FastestLap.Time.time}</td>
                  <td>${valor.laps}</td>
                  <td>${valor.points}</td>
              </tr>

              `;

        }
      }

    })
  .catch((err) => console.error(err));

