const name1 = document.getElementById('name')
const button = document.getElementById('button')
const img = document.getElementById('img')
const nameDisplay = document.getElementById('nameDisplay')

name1.addEventListener('change', () => console.log('hey'))

img.addEventListener('click', () => console.log('img'))

button.addEventListener('click', () => {
    nameDisplay.innerHTML = name1.value
})

