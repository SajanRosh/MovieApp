let api = 'https://www.omdbapi.com/?apikey=61e576a4&t=';
// fetch(api).then((data) => {
//     return data.json();
// }).then((data) => {
//     console.log(data);
// })

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let genre = document.getElementById('genre');
let actors = document.getElementById('actors');
let directors = document.getElementById('directors');
let awards = document.getElementById('awards');
let collection = document.getElementById('collection');
let ln = document.getElementById('ln');
let poster = document.getElementById('poster');
let rating = document.getElementById('rating');
let container = document.getElementById('container');
container.classList.add('hidden');
let error = document.getElementById('error');
let suggestion = document.querySelector('.suggestion');

search = () => {
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;

    fetch(query).then(data => data.json()).then(data =>{
            error.innerText = ''
        if(data.Error === 'Movie not found!'){
            error.innerText = 'Movie Not Found'
        }else{
            container.classList.remove('hidden');
            title.innerText = data.Title;
            desc.innerText = data.Plot;
            actors.innerText = data.Actors;
            directors.innerText = data.Director;
            genre.innerText = data.Genre;
            awards.innerText = data.Awards;
            collection.innerText = data.BoxOffice;
            ln.innerText = data.Language;
            rating.innerText = data.imdbRating;
            poster.src= data.Poster;
            if(data.imdbRating >= 7){
                suggestion.innerText = 'Worth Watching';
                suggestion.classList.remove('danger');
                suggestion.classList.remove('watch');
                suggestion.classList.add('success');
                //suggestion.style.color = 'green';
            }else if(data.imdbRating > 6 && data.imdbRating < 7){
                suggestion.innerText = 'Can Watch';
                suggestion.classList.remove('success');
                suggestion.classList.remove('danger');
                suggestion.classList.add('watch');
            }
            else{
                suggestion.innerText= 'Time Waste';
                suggestion.classList.remove('success');
                suggestion.classList.remove('watch');
                suggestion.classList.add('danger');
                // suggestion.style.color = 'red'
            }
        }       
    });
}


