//Create div HTML element
// let div1 = document.createElement('div');
// div1.id = "div1";
// div1.className = "div1Class";
// div1.style = "background-color: red;";
// div1.style.width ="250px";
// div1.style.height ="250px";

// get the div that will contain the full etch a sketch
// let griddy = document.getElementById("griddy");
// griddy.setAttribute("class",griddy)
// div1.textContent = "#1";
// griddy.appendChild(div1);

// console.log(griddy.innerHTML);

function divCreater(){
   let divvy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
    23,24,25,26,27,28,29,30,31,32
   ];
   let parentDiv = document.createElement('div');
   let parentDivClass = "parentDiv";
   document.body.appendChild(parentDiv);
   parentDiv.setAttribute('class',parentDivClass);
   let gridSection = "gridSection";
    for (i=0; i < divvy.length; i++ ){
        let div = document.createElement('div');
        div.setAttribute('id', divvy[i]);
        div.setAttribute('class', gridSection)
        div.addEventListener('mouseenter', event =>{
            div.style.backgroundColor = 'tomato';
        })
        div.textContent = divvy[i];
        document.body.appendChild(div);
        parentDiv.appendChild(div);
    }
}

divCreater();

//OLD CODE Delete Soon! Select all child divs with the class gridSection

// let div = document.querySelectorAll(".gridSection");

// for (let i= 0; i <div.length; i++){
// div[i].addEventListener("mouseover", mouseHover);
    // console.log("Mouse Over!!");

// }

//Find a way to target each id of the Divs, Maybe an if Statement.
function mouseHover (){
    let x = document.querySelectorAll(".gridSection");
    x.forEach(gridSection => {
        gridSection.style.backgroundColor ="red";
    });
}


// divCreater.textContent = "I did it!";
// griddy.appendChild(divCreater);
