const modified = document.getElementById('last-modified');
modified.style.color = 'white';

let lastMod = new Date(document.lastModified);

modified.innerHTML += lastMod;

// // Calculating the number of page visits..........
// if (localStorage.getItem('visitCount') === null) {
//     // If not, initialize it to 1 and set a flag in session storage
//     localStorage.setItem('visitCount', 1);
//     sessionStorage.setItem('visitedOnce', 'true');
// } else {
//     // Check if the flag is not set in session storage (indicating a new navigation)
//     if (sessionStorage.getItem('visitedOnce') === null) {
//         // If the flag is not set, increment the visit count and set the flag
//         let visitCount = parseInt(localStorage.getItem('visitCount'));
//         visitCount++;
//         localStorage.setItem('visitCount', visitCount);
//         sessionStorage.setItem('visitedOnce', 'true');
//     }
// }

// Update the content of the 'visit' element with the current visit count
// document.getElementById('visit').innerText = `Page Visits: ` + localStorage.getItem('visitCount');

const visitsDisplay = document.getElementById("visit");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.innerHTML += numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);