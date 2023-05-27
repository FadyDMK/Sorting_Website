//this function randomizes the heights of the bars and organises them next to each other
(function () {
    var elements = document.getElementsByClassName('rectangle');
    var i,r,marginLeft=-10.5;


    for (i = 0; i < elements.length; i++) {
    marginLeft += parseInt(window.getComputedStyle(elements[i]).marginLeft, 10) + 11;
    elements[i].style.marginLeft = marginLeft + '%';
    r=Math.floor(Math.random() * 500) + 1;
    elements[i].style.height = r + "px";


  }
})();

function start()  {
    var elements = document.getElementsByClassName('rectangle');
    var i=1,j,t,p;

    for(i=0;i<elements.length;i++){
        for (j = 0; j <= elements.length-1; j++){
            t=parseInt(window.getComputedStyle(elements[j]).height, 10);
            p=parseInt(window.getComputedStyle(elements[j+1]).height, 10);
            if (t>p){
                
                elements[j].style.height = p + 'px';
                elements[j+1].style.height = t + 'px';
            }
        }
    }
    }
    

