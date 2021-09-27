import Dom from "./DOM"
function menuTabs(){
    let mainDiv=document.createElement("div")
    let menuHigh=document.createElement("h1")
    let menuPara = document.createElement("p")
  let imgMenuPara = document.createElement("img")
  let imgMenuPara1 = document.createElement("img")
  let imgMenuPara2 = document.createElement("img")
  let imgMenuPara3 = document.createElement("img")

    let menuPara1 = document.createElement("p")
    let menuPara2 = document.createElement("p")
        let menuPara3 = document.createElement("p")



    const createTab=()=>{    mainDiv.id="mainMenu"
        menuHigh.textContent="Menu"
        menuPara.textContent = "Lobster"
            menuPara1.textContent = "Steak"
            menuPara2.textContent = "Fries"
        menuPara3.textContent = "Ice Cream"
        imgMenuPara.src = 'https://www.saveur.com/uploads/2019/02/08/KDOG4BJHWPBBGXDAWOOICB4O2Q.jpg'
        imgMenuPara1.src = 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2816f86937ebc7019a513d858cec8e0c55d38890'
        imgMenuPara2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWOeiirr7F9meepNZULqm6nPD71NWJaUqrg&usqp=CAU'
        imgMenuPara3.src = 'https://media-cdn.tripadvisor.com/media/photo-s/18/7c/da/68/bonmot-ice-cream.jpg'
        
       
             Dom.content.appendChild(mainDiv)
        mainDiv.appendChild(menuHigh)
         mainDiv.appendChild(menuPara)
        mainDiv.appendChild( imgMenuPara)
         mainDiv.appendChild(menuPara1)
        mainDiv.appendChild(imgMenuPara1)
        mainDiv.appendChild(menuPara2)
         mainDiv.appendChild( imgMenuPara2)
        mainDiv.appendChild(menuPara3)
         mainDiv.appendChild( imgMenuPara3)
       
             Dom.content.value="menu"

            }
return {
    createTab,
}

                }

const menuTab=menuTabs()

export  default menuTab