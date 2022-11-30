const url='https://ghibliapi.herokuapp.com/people'
const app=document.querySelector(".contenedor")



let cargarNames = (genderSelected) => {

  
  fetch(url)
.then(res=> res.json())
.then(data => {
  if(!IsEmpty("contenedor")){
    const myNode = document.getElementById("contenedor");
    myNode.innerHTML = '';
    
  }
  if(!IsEmpty("respuesta")){
    const myNode = document.getElementById("respuesta");
    myNode.innerHTML = '';
    
  }
  data.forEach(personaje =>{

    const p= document.createElement('p')
    if(personaje.gender==genderSelected){
      p.innerHTML= personaje.name
    app.appendChild(p)
    p.addEventListener('click', function(){
      if(!IsEmpty("respuesta")){
        const myNode = document.getElementById("respuesta");
        myNode.innerHTML = '';
        
      }

      let url2=personaje.films[0]
 
      fetch(url2)
      .then(response => response.json())
      .then(data => {
     
          let titulo = data.title
          let sinopsis = data.description
          let tituloJapones = data.original_title_romanised
          let img= data.image
          let plantilla = 

          
          
          `<div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
            <div
                 
                 data-mdb-ripple-color="light"
                 >
              <img
                   src=${img}
                   class="img-fluid"
                   />
              <a href="#!">
                <div
                     class="mask"
                     style="background-color: rgba(251, 251, 251, 0.15)"
                     ></div>
              </a>
            </div>
            <div class="card-body">
              <h3 class="card-title"><a href="#">${titulo}</a></h3>
              <h5 class="card-title">Card title</h5>
               <small class="price">${tituloJapones}</small>
              <p class="card-text">
                ${sinopsis}
              </p>
              <a href="#!" id="edades" class="btn btn-primary">Edades</a>
              <a href="#!" id="generos" class="btn btn-primary">Generos</a>
            </div>
          </div>
        </div> `

          document.querySelector("div#respuesta").innerHTML+=plantilla;

          let botonGenero =document.getElementById("generos");
          let botonEdad=document.getElementById("edades")
          botonGenero.addEventListener('click', function(){
            cargarChart1(url2)

          })
          botonEdad.addEventListener('click', function(){
            cargarChart2(url2)

          })



      });


      

        



    })
  }
  
})



  /*

  if(!IsEmpty("contenedor")){
    const myNode = document.getElementById("contenedor");
    myNode.innerHTML = '';

    data.forEach(personaje =>{

    
      const p= document.createElement('p')
      if(personaje.gender==genderSelected){
        p.innerHTML= personaje.name
      app.appendChild(p)
      p.addEventListener('click', function(){
        if(!IsEmpty("respuesta")){
          const myNode = document.getElementById("respuesta");
          myNode.innerHTML = '';
          
        }

        let url2=personaje.films[0]
   
        fetch(url2)
        .then(response => response.json())
        .then(data => {
       
            let titulo = data.title
            let sinopsis = data.description
            let tituloJapones = data.original_title_romanised
            let img= data.image
            let plantilla = 
            
            `<div class="product product-container">
            <div class="inner-product">
              <div class="figure-image">
                <a href="single.html"><img src=${img} alt="Game 2"></a>
              </div>
              <h3 class="product-title"><a href="#">${titulo}</a></h3>
              <small class="price">${tituloJapones}</small>
              <p>${sinopsis}</p>
              <a href="cart.html" class="button">Personajes x Genero</a>
              <a href="#" class="button muted">Edades</a>
            </div>`
            document.querySelector("div#respuesta").innerHTML+=plantilla;


        });
        

          



      })
    }
    
  })


  } else{
    data.forEach(personaje =>{

   
    const p= document.createElement('p')
    
    if(personaje.gender==genderSelected){
      p.innerHTML= personaje.name
    app.appendChild(p)
    p.addEventListener('click', function(){
       if(!IsEmpty("respuesta")){
          const myNode = document.getElementById("respuesta");
          myNode.innerHTML = '';
          
        }
      let url2=personaje.films[0]
    
        fetch(url2)
        .then(response => response.json())
        .then(data => {
       
            let titulo = data.title
            let sinopsis = data.description
            let tituloJapones = data.original_title_romanised
            let img= data.image
            let plantilla = 
            
            `<div class="product product-container">
            <div class="inner-product">
              <div class="figure-image">
                <a href="single.html"><img src=${img} alt="Game 2"></a>
              </div>
              <h3 class="product-title"><a href="#">${titulo}</a></h3>
              <small class="price">${tituloJapones}</small>
              <p>${sinopsis}</p>
              <a href="cart.html" class="button">Personajes x Genero</a>
              <a href="#" class="button muted">Edades</a>
            </div>`
            document.querySelector("div#respuesta").innerHTML+=plantilla;


           
          
        
          

        });
        

          

    })
    }
  
    
  })
  }
  
  


 */
})
.catch(err => console.log(err))
  
}


