import $ from 'jquery'

$.fn.jqueryify = function () {
    let heading = '<h1>This is a jQuery Plugin</h1>'
    let paragraph = '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>'
    let image = '<img src="img/jquery.gif"/>'

    $('<div>' + heading + paragraph + image + '</div>').appendTo( this )
}
