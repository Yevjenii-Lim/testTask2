let modal = document.querySelector('.modal')
let btnJoin = document.querySelector('.top')
let overLay = document.querySelector(".overlay")
let btnMore = document.querySelector('.know-more')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.mobile')
let closeBtn = document.querySelector('.close')
btnJoin.addEventListener('click', openModal)


btnMore.addEventListener('click', openModal)

function openModal() {
    modal.style.display = 'flex';
    overLay.style.display = 'block'
}

overLay.addEventListener('click', hideModal)


function hideModal() {
    modal.style.display = 'none'
    overLay.style.display = 'none'
}


burger.addEventListener('click', openMenu)

function openMenu() {
    if(menu.style.transform !== 'translateY(0%)') {
        menu.style.transform = 'translateY(0%)'
    }
    
}


closeBtn.addEventListener('click', close)

function close() {

    menu.style.transform = 'translateY(-100%)'
}

