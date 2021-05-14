import Dom from "./DOM"

const deleteHome=()=>{
    let menuDiv=document.querySelector("#mainMenu")
let contactDiv=document.querySelector("#mainContact")
homePageButton.addEventListener("click",()=>{menuDiv.remove()})
 homePageButton.addEventListener("click",()=>{menuDiv.remove()})
        }

        const deleteMenu=()=>{
            if (Dom.content.value==="home"){console.log("y")}
            let homeDiv=document.querySelector("#mainHome")
        let contactDiv=document.querySelector("#mainContact")
        menuButton.addEventListener("click",()=>{contactDiv.remove()})
           menuButton.addEventListener("click",()=>{homeDiv.remove()})
                }

                const deleteContacts=()=>{
                    let homeDiv=document.querySelector("#mainHome")
                    let menuDiv=document.querySelector("#mainMenu")
                    contactsButton.addEventListener("click",()=>{menuDiv.remove()})
           contactsButton.addEventListener("click",()=>{homeDiv.remove()})
                        }
        


                    
// const deleteTabs=()=>{
   // let menuDiv=document.querySelector("#mainMenu")
   // let contactDiv=document.querySelector("#mainContact")
   // let homeDiv=document.querySelector("#mainHome")
  // menuButton.addEventListener("click",()=>{contactDiv.remove()})
   //menuButton.addEventListener("click",()=>{homeDiv.remove()})
  // contactsButton.addEventListener("click",()=>{menuDiv.remove()})
  // contactsButton.addEventListener("click",()=>{homeDiv.remove()})
  // homePageButton.addEventListener("click",()=>{menuDiv.remove()})
  // homePageButton.addEventListener("click",()=>{menuDiv.remove()})
//}