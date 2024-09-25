console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
  
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
  
    fetchDogImages();
  });