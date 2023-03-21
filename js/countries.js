const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join('');
}

// const getCountryHTML = country => {
//     // option 1 
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" alt="${country.name.common}">
//             <p>${country.capital}</p>
//             <button onclick="loadCountryByName('${country.name.common}')">Details</button>
//         </div>
//     `;
// }
const getCountryHTML = ({name, flags, capital, area,continents }) => {
    // option 2
    // const {name, flags, capital} = country; //parameter destructuring
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}" alt="${name.common}">
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Continent:</strong> ${continents}</p>
            <p><strong>Total Area:</strong> ${area}</p>
            <button onclick="loadCountryByName('${name.common}')">Details</button>
        </div>
    `;
}

loadCountries();