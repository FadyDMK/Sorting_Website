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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function start_bubble()  {
    var elements = document.getElementsByClassName('rectangle');
    var i,j,t,p;



    for(i=0;i<elements.length-1;i++){
        
        for (j = 0; j < elements.length-1-i; j++){

            
            elements[j].style.backgroundColor = "red";
            elements[j+1].style.backgroundColor  = "red";

            t=parseInt(window.getComputedStyle(elements[j]).height, 10);
            p=parseInt(window.getComputedStyle(elements[j+1]).height, 10);
            
            if (t>p){
                elements[j].style.height = p + 'px';
                elements[j+1].style.height = t + 'px';
            }

            

            
            await delay(100); // Adjust the delay duration as needed (in milliseconds)
            elements[j].style.backgroundColor = "blueviolet";
            elements[j+1].style.backgroundColor  = "blueviolet";

        }
    }
    
}

async function start_insert(){
    var elements = document.getElementsByClassName('rectangle');
    var i,j,t,p;

    for(i=1;i<elements.length;i++){
        let currentElement = parseInt(window.getComputedStyle(elements[i]).height, 10);
        let lastIndex = i - 1;

        while (lastIndex >= 0 && parseInt(window.getComputedStyle(elements[lastIndex]).height, 10) > currentElement) {
            
            
            t=parseInt(window.getComputedStyle(elements[lastIndex]).height, 10);
            elements[lastIndex+1].style.backgroundColor = "red";
            elements[lastIndex+1].style.height = t + 'px';
            await delay(100);
            elements[lastIndex+1].style.backgroundColor = "blueviolet";
            lastIndex--;
          }
          elements[lastIndex+1].style.height=currentElement +"px";
          await delay(100);
        }


    }

function start(){

    if (document.querySelector('input[name="sorting_alg"]:checked').value == "bubble"){
        start_bubble();
    }
    else if (document.querySelector('input[name="sorting_alg"]:checked').value == "insert"){
        start_insert();
    }
}