
const item2 = document.getElementById('item-2')
const item2Image = item2.querySelector('img')
const item2P = item2.querySelector('p')
const itemContent2 = document.getElementById('item-content-2')

const item3 = document.getElementById('item-3')
const item3Image = item3.querySelector('img')
const item3P = item3.querySelector('p')
const itemContent3 = document.getElementById('item-content-3')

item2.onclick = () => {
    item2.classList.toggle('item-clicked')
    item2Image.classList.toggle('item-content-closed')
    item2P.classList.toggle('item-content-closed')

    itemContent2.classList.toggle('item-content-opened')
} 

item3.onclick = () => {
    item3.classList.toggle('item-clicked')
    item3Image.classList.toggle('item-content-closed')
    item3P.classList.toggle('item-content-closed')

    itemContent3.classList.toggle('item-content-opened')
} 
