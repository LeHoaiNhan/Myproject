
$(document).ready(function(){ 
    footer_menu_click("clipboard");
})
function footer_menu_click(name)
{ 
    document.getElementById("home").style.display = 'none';
    document.getElementById("store").style.display = 'none';
    document.getElementById("clipboard").style.display = 'none';
    document.getElementById("location").style.display = 'none';
    document.getElementById("menu").style.display = 'none';
    document.getElementById(name).style.display = 'block';
 
}