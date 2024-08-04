function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light com título
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem de um leão")
    img.setAttribute("title", "Imagem de um Leão")
  } else {
    // se estiver sem light mode, manter a imagem noturno com título
    img.setAttribute("src", "./assets/Avatar meu.png")
    img.setAttribute("alt", "Imagem de Willian")
    img.setAttribute("title", "Imagem de Willian")
  }
}
