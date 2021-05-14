import Dom from "./DOM"
function contactTabs(){
    let mainDiv=document.createElement("div")
    let contactHigh=document.createElement("h1")
    let contactPara=document.createElement("p")

    const createTab=()=>{    mainDiv.id="mainContact"
    contactHigh.textContent="This is the contacts"
        contactPara.textContent="Put information here"
             Dom.content.appendChild(mainDiv)
             mainDiv.appendChild(contactHigh)
             mainDiv.appendChild(contactPara)
             console.log(Dom.content.value)
             Dom.content.value="contact"
 
                       }
return {
    createTab,
}

                   }  

const contactTab=contactTabs()

export  default  contactTab