let cargarChart1 = (url3) => {
    var h=0;
    var m=0;

 
  fetch(url3)
    .then(response => response.text() )  
    .then(data =>{
    data = JSON.parse(data)
  
    for(purl of data.people){
      fetch(purl)
      .then(response => response.json())
      .then(data => {
    

      if(data.gender=='Male'){
          h++;
          console.log(h)
          console.log("hombres "+data.name)
      
      }
      
      if(data.gender=='Female'){
         m++;
         console.log(m)
        console.log("mujeres "+data.name)
    }
 
  });

      }
      console.log(h)
      console.log(m)
      if(!IsEmpty("grafica")){
        const myNode = document.getElementById("grafica");
        myNode.innerHTML = '';
        
      }

      const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
      const etiquetas = ["Masculino", "Femenino"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
      var datosIngresos = {
       data: [h,m], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
           backgroundColor: [
        'rgba(163,221,203,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(230,181,102,0.2)',
        'rgba(229,112,126,0.2)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});
      /*var dataBar={
        type:"pie",
        data:{
          labels:["Masculinos","Femeninos"],
          datasets:[
            {
              label:"Personajes por Genero",
              data:[h,m],
            }
          ]


        }


      };
      const a =document.querySelector("#grafica")
      new Chart(a, dataBar)
      let plantilla2=
      `<div id="pie-chart" 
        data-char='pie'
        data-dataset-label="Generos de los personajes"
        data-labels="[Masculinos,Femeninos]"
        data-dataset-data="[${h},${m}]"
      ></div>
      `
      document.querySelector("div#respuesta2").innerHTML+=plantilla2;
     



      let personaje = film.director
      let score = film.rt_score

      if(!dicDirectores.hasOwnProperty(director) ){
          dicDirectores[director] = [];
      }
      dicDirectores[director].push(parseInt(score))
     
      
      if(!labelDirectores.includes(director)){
          labelDirectores.push(director)
      }
    }

    values = []
    for(dir in (dicDirectores)){
      total = 0
      dicDirectores[dir].forEach(function(a){total += a;});
      values.push(total/dicDirectores[dir].length)
      
    }
  
    
      var ctx1 = $("#director-films").get(0).getContext("2d");
      var myChart1 = new Chart(ctx1, {
          type: "bar",
          data: {
              labels: Object.values(labelDirectores),
              datasets: [{
                      label: "Score",
                      data: values,
                      backgroundColor: "rgba(235, 22, 22, .7)"
                  }
              ]
              },
          options: {
              responsive: true
          }
      });*/

    }
  )}


  let cargarChart2 = (url4) =>{
    fetch(url4)
  .then(response => response.json())
  .then(data => {
    let edades = new Array()
    let nombres = new Array()
    for(purl of data.people){
      fetch(purl)
      .then(response => response.json())
      .then(data => {
        if(esEntero(data.age)){
          nombres.push(data.name);

        edades.push(parseInt(data.age))

        }


        
        
 
  });

      }
      console.log(edades)
      console.log(nombres)
      if(!IsEmpty("grafica")){
        const myNode = document.getElementById("grafica");
        myNode.innerHTML = '';
        
      }
      // Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = nombres
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosEdades = {
    label: "Personajes y sus edades",
    data: edades , // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: Object.values(nombres),
        datasets: [
          datosEdades,
            
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

    


  });
    


  }






window.addEventListener('change', (event) => {
  let selection = document.querySelector('select#tipo');
  let genderSelected = selection.value;
  console.log(selection.value);
  cargarNames(genderSelected);
  const element = document.getElementById("contenedor");
console.log(element);

})

function IsEmpty(nombreId) {
  const box = document.getElementById(nombreId);

if (box.textContent.trim() === '') {
  return true
} else {
  return false
}
}

function esEntero(numero) {

  let valueInt = parseInt(numero);
  if (!Number.isInteger(valueInt)) {
    return false;
  } else {
    
    return true;
  }
}




/*
let cargarTabla = (genreSelected) => {
  fetch("https://www.freetogame.com/api/games")
    .then(response => response.text())
    .then(data => {
    data= JSON.parse(data)
    for (game of data){
      let title= game.title
      let genre = game.genre
      let platform = game.platform
      let date = game.release_date
      let publisher = game.publisher

      if (director == directorSelected){
          let plantilla2 = 
          `<tr>
          <td>${title}</td>
          <td>${genre}</td>
          <td>${platform}</td>
          <td>${date}</td>
          <td>${date}</td>
          <td>${publisher}</td>
          </tr>`
          document.querySelector(".table-responsive .table .datos").innerHTML += plantilla2
      }
  }  
  })
    .catch(console.error);
}


window.addEventListener('change', (event) => {
  let selection = document.querySelector('select#tipo');
  let directorSelected = selection.options[selection.selectedIndex].value;
  document.querySelector(".table-responsive .table .datos").innerHTML = ""
  cargarTabla(directorSelected);

})

window.addEventListener('DOMContentLoaded', (event) => {
  cargarOpciones()

});




let cargarOpciones = () => {
    fetch("https://www.freetogame.com/api/games")
      .then(response => response.text())
      .then(data => {
      data= JSON.parse(data)
      let titulos=[]
      for (games of data){
        let titulo= games.tittle
        if(!titulos.includes(titulo)){
            titulos.push(titulo)
            plantilla= `<option value= "${titulo}">${titulo}</option>` 
            document.querySelector("select#tipo").innerHTML += plantilla
        }
           
    }  
    })
      .catch(console.error);
  

let cargarTabla = (tittledSelected) => {
    fetch("https://www.freetogame.com/api/games")
      .then(response => response.text())
      .then(data => {
      data= JSON.parse(data)
      for (games of data){
        let tittle= games.title
        let genre = games.genre
        let platform = games.platform
        let url = games.url
        let publisher = games.publisher
       

        if (tittle == tittledSelected){
            let plantilla2 = 
            `<tr>
            <td>${tittle}</td>
            <td>${genre}</td>
            <td>${platform}</td>
            <td>${url}</td>
            <td>${publisher}</td>
          
            </tr>`
            document.querySelector(".table-datos.datos").innerHTML += plantilla2
        }
    }  
    })
      .catch(console.error);
  }


window.addEventListener('change', (event) => {
    let selection = document.querySelector('select#tipo');
    let tittledSelected = selection.options[selection.selectedIndex].value;
    document.querySelector(".table-datos .table .datos").innerHTML = ""
    cargarTabla(tittledSelected);

})
window.addEventListener('DOMContentLoaded', (event) => {
    cargarOpciones()
 
 });
 */