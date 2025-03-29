const mySearchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("searchbutton");
const imageGallery = document.getElementById("image-gallery");
const myAPIKey = "9TNGUbf9CRB1SUSjhb6dXushjqZeNiUYCwRuGbkRp4RVrc6NeH2BIOGX";

searchButton.addEventListener("click", function () {

    let query= mySearchBar.value;
    console.log(query)

    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=30`;

    fetch(url, 
        {method: "GET", 
        headers: {
            "Authorization": myAPIKey
        }

    }).then(response => response.json()).then(data => {

        imageGallery.innerHTML = "";
        console.log(data.photos)
        data.photos.forEach(element => {

            const img = document.createElement("img");
            img.src = element.src.medium;
            img.id = "image";
            imageGallery.appendChild(img);
            
        });
    })

 

    
    
})