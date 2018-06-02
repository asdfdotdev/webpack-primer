let new_wrapper = document.getElementById('one_div').appendChild(document.createElement('div'))
let new_heading = new_wrapper.appendChild(document.createElement('h1'))
let new_paragrah = new_wrapper.appendChild(document.createElement('p'))
let new_image = new_wrapper.appendChild(document.createElement('img'))

new_heading.innerHTML = 'This is Vanilla JS'
new_paragrah.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
new_image.src = 'img/javascript.png'