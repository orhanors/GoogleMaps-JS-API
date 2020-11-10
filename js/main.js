let allUsers = []

const getUsers = async function(url){
    const response = await fetch(url)
    const user = await response.json()
    allUsers = user

    let searchBar = document.getElementById("searchBar")
    searchBar.addEventListener("keyup",(e)=>handleSelect(e))
    
}

const search = function(){
    let selected = selectedOption()
    // filteredSearch(selected)
}

const filteredSearch = function(array,selected){
    array = array.filter()
}
const handleSelect = function(e){
    
    if (e.keyCode === 13){
        search()
    }
}



const selectedOption = function(){
    let select = document.getElementById("slct")
    return select.options[select.selectedIndex].text.toLowerCase()
}

window.onload = function(){
    getUsers("https://jsonplaceholder.typicode.com/users")
    
    
}