let obtenerPersonajes = async (genero) => {
  let gender = genero ? `?gender=${genero}` : ''
  let data = await fetch('js/people.json')
  let personajes = await data.json()
  return personajes
}

let obtenerPersonajesGender = async (genero) => {
  let data = await fetch('js/people.json')
  let personajes = await data.json()
  let generos = personajes.filter(p => {
    if (p['gender'] == genero)
    return p
  }
  )
  return generos
}

const cardPersonajes = document.querySelector('#card-personajes')
const tablaPersonajes = document.querySelector('#data-personajes>tbody')
const tituloGenero = document.querySelector('#titulo-genero')

let crearTablaPersonaje = (personajes) => {
  let text = ''
  let contador = 1
  for (let personaje of personajes) {
    let {
      name
    } = personaje

    text += `
        <tr>
          <td scope="row" class="text-center"><b>${contador}</b></td>
          <td class="text-center">${name}</td>
        </tr>
      `
    contador += 1
  }

  tablaPersonajes.innerHTML = text
}

let btnTodos = document.querySelector('#btn-todos')
let btnMasc = document.querySelector('#btn-masc')
let btnFem = document.querySelector('#btn-fem')

btnTodos.addEventListener('click', async () => {
  let personajes = await obtenerPersonajes()
  crearTablaPersonaje(personajes)
  cardPersonajes.classList.remove('d-none')
  tituloGenero.textContent = ""
})

btnMasc.addEventListener('click', async () => {
  let personajes = await obtenerPersonajesGender('Male')
  crearTablaPersonaje(personajes)
  cardPersonajes.classList.remove('d-none')
  tituloGenero.textContent = "masculinos"
})

btnFem.addEventListener('click', async () => {
  let personajes = await obtenerPersonajesGender('Female')
  crearTablaPersonaje(personajes)
  cardPersonajes.classList.remove('d-none')
  tituloGenero.textContent = "femeninos"
})