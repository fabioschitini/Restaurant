(()=>{"use strict";const e=function(){let e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("IMG");return{domInsert:()=>{t.id="mainHome",o.src="Re.jpg",c.textContent="Our Restaraunt is well knwo for it's relaxing and conforting ambient, with an incredible varietis of foods on the catalogue",n.textContent="A Nice and quiet Restaraunt",e.appendChild(t),t.appendChild(o),t.appendChild(n),t.appendChild(c),e.value="home"},content:e}}(),t=function(){let t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p");return{createTab:()=>{t.id="mainMenu",n.textContent="This is the menu",c.textContent="put pompous text in here,lol",e.content.appendChild(t),t.appendChild(n),t.appendChild(c),e.content.value="menu"}}}(),n=function(){let t=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p");return{createTab:()=>{t.id="mainContact",n.textContent="This is the contacts",c.textContent="Put information here",e.content.appendChild(t),t.appendChild(n),t.appendChild(c),console.log(e.content.value),e.content.value="contact"}}}(),c=(()=>{let c,o,a,d=document.createElement("button"),i=document.createElement("button"),r=document.createElement("button");const l=()=>{"menu"===e.content.value?(o=document.querySelector("#mainMenu"),r.addEventListener("click",o.remove()),i.addEventListener("click",o.remove())):"contact"===e.content.value?(a=document.querySelector("#mainContact"),r.addEventListener("click",a.remove()),d.addEventListener("click",a.remove())):"home"===e.content.value&&(c=document.querySelector("#mainHome"),i.addEventListener("click",c.remove()),d.addEventListener("click",c.remove()))};return{createButtons:()=>{r.textContent="Homepage",d.textContent="Menu",i.textContent="Contacts",e.content.appendChild(r),e.content.appendChild(d),e.content.appendChild(i)},createTabs:()=>{d.addEventListener("click",l),i.addEventListener("click",l),r.addEventListener("click",l),r.addEventListener("click",e.domInsert),d.addEventListener("click",t.createTab),i.addEventListener("click",n.createTab)}}})();c.createButtons(),e.domInsert(),c.createTabs()})();