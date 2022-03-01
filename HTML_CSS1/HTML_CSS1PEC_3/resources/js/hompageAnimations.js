/* Debido a que estas animaciones estan pensadas para
ejecutarse con scroll vertical de arriba hacia bajo, 
obligamos a la pagina a cargarse siempre desde arriba del todo.
*/
scroll(0, 0);

// PREPARE THE ELEMENTS FOT HE ANIMATION
// list of boooks
const booksNode = document.getElementsByClassName("card-libro");
let listOfbooks = [];
for (bookNode of booksNode) { 
    listOfbooks.push(bookNode);
}
    
listOfbooks.sort(function (a, b) {
    if (a.dataset.order_to_display > b.dataset.order_to_display) {
        return 1;
    }
    if (a.dataset.order_to_display < b.dataset.order_to_display) {
        return -1;
    }

    return 0;
});
// list of numbers
const numbersNode = document.getElementsByClassName("number");
let listOfnumbers = [];
for (numberNode of numbersNode) {
    listOfnumbers.push(numberNode);
}

// FUNCTIONS 
function displayBooks(element, time, attribute, value) {
    setTimeout(function () {
        element.style[attribute] = value;
    }, time);
}

function increaseNumbers(element) {
    var interval = setInterval(function () {
        if (Number(element.innerHTML) >= Number(element.dataset.target)) {
            clearInterval(interval);
        } else {
            element.innerHTML = Number(element.innerHTML) + Number(element.dataset.plus);
        }
    }, 80);
}

const isOnScreen = (elementVisible, elemetToShow, distance) => {
    const rect = elementVisible.getBoundingClientRect();

    if (window.innerWidth <= 599) {
        distance = distance * 8;
    } else if (window.innerWidth <= 991) {
        distance = distance * 3;
    }

    const isInViewport =
        rect.bottom - distance <= (window.innerHeight || document.documentElement.clientHeight);
    
    if (isInViewport && elemetToShow === 'books') {
        let time = 0;
        listOfbooks.map(book => {
            time += 210;
            displayBooks(book, time, 'opacity', 1);
        });
    } else if (isInViewport && elemetToShow === "numbers") {
        listOfnumbers.map(number => { 
            increaseNumbers(number);
        });
    }
}


// EVENT LISTENERS 
window.addEventListener('scroll', () => {
    isOnScreen(document.getElementById("ultimos-libros"), 'books', 300);
    isOnScreen(document.getElementById("cifras"), 'numbers', 0);
});