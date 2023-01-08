function agregar(){

    let inputValue_A = document.getElementById('nom_user').value
    let inputValue_B = document.getElementById('title').value
    let inputValue_C = document.getElementById('status').value
    let inputValue_D = document.getElementById('rol').value


    let nom = JSON.parse(localStorage.getItem('nom_user')) ? JSON.parse(localStorage.getItem('nom_user')) : []
    let tit = JSON.parse(localStorage.getItem('title')) ? JSON.parse(localStorage.getItem('title')) : []
    let sta = JSON.parse(localStorage.getItem('status')) ? JSON.parse(localStorage.getItem('status')) : []
    let rol = JSON.parse(localStorage.getItem('rol')) ? JSON.parse(localStorage.getItem('rol')) : []


    console.log(inputValue_A)
    console.log(inputValue_B)
    console.log(inputValue_C)
    console.log(inputValue_D)
  

    nom.push(inputValue_A)
    tit.push(inputValue_B)
    sta.push(inputValue_C)
    rol.push(inputValue_D)
  

    console.log(name, ap, titulo, status, cargo)
    console.log(JSON.stringify(name + ap + titulo + status + cargo))

    localStorage.setItem('nom_user' + 'title' + 'status' + 'rol', JSON.stringify(nom + tit + sta + rol))
    document.getElementById('nom_user').value = ''
    document.getElementById('title').value = ''
    document.getElementById('status').value = ''
    document.getElementById('rol').value = ''
    
   
}