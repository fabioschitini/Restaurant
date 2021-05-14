
import Dom from "./DOM"
import menuTab from "./menuTab"
import contactTab from "./contactTab"

const  switchTabs=()=>{
    
    let menuButton=document.createElement("button")
    let contactsButton=document.createElement("button")
    let homePageButton=document.createElement("button")
    let homeDiv
    let menuDiv
    let contactDiv

    const createButtons=()=>{
                     homePageButton.textContent="Homepage"
                     menuButton.textContent="Menu"
                    contactsButton.textContent="Contacts"
                    Dom.content.appendChild(homePageButton)
                    Dom.content.appendChild(menuButton)
                    Dom.content.appendChild(contactsButton)
                                }

    const createTabs=()=>{ 
                    menuButton.addEventListener("click",deleteTabs)
                    contactsButton.addEventListener( "click", deleteTabs)
                    homePageButton.addEventListener("click",deleteTabs)
                    homePageButton.addEventListener("click", Dom.domInsert )
                    menuButton.addEventListener("click",menuTab.createTab )
                    contactsButton.addEventListener( "click", contactTab.createTab )
                             }

     const deleteTabs=()=>{
        if(Dom.content.value==="menu" ){
                    menuDiv=document.querySelector("#mainMenu") 
                    homePageButton.addEventListener("click",menuDiv.remove())
                    contactsButton.addEventListener("click",menuDiv.remove())
                                        }
        else if(Dom.content.value==="contact" )  {  
                    contactDiv=document.querySelector("#mainContact")
                    homePageButton.addEventListener("click",contactDiv.remove())
                    menuButton.addEventListener("click",contactDiv.remove())
                                                }
       else if(Dom.content.value==="home" )  {  
                    homeDiv=document.querySelector("#mainHome")
                    contactsButton.addEventListener("click",homeDiv.remove())
                    menuButton.addEventListener("click",homeDiv.remove())
                                            }
                                    }
                            
return {
    createButtons,
    createTabs,
}

                     }

const switchTab=switchTabs()
        switchTab.createButtons()
        Dom.domInsert()
        switchTab.createTabs()
        
