



const API_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"

const getRandomObjectFromArray = array =>{
    return array[Math.floor(Math.random() * array.length)];
}

const getAllObjects = async ()=>{

    const response = await fetch(API_URL);
    const objects = await response.json();

    return objects.objectIDs

}

const getOneObjects = async (objectID)=>{

    const response = await fetch(API_URL + "/" + objectID);
    const object = await response.json();

    return object;

}

getAllObjects().then((data)=>{
    const randomObjectID = getRandomObjectFromArray(data);
    getOneObjects(randomObjectID).then((object)=>{
        paintArtworkOnPage(object);
    });
});

const paintArtworkOnPage = (item)=>{
    const artWorkConatiner = document.getElementById("main-art-item")
    artWorkConatiner.innerHTML = 
    `
    <div class="art-wrapper">
    <img class="art-image" src=${item.primaryImageSmall}>
    <h2> ${item.title} </h2>
    <p> ${item.medium} </p>
    </div>`
}