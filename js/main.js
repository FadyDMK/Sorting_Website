(function () {
    var elements = document.getElementsByClassName('rectangle');
    var i,r,marginLeft=-10.5;


    for (i = 0; i < elements.length; i++) {
    marginLeft += parseInt(window.getComputedStyle(elements[i]).marginLeft, 10) + 11;
    elements[i].style.marginLeft = marginLeft + '%';
    r=Math.floor(Math.random() * 70) + 1;
    elements[i].style.height = r + '%';


  }
})();