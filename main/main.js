let menuView=() =>
{
    document.getElementById('actMenu').style.display = "none";
    document.getElementById('dropdownMenu').style.display = "block";
    
}
let startview=() =>
{

    document.getElementById('actMenu').addEventListener('click', menuView);
}
let start =() =>
{
	startview();
    console.log("llega hasta aca...")
}
window.addEventListener('DOMContentLoaded', start );