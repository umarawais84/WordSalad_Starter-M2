let userName = prompt('What is your name?')
let userAge = prompt('How old are you?')
console.log(userName)
console.log(userAge)

let myStory = `Hello ${userName}, how are you doing today? How does it feel to be ${userAge} years old?`
console.log(myStory)

if (userAge === null || userName === "") {
    userAge = 0
    userName = "User"
}


document.getElementById('story').innerHTML = myStory;