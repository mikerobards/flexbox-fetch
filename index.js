/* 
    1. 
        Use fetch() to load data from photos.json
        
        Display the photos inside of a FlexBox container
            The src will be https://picsum.photos/id/${photo.id}/100/100
            The alt text will be the photo.title from the json

        Use Flexbox to display the photos in a Row 
            The Row should Wrap to a new line on overflow
            Give each photo a white 0.1rem solid border
            Rounded corners at 0.7rem border-radius
            Each photo should be at least 1rem away from the photos around it
*/

/* 
    2. 
       Write a function to create the my-photos Component
       
       Create a Column Flexbox container around my-photos
       
       Create a new img and place it, centered, above my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/



async function getPhotos() {
    let res = await fetch("photos.json")
    let photos = await res.json()
    return photos
}

function getPhotosHTML(photos) {
    let myPhotosHTML = photos.map(photo => {
        return `<img src="https://picsum.photos/id/${photo.id}/100/100" alt="${photos.title}" class="my-photo">`
    }).join('')

    console.log(myPhotosHTML)

    return `<div class="my-photos">${myPhotosHTML}</div>`
}

getPhotos().then(photos => {
    document.body.innerHTML = getPhotosHTML(photos)
})