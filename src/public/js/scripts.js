var pathname = window.location.pathname;

if (pathname == "/") {
  document.getElementById("home").classList.add("activado")
} else if (pathname == "/quienes-somos-publiwhite") {
  document.getElementById("quienes").classList.add("activado")
} else if (pathname == "/servicios-publiwhite") {
  document.getElementById("servicios").classList.add("activado")
} else if (pathname == "/contacto-publiwhite") {
  document.getElementById("contacto").classList.add("activado")
}
