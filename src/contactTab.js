import Dom from "./DOM"
function contactTabs(){
    console.log('yep')
    let mainDiv=document.createElement("div")
    let contactHigh=document.createElement("h1")
    let contactPara=document.createElement("p")
    let contactPara1=document.createElement("p")
    let contactPara2=document.createElement("p")

    const createTab=()=>{    mainDiv.id="mainContact"
    contactHigh.textContent="Contact Information"
        contactPara1.textContent = "Email:fabioschitini1@hotmail.com"
        contactPara2.textContent = "Phone:(55)XXXXX-XXXX"
        
             Dom.content.appendChild(mainDiv)
             mainDiv.appendChild(contactHigh)
        mainDiv.appendChild(contactPara)
        mainDiv.appendChild(contactPara1)
        mainDiv.appendChild(contactPara2)
      
             Dom.content.value="contact"
 
                       }
return {
    createTab,
}

                   }  

const contactTab=contactTabs()

export  default  contactTab