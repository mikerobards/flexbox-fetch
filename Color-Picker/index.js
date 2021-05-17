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
    let response = await fetch("https://apis.scrimba.com/hexcolors?count=25")
    let data = await response.json()
    let colors = data.colors

    displayColors(colors)

}

getColors()