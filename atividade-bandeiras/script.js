document.addEventListener('DOMContentLoaded', () => {
    
    const galleryContainer = document.getElementById('gallery-container');
    async function loadFlags() {
        try {
   
            const response = await fetch('countries.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const countriesData = await response.json();
            displayFlags(countriesData);

        } catch (error) {

            console.error("Erro ao carregar o arquivo JSON:", error);
            galleryContainer.innerHTML = '<p>Não foi possível carregar os dados das bandeiras. Tente novamente mais tarde.</p>';
        }
    }

    function displayFlags(countriesData) {
        galleryContainer.innerHTML = '';
        for (const code in countriesData) {
            const card = document.createElement('div');
            card.className = 'flag-card';

            const flagImage = document.createElement('img');
            flagImage.src = `svg/${code}.svg`;
            flagImage.alt = `Bandeira de ${countriesData[code]}`;
            
            const countryName = document.createElement('p');
            countryName.className = 'country-name';
            countryName.textContent = countriesData[code];

            card.appendChild(flagImage);
            card.appendChild(countryName);

            galleryContainer.appendChild(card);
        }
    }

    loadFlags();
});