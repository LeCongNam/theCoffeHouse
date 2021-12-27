var listSize = document.getElementById('list-size-price')// thẻ ul
var liItem = listSize.querySelectorAll('li'); // thẻ li

sizeChoose = Array.from(liItem)

for (const aElement of sizeChoose) {
    aElement.onclick = function (e) {
        e.preventDefault();
        let li = e.target.closest('li')
        // remove active default
        let liActive = listSize.querySelector('li.active')
        liActive.classList.remove('active')
        // add active
        li.classList.add('active')
    }
}