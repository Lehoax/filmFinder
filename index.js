var btnSearch = document.getElementById('search')

function displayMovies(movies) {
    var divMovie = document.getElementById('movie')
    console.log(movies);
    if (movies.Response == "False") {
        console.log("pas de film");
    } else {
        divMovie.innerHTML = '<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src="' + movies.Poster + '" class="img-fluid rounded-start" alt="..."></div> <div class = "col-md-8" > <div class = "card-body"><h5 class = "card-title" > ' + movies.Title + ' </h5> <p class = "card-text" > ' + movies.Plot + ' </p> <button type="button" id="readMore" class="btn btn-primary">Read more</button></div > </div> </div > </div>'
    }
}

function displayModal(movies) {
    var modal = document.getElementById("modal");
    modal.innerHTML = '<div class="modal-content"><div class="right"><img id="close" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyOXB0IiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgd2lkdGg9IjMyOXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOTQuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiLz48L3N2Zz4="/></div><img src="' + movies.Poster + '" class="img-modal" alt="..."><div class = "card-body"><h5 class = "card-title" > ' + movies.Title + ' </h5> <p class = "card-text" > ' + movies.Plot + ' </p> </div>'
    modal.classList.add('show')
    var close = document.getElementById('close')
    close.addEventListener("click", function() {
        var modal = document.getElementById("modal");
        modal.classList.remove('show')
    })


}
btnSearch.addEventListener("click", function() {
    var contentSearch = document.getElementById('title').value
    var apiKey = "af8e771f"
    var url = "http://www.omdbapi.com/?t=" + contentSearch + "&apikey=" + apiKey
    var request = fetch(url)
    request
        .then((data) => data.json())
        .then(function(data) {
            displayMovies(data)
            var readMore = document.getElementById('readMore')
            readMore.addEventListener("click", function() {
                displayModal(data)
            })
        })
        .catch(function(error) {
            console.log(error);
        });
})