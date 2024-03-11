function createHeart(emoji, quantity){

    const display = document.createElement('span')
    document.querySelector('body').append(display)
    
     for(let i = 0 ; i< quantity ;i++){
        display.textContent += emoji
     }
}

export {createHeart}