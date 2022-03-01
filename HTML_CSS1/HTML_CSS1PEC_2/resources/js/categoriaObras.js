const nombreLibro = document.getElementById("formTitulo");
const editorialLibro = document.getElementById("formEditorial");
const precioLibro = document.getElementById("formPrecio");
const obrasContainer = document.getElementById("obrasContainer");

let libros = [
    {
        imagen: require("/resources/images/libro1-lsm.jpg"),
        titulo: "La tienda",
        editorial: "DeTapaDura",
        precio: "19.95€",
        sinopsis:
            "el nuevo trabajo del estadounidense Stephen King que reúne cuatro novelas cortas, uno de los formatos que el escritor domina y que ha ido practicando con mayor frecuencia... ",
    },

    {
        imagen: require("/resources/images/libro2-llm.jpg"),
        titulo: "La larga Marcha",
        editorial: "DEBOLSILLO",
        precio: "9.95€",
        sinopsis:
            "una sociedad ultraconservadora que ha llevado al paroxismo sus rasgos más perversos, dominada por un estado policial. Una inquietante novela futurista donde la realidad supera a la fantasía más terrorífica. ",
    },
    {
        imagen: require("/resources/images/libro3-ei.jpg"),
        titulo: "El Instituto",
        editorial: "DEBOLSILLO",
        precio: "14.95€",
        sinopsis:
            "En mitad de la noche en un barrio tranquilo de Minneapolis raptan a Luke Ellis, de doce años, tras haber asesinado a sus padres. Una operación que dura menos de dos minutos. ",
    },
    {
        imagen: require("/resources/images/libro4-c.jpg"),
        titulo: "Cujo",
        editorial: "Planeta de libros",
        precio: "9.45€",
        sinopsis:
            "Durante toda su vida Cujo fue un buen perro, un San Bernardo grandote, pacífico, juguetón y amante de los niños. Realmente se trataba de un perro bueno y feliz. Feliz hasta que le sucedió algo, y el cerebro de perro de Cujo se cubrió de una de esas oscuridades que se alimentan de sangre.",
    },
    {
        imagen: require("/resources/images/libro5-sl.jpg"),
        titulo: "El misterio de Salems Lot",
        editorial: "Planeta de libros",
        precio: "9.45€",
        sinopsis:
            "Salem's Lot es un pueblo tranquilo donde nunca pasa nada. O quizás esto son solo apariencias, pues lo cierto es que sí se están sucediendo diversos hechos misteriosos, incluso escalofriantes...",
    },
];

// INITIAL LOAD
libros.forEach((libro) => {
    renderizarLibro(libro);
    updateEditorialSelect(libro.editorial);
});

//METHODS
function renderizarLibro(libro) {
    let libroContainer = createElement("a", "obra");
    libroContainer.href = `${libro.titulo.toLowerCase().replaceAll(" ", "-")}.html`;

    let libroPortada = createElement("img");
    libroPortada.src = libro.imagen;
    libroPortada.alt = `Portada del libro ${libro.titulo}, De Stephen King`;
    libroContainer.append(libroPortada);

    let libroInfo = createElement("div");

    let libroTitulo = createElement("h3", null, libro.titulo);
    libroInfo.append(libroTitulo);

    let libroEditorial = createElement("p", "obraEditorial", libro.editorial);
    libroInfo.append(libroEditorial);

    let libroPrecio = createElement("p", "obraPrecio", libro.precio);
    libroInfo.append(libroPrecio);

    let libroSinopsis = createElement("p", "obraDescription", libro.sinopsis);
    libroInfo.append(libroSinopsis);

    let libroLink = createElement("a", null, "Más información");
    libroLink.href = `/resources/pages/${libro.titulo.toLowerCase().replaceAll(" ", "-")}.html`;
    libroInfo.append(libroLink);

    libroContainer.append(libroInfo);

    this.obrasContainer.append(libroContainer);
}

function createElement(tag, className, content) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    if (content) element.innerHTML = content;

    return element;
}

function updateEditorialSelect(editorial) {
    editorialValue = editorial.replaceAll(" ", "");
    if (!editorialLibro.querySelector("option[value=" + editorialValue + "]")) {
        let option = createElement("option", null, editorial);
        option.value = editorialValue;
        editorialLibro.append(option);
    }
}

function comparePrices(precioLibro, precioInput) {
    precioLibro = parseFloat(precioLibro.replace("€", ""));
    precioInput = parseFloat(precioInput);

    return precioLibro < precioInput;
}

function filterBooks() {
    this.obrasContainer.innerHTML = "";
    libros
        .filter((libro) => {
            return (
                (!nombreLibro.value.length || libro.titulo.toLowerCase().includes(nombreLibro.value.toLowerCase())) &&
                (!editorialLibro.value.length || libro.editorial.replaceAll(" ", "") == editorialLibro.value) &&
                (!precioLibro.value.length || comparePrices(libro.precio, precioLibro.value))
            );
        })
        .forEach((libro) => renderizarLibro(libro));
}

// EVENT LISTINERS
nombreLibro.addEventListener("input", () => filterBooks());
editorialLibro.addEventListener("change", () => filterBooks());
precioLibro.addEventListener("input", () => filterBooks());
