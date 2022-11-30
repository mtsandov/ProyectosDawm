// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let porcentajePersonajes = async () => {
  let masculinos = await obtenerPersonajesGender ('Male')
  let femeninos = await obtenerPersonajesGender ('Female')
  let cantTotal = masculinos.length + femeninos.length

  let porcentajeMasc = ((masculinos.length/cantTotal)*100).toFixed(2)
  let porcentajeFem = ((femeninos.length/cantTotal)*100).toFixed(2)

  let ctx = document.getElementById("myPieChart");
  let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Personajes masculinos", "Personajes Femeninos"],
      datasets: [{
        data: [porcentajeMasc, porcentajeFem],
        backgroundColor: ['#007bff', '#dc3545'],
      }],
    },
  });
}

porcentajePersonajes()
