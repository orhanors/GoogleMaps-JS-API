let allUsers = []

const getUsers = async function(url){
    const response = await fetch(url)
    const user = await response.json()
    allUsers = user
}


window.onload = function(){
    getUsers("https://jsonplaceholder.typicode.com/users")
}