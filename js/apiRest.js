//Listar torneos activos en API
const form = document.getElementById("formTorneo");
const newRow = document.getElementById("newRow");

const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGV6bHMuc3R1ZGlvYXRsYW50aWMuY29tLmFyXC9wdWJsaWNcL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjY2MzAwMDk1LCJleHAiOjE2NjYzMDM2OTUsIm5iZiI6MTY2NjMwMDA5NSwianRpIjoib1N5VTdMd2ZsSnVlYkhZOSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.r5LvhYcNK2XOMxrRUMcPI6-PtdOA08REIIMpEGx8vhs',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

fetch('https://pezls.studioatlantic.com.ar/public/api/v1/mostrarTorneos', options)
  .then(response => response.json())
  .then(data =>
    data.forEach(torneo => {
      console.log(torneo);
      const fila = document.createElement("tr");
      fila.innerHTML = '';
      fila.innerHTML += `<th scope="row">1</th>
                      <td>${torneo.name}</td>
                      <td>${torneo.simulator}</td>
                      <td>${torneo.racePoints}</td>
                      <td>${torneo.qualyPoints}</td>
                      <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                        <button type="button" class="btn btn-danger">Borrar</button>
                      </td>`
      newRow.append(fila);
    })
  )
  .catch(err => console.error(err));