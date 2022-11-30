let llenarListado = (genero) => {
  fetch(`https://ghibliapi.herokuapp.com/people?gender=${genero}`)
    .then(res => res.json())
    .then(data => {
      let listado = document.querySelector('#listado')
      let nombres = data.map(personaje => personaje.name)
      console.log(nombres)
      let items =''
      for(let nombre of nombres){
        items += `
          <li>${nombre}</li>
        `
      }
      listado.innerHTML = items

    })
    .catch(error => {
      console.error(error)
    })
}

let btn_masc = document.querySelector('#btn-masc')
let btn_fem = document.querySelector('#btn-fem')
let span_genero = document.querySelector('#span-genero')

btn_masc.addEventListener("click", ()=>{
  llenarListado('Male')
  span_genero.textContent = 'Masculinos'
})

btn_fem.addEventListener("click", ()=>{
  llenarListado('Female')
  span_genero.textContent = 'Femeninos'
})

llenarListado('Male')
