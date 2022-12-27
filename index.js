const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart",event => {
        console.log("click")
        console.log("Estoy arrastando el parrafo" + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)

    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        console.log('drago')
        event.dataTransfer.dropEffect = "copy"
    })
    seccion.addEventListener("drop", event => {
        console.log("drop")
        const id_perrafo = event.dataTransfer.getData("id")
        // console.log('Parafoo id', id_perrafo)
        const parrafo = document.getElementById(id_perrafo)
        seccion.appendChild(parrafo)
    })
})