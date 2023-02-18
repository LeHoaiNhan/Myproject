
$(document).ready(function(){ 
})
function footer_menu_click(name)
{ 
    for (let el of document.querySelectorAll('.footer-menu-layout')) el.style.visibility = 'hidden';
    for (let el of document.querySelectorAll('.'+name)) el.style.visibility = 'show';
 
}