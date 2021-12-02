var elFlex = document.querySelector("#d-flex");
var elForm = document.querySelector("#form_submit");
var elInput = document.querySelector("#input_five");
var elSelect = document.querySelector("#select");
var elSelectRating = document.querySelector("#select_rating");
var twoMovies = movies.slice(0, 40).sort((a, b) => String(a.Title).toLowerCase() > String(b.Title).toLowerCase()? 1: -1);
var elINput2 = document.querySelector("#input_seven")
function render(filmArray) {
    filmArray.forEach(films => {
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var newH4 = document.createElement("h4");
    var newImg = document.createElement("img");
    var newP2 = document.createElement("p");
    var newDiv2 = document.createElement("div");
    var newInput1 = document.createElement("a");
    var newInput2 = document.createElement("a");
    var newInput3 = document.createElement("a");

    newDiv.classList.add("card");
    newDiv.classList.add("border-secondary");

    newDiv.classList.add("mb-2");
    newDiv.setAttribute("style", "width: 22rem;")
    newImg.setAttribute("src", `http://i3.ytimg.com/vi/${films.ytid}/maxresdefault.jpg`);
    newImg.setAttribute("width", "350");
    newImg.setAttribute("height", "250");
    newImg.setAttribute("alt", "moies picture");
    newH4.classList.add("h5");
    newH4.textContent = films.Title;
    newP.textContent = films.movie_year;
    newP2.textContent = films.imdb_rating;
    newDiv2.classList.add("card-body");
    newDiv2.classList.add("d-flex");
    newDiv2.classList.add("justify-content-around");
    newInput1.classList.add("btn")
    newInput1.classList.add("btn-sm");
    newInput1.classList.add("btn-outline-primary");
    newInput1.classList.add("m-xl-2");
    newInput1.classList.add("d-inline");
    newInput1.textContent = "Watch trailer";
    newInput1.setAttribute("href", `https://www.youtube.com/watch?v=(${films.ytid})`);
    newInput1.setAttribute("target", "blank");

    newInput2.classList.add("btn");
    newInput2.classList.add("btn-sm");
    newInput2.classList.add("btn-outline-info");
    newInput2.classList.add("m-xl-2");
    newInput2.classList.add("d-inline");
    newInput2.textContent = "More info";
    newInput2.setAttribute("href", `https://www.youtube.com/watch?v=(${films.ytid})`);
    newInput2.setAttribute("target", "blank");

    newInput3.classList.add("btn")
    newInput3.classList.add("btn-sm");
    newInput3.classList.add("btn-outline-success");
    newInput3.classList.add("d-inline");
    newInput3.textContent = "Bookmark";
    newInput3.setAttribute("href", `https://www.youtube.com/watch?v=(${films.ytid})`);
    newInput3.setAttribute("target", "blank");

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH4);
    newDiv.appendChild(newP);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(newInput1);
    newDiv2.appendChild(newInput2);
    newDiv2.appendChild(newInput3);
    elFlex.appendChild(newDiv);
    });
}
render(twoMovies, elFlex);

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    elFlex.innerHTML = null;
    var inputRating = Number(elInput.value.trim());
    var inputRate = elINput2.value.trim();
    if (inputRating == "" || isNaN(inputRating)) {
        alert("Only number")
    }else{
        var filterTwo = twoMovies.filter(function(item) {
            if (item.imdb_rating >= inputRating ) {
                return true
            }
        });
    }
    render(filterTwo, elFlex);  
    
})

