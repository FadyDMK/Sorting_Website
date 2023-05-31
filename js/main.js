//this function randomizes the heights of the bars and organises them next to each other


function orderRect() {
    var elements = document.getElementsByClassName('rectangle');
    var i,r,marginLeft=-10;


    for (i = 0; i < elements.length; i++) {
    marginLeft += (window.innerWidth-(elements.length*10))/(elements.length+1);
    elements[i].style.marginLeft = marginLeft + 'px';
    r=Math.floor(Math.random() * 500) + 1;
    elements[i].style.height = r + "px";


  }
};
orderRect()

//this function allows us to change the number of columns with the value from the range input
function EditNum(){
    const num = parseInt(document.getElementById('val').value);
    const elements = document.getElementsByClassName('rectangle');

    if (elements.length<num){
        for (i=0;i<num-elements.length+1;i++){
            const el = document.createElement('div');
            el.classList.add('rectangle');
            const box = document.getElementById('output');
            box.appendChild(el);
        }
    }
    else if(elements.length>num){
        for (i=0;i<elements.length-num;i++){
            var parent = document.getElementById('output');
            var children = parent.getElementsByClassName('rectangle');

            // Remove the second child
            children[i].remove();
        }
    }
    orderRect()
}

//this function makes some output delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


//the sorting functions are async to use the delay function and show the progress of sorting
//this first function is bubble sort
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


//this second function is for sorting by insertion
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

    /*if (document.querySelector('input[name="sorting_alg"]:checked').value == "bubble"){
        start_bubble();
    }
    else if (document.querySelector('input[name="sorting_alg"]:checked').value == "insert"){
        start_insert();
    }*/

    switch(document.querySelector('input[name="sorting_alg"]:checked').value){
        case "bubble":
            start_bubble();
        case "insert":
            start_insert();
    }
}