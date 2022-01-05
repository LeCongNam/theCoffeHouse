var btnMenu = document.querySelector('.btn-menu-mobile')
var menuMobile = document.querySelector('.menu-mobile')
var closeIcon = document.querySelector('.close-icon')
var bgcMenu  = document.querySelector('.menu-mobile')
var nav  = document.getElementById('nav')


btnMenu.onclick= function () {
    // show menu mobbile
    menuMobile.classList.add('show')
}

closeIcon.onclick= function () {
    // hidden menu mobbile
    menuMobile.classList.remove('show')
}

// nav.onkeydown = function (e) {
//     e.preventDefault()
// }

bgcMenu.addEventListener('click',function (e) {
    // hidden menu mobbile
    menuMobile.classList.remove('show')
    e.stopPropagation()
}) 

nav.addEventListener('onkeydown', function (e) {
    bgcMenu.removeEventListener()
})