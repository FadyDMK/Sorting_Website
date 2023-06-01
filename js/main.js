//this function clears a div of its content
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}



//this function randomizes the heights of the bars and organises them next to each other


function orderRect() {
    var elements = document.getElementsByClassName('rectangle');
    var i,r,marginLeft=-10;

    for (i = 0; i < elements.length; i++) {
    
    // elements[i].style.marginLeft = marginLeft + 'px';
    r=Math.floor(Math.random() * 500) + 1;
    elements[i].style.height = r + "px";
    elements[i].style.left = i*(100/elements.length) + "%";
    elements[i].style.width = (100/elements.length) + "%";
    //elements[i].style.height = (i+1)*(100/elements.length) + "%";

  }
};
orderRect()

// range.addEventListener('input', EditNum())

//this function allows us to change the number of columns with the value from the range input
function EditNum(){
    var range = document.querySelector('#num');
    var num = parseInt(range.value,10);
    console.log(num);
    var elements = document.getElementsByClassName('rectangle');

    if (elements.length<num){
        for (i=0;i<num-elements.length+1;i++){
            const el = document.createElement('div');
            el.classList.add('rectangle');
            const box = document.getElementById('output');
            box.appendChild(el);
        }
    }
    else if(elements.length>num){
        clearBox("output");
        for (i=0;i<num;i++){
            const el = document.createElement('div');
            el.classList.add('rectangle');
            const box = document.getElementById('output');
            box.appendChild(el);
        }
    }
    orderRect()
}


window.addEventListener("resize",EditNum);

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

            

            
            await delay(75/(i*i)); // Adjust the delay duration as needed (in milliseconds)
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
            await delay(75/(i*i));
            elements[lastIndex+1].style.backgroundColor = "blueviolet";
            lastIndex--;
          }
          elements[lastIndex+1].style.height=currentElement +"px";
          await delay(75/(i*i));
        }


    }


async function start_quick(elements){
    
    var i;

    let pivot = elements[0];
    let leftArr = [];
    let rightArr = [];

    
    for (i=1; i< elements.length;i++){
        let currentElement = parseInt(window.getComputedStyle(elements[i]).height);
        if (currentElement < parseInt(window.getComputedStyle(pivot).height)){
            leftArr.push(i);
        }
        else{
            rightArr.push(i);
        }
        
    }

    for (i=0; i<leftArr.length;i++){
        t=parseInt(window.getComputedStyle(elements[leftArr[i]]).height, 10);
        elements[lastIndex+1].style.backgroundColor = "red";
        elements[i].style.height = t + 'px';
    }

    t=parseInt(window.getComputedStyle(pivot).height, 10);
    elements[lastIndex+1].style.backgroundColor = "green";
    elements[leftArr.length].style.height = t + 'px';

    for (i=leftArr.length+1; i<(rightArr.length+leftArr.length+1);i++){
        t=parseInt(window.getComputedStyle(elements[rightArr[i]]).height, 10);
         elements[lastIndex+1].style.backgroundColor = "blue";
        elements[i].style.height = t + 'px';
    }
    start_quick(elements.slice(0,leftArr.length-1));
    start_quick(elements.slice(leftArr.length+1,rightArr.length+leftArr.length));
}


function start(){
    switch(document.querySelector('input[name="sorting_alg"]:checked').value){
        case "bubble":
            start_bubble();
        case "insert":
            start_insert();
        case "quick":
            var elements = document.getElementsByClassName('rectangle');
            start_quick(elements);
    }
}