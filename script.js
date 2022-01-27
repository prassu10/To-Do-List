// darkmode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    document.getElementById("home").classList.toggle('dark')
    document.getElementById("check").checked = true;
    if(checkbox.checked==false){
        document.getElementById("check").checked = false;
    }
});

const check = document.getElementById('check');
check.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    document.getElementById("home").classList.toggle('dark')
    document.getElementById("checkbox").checked = true;
    if(check.checked==false){
        document.getElementById("checkbox").checked = false;
    }
});


$(document).ready(function(){
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});










