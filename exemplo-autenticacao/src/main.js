const token = localStorage.getItem('token')

// Se token não tiver valor...
if (!token) {
  window.location.href = 'login.html'
} else {
  document.getElementById('app').innerHTML = `
   
  <h1>Hello New User!</h1>
  <a href="logout.html">Clique aqui para sair</a>
  `
}
