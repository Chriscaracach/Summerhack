
//Por si decidimos cambiar el nombre
cambbtn.addEventListener("click", function(){
    //Aparecen y desaparecen cosas con "display: none/inline"
    navtitulo.classList.add("dn")
    navinput.classList.remove("dn")
    navbtn.classList.remove("dn")
    cambbtn.classList.add("dn")
})



//Trabajo con el modal

let nombre = document.getElementById("modnombreProducto")
let descripcion = document.getElementById("moddescProducto")
let select = document.getElementById("modselect")
let btn = document.getElementById("modbtn")
let sectionh5 = document.getElementById("sectionh5")

//Lista
let listul = document.getElementById("listul")
//Un contador para que el modal tenga el ID correcto
let contador = 1;

btn.addEventListener("click", function(){
    let nombrevalue = nombre.value
    let selectvalue = select.value
    let descvalue = descripcion.value
    //validamos los campos
    if (nombrevalue != "" && descvalue != "" && selectvalue != 0) {

    
        //Un if para poder transformar el número del value del select en un ícono de Font Awesome
        if (selectvalue == 1) {
            selectvalue = "<i class='fas fa-carrot isize'></i>"

        } else if (selectvalue == 2){
            selectvalue = "<i class='fas fa-tshirt isize'></i>"

        } else if (selectvalue == 3){
            selectvalue = "<i class='fas fa-desktop isize'></i>"

        } else if (selectvalue == 4){
            selectvalue = "<i class='fas fa-volleyball-ball isize'></i>"

        } else {
            selectvalue = "<i class='fas fa-drum isize'></i>"

        }


        let li = `<li class="list-group-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-3 text-center">
                                ${selectvalue}
                            </div>
                            <div class="col-6 text-center">
                                <h3><span itemprop="name">${nombrevalue}</span></h3>
                            </div>
                            <div class="col-3 text-center">
                                <button type="button" class="btn backoscuro btm-sm" data-bs-toggle="modal" data-bs-target="#modaldescripcion${contador}">
                                    Descripción
                                </button>
                            </div>
                            <div class="modal fade" id="modaldescripcion${contador}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">${nombrevalue}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <span itemprop="description">
                                            ${descvalue}
                                        </span>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary backoscuro" data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>`
        //agregás el li en el ul
        listul.innerHTML = listul.innerHTML + li
        //sumarle al contador
        contador++
        sectionh5.classList.add("dn")
    } else {
        alert("¡Ey! Fijate bien que te olvidaste de algo")
    }
    //borramos los valores para que no salgan en la próxima carga de producto NOMESALEEEE
    
})




console.log()