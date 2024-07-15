// Define the base URL for API requests
const fetchUrl = 'https://code-challenge-3-chi.vercel.app/films';

// Fetch and display movies menu
function fetchAndDisplayMoviesMenu() {
    fetch(`${fetchUrl}`)
        .then(response => response.json())
        .then(movies => displayMoviesMenu(movies))
        .catch(error => console.error('Error fetching movies:', error));
}

// Display movies menu
function displayMoviesMenu(movies) {
    const moviesMenu = document.getElementById('films');
    moviesMenu.innerHTML = '';
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.classList.add('film', 'item');
        if (movie.capacity - movie.tickets_sold === 0) {
            li.classList.add('sold-out');
        }
        li.addEventListener('click', () => fetchMovieDetails(movie.id));
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent li click event from firing
            deleteMovie(movie.id, li);
        });
        
        li.appendChild(deleteButton);
        moviesMenu.appendChild(li);
    });
}

// Fetch and display movie details
function fetchMovieDetails(id) {
    fetch(`${fetchUrl}/${id}`)
        .then(response => response.json())
        .then(movie => displayMovieDetails(movie))
        .catch(error => console.error('Error fetching movie details:', error));
}

// Display movie details
function displayMovieDetails(movie) {
    const poster = document.getElementById('poster');
    poster.src = movie.poster;
    document.getElementById('title').textContent = movie.title;
    document.getElementById('runtime').innerHTML = `Runtime: <strong>${movie.runtime}</strong> min`;
    document.getElementById('showtime').textContent = `Showtime: ${movie.showtime}`;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('available-tickets').textContent = `Available Tickets: ${availableTickets}`;
    
    // Enable or disable buy ticket button based on availability
    const buyButton = document.getElementById('buy-title');
    if (availableTickets === 0) {
        buyButton.textContent = 'Sold Out';
        buyButton.disabled = true;
    } else {
        buyButton.textContent = 'Buy Ticket';
        buyButton.disabled = false;
    }
    
    // Store movie ID for buy ticket functionality
    document.getElementById('movie-id').textContent = movie.id;
}

// Buy ticket button click event
document.getElementById('buy-title').addEventListener('click', () => {
    const availableTicketsElement = document.getElementById('available-tickets');
    let availableTickets = parseInt(availableTicketsElement.textContent.split(': ')[1]);
    
    if (availableTickets > 0) {
        availableTickets--;
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
        const movieId = document.getElementById('movie-id').textContent;
        
        // Update tickets_sold for the movie in the backend
        fetch(`${fetchUrl}/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tickets_sold: movie.capacity - availableTickets })
        })
        .then(() => fetchAndDisplayMoviesMenu()) // Refresh movies menu after updating tickets_sold
        .catch(error => console.error('Error buying ticket:', error));
    } else {
        alert('Sorry, this film is sold out!');
    }
});

// Delete movie function
function deleteMovie(id, listItem) {
    fetch(`${fetchUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => listItem.remove()) // Remove the movie from UI
    .catch(error => console.error('Error deleting movie:', error));
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayMoviesMenu();
});

displayMovieDetails();