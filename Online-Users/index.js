/* 
    1. 
    
    Load users from users.json (originally from https://jsonplaceholder.typicode.com/users)
    
    Create a simple component that displays the user's username 
        -Alongside a green circle
        -The username and circle should be in individual divs
        -Both should be vertically and horizontally centered
        -The component should only be wide enough to Fit its Content (and some padding)
*/

async function getUsers() {
    let res = await fetch('users.json')
    let users = await res.json()
    return users
}

function getUserDiv(user) {
    return `
    <div class="my-online-user">
        <div class="user-username">${user.username}</div>
        <div class="user-online"></div>
    </div>
`
}

getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = getUserDiv(sampleUser)

    document.body.innerHTML = `<div class="my-online-users">
        ${users.map(user => getUserDiv(user)).join('')}
    </div>`
})

