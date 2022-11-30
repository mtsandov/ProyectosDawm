window.addEventListener('load',()=>{
  let containerLoader = document.querySelector('#container-loader')
  let layoutSidenav = document.querySelector('#layoutSidenav')
  setTimeout(()=>{
    containerLoader.classList.add('d-none')
    layoutSidenav.classList.remove('d-none')
  },3000)
})