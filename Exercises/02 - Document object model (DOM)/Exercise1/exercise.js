document.addEventListener('DOMContentLoaded', function(){
    // console.log(document.querySelectorAll('body div ul li[0]//'));
    console.log(document.documentElement.lastElementChild.lastElementChild.firstElementChild.firstElementChild);
    var el = document.documentElement.lastElementChild.lastElementChild.lastElementChild.firstElementChild.classList.remove('active');
    var add = document.documentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add('active');
});
