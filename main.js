(()=>{"use strict";const e=function(){let e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),a=document.createElement("IMG");return{domInsert:()=>{t.id="mainHome",a.src="Re.jpg",c.textContent="Our Restaraunt is well know for it's relaxing  ambient, with an incredible varieties of foods on the catalogue",c.id="introduction",n.textContent="A Nice and quiet Restaraunt",e.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(c),e.value="home"},content:e}}(),t=function(){let t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),a=document.createElement("img"),d=document.createElement("img"),o=document.createElement("img"),i=document.createElement("img"),r=document.createElement("p"),m=document.createElement("p"),l=document.createElement("p");return{createTab:()=>{t.id="mainMenu",n.textContent="Menu",c.textContent="Lobster",r.textContent="Steak",m.textContent="Fries",l.textContent="Ice Cream",a.src="https://www.saveur.com/uploads/2019/02/08/KDOG4BJHWPBBGXDAWOOICB4O2Q.jpg",d.src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2816f86937ebc7019a513d858cec8e0c55d38890",o.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWOeiirr7F9meepNZULqm6nPD71NWJaUqrg&usqp=CAU",i.src="https://media-cdn.tripadvisor.com/media/photo-s/18/7c/da/68/bonmot-ice-cream.jpg",e.content.appendChild(t),t.appendChild(n),t.appendChild(c),t.appendChild(a),t.appendChild(r),t.appendChild(d),t.appendChild(m),t.appendChild(o),t.appendChild(l),t.appendChild(i),e.content.value="menu"}}}(),n=function(){console.log("yep");let t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),a=document.createElement("p"),d=document.createElement("p");return{createTab:()=>{t.id="mainContact",n.textContent="Contact Information",a.textContent="Email:fabioschitini1@hotmail.com",d.textContent="Phone:(55)XXXXX-XXXX",e.content.appendChild(t),t.appendChild(n),t.appendChild(c),t.appendChild(a),t.appendChild(d),e.content.value="contact"}}}(),c=(()=>{let c,a,d,o=document.createElement("div"),i=document.createElement("button"),r=document.createElement("button"),m=document.createElement("button");const l=()=>{"menu"===e.content.value?(a=document.querySelector("#mainMenu"),m.addEventListener("click",a.remove()),r.addEventListener("click",a.remove())):"contact"===e.content.value?(d=document.querySelector("#mainContact"),m.addEventListener("click",d.remove()),i.addEventListener("click",d.remove())):"home"===e.content.value&&(c=document.querySelector("#mainHome"),r.addEventListener("click",c.remove()),i.addEventListener("click",c.remove()))};return{createButtons:()=>{m.textContent="Homepage",i.textContent="Menu",r.textContent="Contacts",o.id="btnContainer",e.content.appendChild(o),o.appendChild(m),o.appendChild(i),o.appendChild(r)},createTabs:()=>{i.addEventListener("click",l),r.addEventListener("click",l),m.addEventListener("click",l),m.addEventListener("click",e.domInsert),i.addEventListener("click",t.createTab),r.addEventListener("click",n.createTab)}}})();c.createButtons(),e.domInsert(),c.createTabs()})();