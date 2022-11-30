const tabla_peliculas = document.querySelector('#data-peliculas>tbody')


const cargarDataPeliculas = async ()=>{
  try {
    const data = await fetch('js/ghibili.json')
    const peliculas = await data.json()

    let text = ''
    let contador = 1
    for(let pelicula of peliculas){
      let {
        title,
        director,
        producer,
        release_date,
        running_time,
        rt_score,
        id
      } = pelicula

      text += `
        <tr class="align-middle">
          <td scope="row" class="text-center"><b>${contador}</b></td>
          <td class="text-center">${title}</td>
          <td class="text-center">${director}</td>
          <td class="text-center">${producer}</td>
          <td class="text-center">${release_date}</td>
          <td class="text-center">${running_time}</td>
          <td class="text-center">${rt_score}</td>
          <td class="text-center"><span class="btn btn-info" data-id='${id}'>Más información</span></td>
        </tr>
      `
      contador+=1
    }

    tabla_peliculas.innerHTML = text
    
  } catch (error) {
    console.error(error)
  }
}

const presentarInfoPelicula = async (id) => {
  try {
    const data = await fetch(`js/ghibili.json`)
    const pelicula = await data.json()
    const [peliculaInfo] = pelicula.filter(p => {
      if(p['id']===id)
        return p
    })
    console.log(peliculaInfo)
    const cardPelicula = document.querySelector('#card-descripcion-pelicula')
    const descriptionPelicula = document.querySelector('#descripcion-pelicula')

    text = `
      <div class="col-md-4">
        <img src="${peliculaInfo.image}" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${peliculaInfo.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${peliculaInfo.original_title_romanised}</h6>
          <p class="card-text"><b>Sinopsis:</b> ${peliculaInfo.description}</p>
          <p class="card-text"><b>Director:</b> ${peliculaInfo.director}</p>
          <p class="card-text"><b>Productor:</b> ${peliculaInfo.producer}</p>
          <p class="card-text"><b>Año:</b> ${peliculaInfo.release_date}</p>
          <p class="card-text"><b>Duracion:</b> ${peliculaInfo.running_time} minutos</p>
          <p class="card-text"><b>Puntuacion:</b> ${peliculaInfo.rt_score}</p>
        </div>
      </div>
    `
    descriptionPelicula.innerHTML = text
    cardPelicula.classList.remove('d-none')
  } catch (error) {
    console.error(error)
  }

  
}

cargarDataPeliculas()
  .then(()=> {
    const btnInfo = document.querySelectorAll('.btn-info')

    btnInfo.forEach(btn => btn.addEventListener('click',event=>{
      presentarInfoPelicula(event.target.getAttribute('data-id'))
    }))
  })

