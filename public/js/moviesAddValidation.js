window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
 
    let $form = document.getElementById('form');
    let $title = document.getElementById('title');
    let $rating = document.getElementById('rating');
    let $awards = document.getElementById('awards');
    let $release_date = document.getElementById('release_date');
    let $length = document.getElementById('length');
    let $genre_id = document.getElementById('genre_id');
    let $erroresUl = document.getElementById('errores');


    let err = [];

    $title.addEventListener("blur", () => {
        switch (true) {
            case !$title.value.trim():
                $title.classList.add("is-invalid");
                err.push('Rellenar titulo');
                break;
            default: 
                $title.classList.remove("is-invalid");
                $title.classList.add("is-valid");
                $form.title.focus();

                break;
        };
    });

    $rating.addEventListener("blur", () => {
        switch (true) {
            case !$rating.value.trim():
                $rating.classList.add("is-invalid");
                err.push('Rellenar calificacion');
                break;
            case $rating.value < 0 || $rating.value > 10:
                $rating.classList.add("is-invalid");
                err.push('Debe ser un numero entre 0 a 10');
                break;
            default: 
                $rating.classList.remove("is-invalid");
                $rating.classList.add("is-valid");
                $form.rating.focus();
                break;
        };
    });


    $awards.addEventListener("blur", () => {
        switch (true) {
            case !$awards.value.trim():
                $awards.classList.add("is-invalid");
                err.push('Rellenar premios');
                break;
            default: 
                $awards.classList.remove("is-invalid");
                $awards.classList.add("is-valid");
                $form.awards.focus();
                break;
        };
    });


    $release_date.addEventListener("blur", () => {
        switch (true) {
            case !$release_date.value.trim():
                $release_date.classList.add("is-invalid");
                err.push('Rellenar fecha');
                break;
            default: 
                $release_date.classList.add("is-valid");
                $release_date.classList.remove("is-invalid");
                $form.release_date.focus();
                break;
        };
    });

    $length.addEventListener("blur", () => {
        switch (true) {
            case !$length.value.trim():
                $length.classList.add("is-invalid");
                err.push('Rellenar duracion');
                break;
            case $length.value < 60 || $length.value > 360:
                $length.classList.add("is-invalid");
                err.push('La duracion debe ser mayor a 60m y menor a 361m');
                break;
            default: 
                $length.classList.add("is-valid");
                $length.classList.remove("is-invalid");
                $form.length.focus();
                break;
        };
    });

    $genre_id.addEventListener("blur", () => {
        switch (true) {
            case !$genre_id.value.trim():
                $genre_id.classList.add("is-invalid");
                err.push('Rellenar genero');
                break;
            default: 
                $genre_id.classList.add("is-valid");
                $genre_id.classList.remove("is-invalid");
                $form.$genre_id.focus();
                break;
        };
    });

    $form.addEventListener("submit", function(event) {

        event.preventDefault();
        let elementsForm = this.elements;
        let errores = false;
    
        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == ""
            || elementsForm[i].classList.contains("is-invalid")){
                elementsForm[i].classList.add("is-invalid");
                errores = true;
            }
        };

        if (err.length > 0) {
            $erroresUl.classList.add('alert-warning');
            $erroresUl.innerHTML = '';

            for (let i = 0; i < err.length; i++) {
                $erroresUl.innerHTML += `<li >  ${err[i]} </li>`;
            };

        }

        if(!errores){
            $form.submit();
            alert("La película se guardó satisfactoriamente.");
        };
    
    });

}