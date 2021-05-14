import Dom from "./DOM"
function menuTabs(){
    let mainDiv=document.createElement("div")
    let menuHigh=document.createElement("h1")
    let menuPara=document.createElement("p")

    const createTab=()=>{    mainDiv.id="mainMenu"
        menuHigh.textContent="This is the menu"
        menuPara.textContent="put pompous text in here,lol"
             Dom.content.appendChild(mainDiv)
             mainDiv.appendChild(menuHigh)
             mainDiv.appendChild(menuPara)
             Dom.content.value="menu"

            }
return {
    createTab,
}

                }

const menuTab=menuTabs()

export  default menuTab