
const item2 = document.getElementById('item-2')
const item2Image = item2.querySelector('img')
const item2P = item2.querySelector('p')

const itemContent2 = document.getElementById('item-content-2')

item2.onclick = () => {
    item2.classList.toggle('item-clicked')
    itemContent2.classList.toggle('item-content-opened')
    item2Image.classList.toggle('item-content-closed')
    item2P.classList.toggle('item-content-closed')

    // if(itemContent2.classList == 'item-content-closed'){
    //     itemContent2.classList.remove('item-content-closed')
    //     itemContent2.classList.add('item-content-opened')  
    // }else{
    //     itemContent2.classList.remove('item-content-opened')
    //     itemContent2.classList.add('item-content-closed')
    // }
    
} 

console.log(item2)