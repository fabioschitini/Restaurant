
function dom(){
let content=document.querySelector("#content")
let mainDiv=document.createElement("div")
let high=document.createElement("h1")
let para=document.createElement("p");
let img=document.createElement("IMG");

   const domInsert=()=>{ 
        mainDiv.id="mainHome"
        img.src='Re.jpg';
        para.textContent="Our Restaraunt is well knwo for it's relaxing and conforting ambient, with an incredible varietis of foods on the catalogue";
        high.textContent="A Nice and quiet Restaraunt";
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



