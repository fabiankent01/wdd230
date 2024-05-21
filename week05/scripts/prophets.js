const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.getElementById("cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
}
  
const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        const section = document.createElement("section");
        section.setAttribute('id', 'naaa');

        const fullName = document.createElement("h2");
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        const birthDate = document.createElement("p");
        birthDate.setAttribute('class', "p1");
        birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`;

        const birthPlace = document.createElement('p');
        birthPlace.setAttribute('class', 'p1');
        birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        const portrait = document.createElement("img");
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', fullName);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('height', '200');
        portrait.setAttribute('width', '150');

        section.appendChild(fullName);
        section.append(birthDate, birthPlace);
        section.appendChild(portrait);

        cards.appendChild(section);
    });
}
  
getProphetData();