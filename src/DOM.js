
function dom(){
let content=document.querySelector("#content")
let mainDiv=document.createElement("div")
let high=document.createElement("h1")
let para=document.createElement("p");
let img=document.createElement("IMG");

   const domInsert=()=>{ 
        mainDiv.id="mainHome"
      img.src = 'Re.jpg';
      img.id='homeImage'
        para.textContent="Ours Restaraunt is well know for it's relaxing  ambient, with an incredible varieties of foods on the catalogue";
        para.id='introduction'
           high.textContent = "A Nice and quiet Restaraunt";
        content.appendChild(mainDiv);
        mainDiv.appendChild(high);
        mainDiv.appendChild(img);
        mainDiv.appendChild(para);
        content.value="home"
                        }

    return {
    domInsert,
    content
    }
            }
const Dom=dom()
export default Dom;



