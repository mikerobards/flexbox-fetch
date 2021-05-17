/* 
    Create a variable to store the count of colors to be loaded
    
    Update the getColors() function to take that count as a parameter
    
    Set the count to 100 colors, update the .my-color class to maintain the grid structure
*/
let numColors = 100

function displayColors(colors) {
    console.log(colors)

    let myColorsHTML = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')

    console.log(myColorsHTML)

    document.body.innerHTML = `
        <div class="my-colors">
            ${myColorsHTML}
        </div>
    `
}


async function getColors() {
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${numColors}`)
    let data = await response.json()
    let colors = data.colors

    displayColors(colors)

}

getColors()