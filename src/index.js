document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    let allBreeds = []; 
  
    const fetchDogImages = async () => {
      try {
        const response = await fetch(imgUrl);
        const data = await response.json();
  
        if (data.status === "success") {
          data.message.forEach((imageUrl) => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = "A cute dog";
            imgElement.style.width = "200px";
            imgElement.style.margin = "10px"; 
            dogImageContainer.appendChild(imgElement);
          });
        }
      } catch (error) {
        console.error("Error fetching dog images:", error);
      }
    };
  
    const fetchDogBreeds = async () => {
      try {
        const response = await fetch(breedUrl);
        const data = await response.json();
  
        if (data.status === "success") {
          allBreeds = Object.keys(data.message);
          displayBreeds(allBreeds); 
        }
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };
  
    const displayBreeds = (breeds) => {
      dogBreedsList.innerHTML = ""; 
      breeds.forEach((breed) => {
        const liElement = document.createElement("li");
        liElement.textContent = breed.charAt(0).toUpperCase() + breed.slice(1); 
  
        liElement.addEventListener("click", () => {
          liElement.style.color = "blue"; 
        });
  
        dogBreedsList.appendChild(liElement);
      });
    };
  
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter));
      displayBreeds(filteredBreeds); 
    });

    fetchDogImages();
    fetchDogBreeds();
  });
  