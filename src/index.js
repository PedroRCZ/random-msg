const messages = [
    "Ana",
    "Pedro",
    "Diego",
    "Carlos"
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message)
}

module.exports = {randomMsg}