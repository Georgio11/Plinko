let wrapper=document.querySelector(".wrapper"),langList=document.querySelector(".lang_list"),threeangle=document.querySelector(".curent span"),listElems=document.querySelectorAll(".lang_list li"),langBtnText=document.querySelector(".curent p"),langBtn=document.querySelector(".curent"),startBtn=document.querySelector(".btn button"),ball=document.querySelector(".ball"),ball2=document.querySelector(".ball2"),item1=document.querySelector(".item:nth-child(1)"),item2=document.querySelector(".item:nth-child(2)"),item4=document.querySelector(".item:nth-child(4)"),item5=document.querySelector(".item:nth-child(5)"),text=document.querySelector(".text > p"),modal=document.querySelector(".modal"),modalText1=document.querySelector(".modal_text p:nth-child(1)"),modalText2=document.querySelector(".modal_text p:nth-child(2)"),modalText3=document.querySelector(".modal_text p:nth-child(3)"),modalBtn=document.querySelector(".modal a"),ball3=document.querySelectorAll(".ball3"),ball4=document.querySelectorAll(".ball4");langBtn.addEventListener("click",(()=>{langList.classList.toggle("active"),threeangle.classList.toggle("active")})),listElems.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.textContent;langBtnText.innerHTML=t,"hi"===t?(text.innerHTML="खांचों को घुमाओ, <br>अपने बोनस का दावा करें",startBtn.innerHTML="शुरू करें",item1.innerHTML="375% पर <br>प्रथम 3 <br>जमा",item2.innerHTML="कोशिश <br>दोबारा",item4.innerHTML="कोशिश <br>दोबारा",item5.innerHTML="150% <br>पहला <br>जमा <br>बक्शीश",modalText1.innerHTML="स्वागत बोनस",modalText2.innerHTML="Gपहली 3 जमाओं पर 375% प्राप्त करें",modalText3.innerHTML="₹36,000 तक",modalBtn.innerHTML="अभी पकड़ो"):(text.innerHTML="Spin the slots, <br>claim your bonus",startBtn.innerHTML="START NOW",item1.innerHTML="375% on <br>first 3 <br>deposits",item2.innerHTML="Try <br>again",item4.innerHTML="Try <br>again",item5.innerHTML="150% <br>first <br>deposit <br>bonus",modalText1.innerHTML="WELCOME BONUS",modalText2.innerHTML="GET 375% ON FIRST 3 DEPOSITS",modalText3.innerHTML="UP TO ₹36,000",modalBtn.innerHTML="GRAB NOW"),langList.classList.remove("active"),threeangle.classList.remove("active")}))}));let count=0;function adaptationElements(){const e=window.innerWidth/window.innerHeight,t=e>=1.8?"modificate1":e>=1.6?"modificate2":e>1?"modificate3":"modificate4";wrapper.className=`wrapper ${t}`}function gameSize(){let e=document.querySelector(".game_container"),t=window.innerHeight/1e3;window.innerHeight<=950&&!wrapper.classList.contains("modificate4")&&(e.style.transform="scale("+t+")")}startBtn.addEventListener("click",(()=>{if(0==count){function e(t){t<ball3.length&&(ball3[t].classList.add("active"),setTimeout((()=>{e(t+1)}),300))}setTimeout((()=>{e(0)}),300),startBtn.disabled=!0,ball.classList.add("active"),setTimeout((()=>{ball2.classList.add("block"),item2.classList.add("active"),ball3.forEach((e=>{e.classList.remove("active")})),startBtn.disabled=!1}),1700),count++}else{function t(e){e<ball4.length&&(ball4[e].classList.add("active"),setTimeout((()=>{t(e+1)}),300))}setTimeout((()=>{t(0)}),300),ball2.classList.add("active"),startBtn.disabled=!0,setTimeout((()=>{item5.classList.add("active"),modal.classList.add("active")}),1700),setTimeout((()=>{modal.classList.add("opacity")}),2e3)}})),adaptationElements(),window.addEventListener("resize",adaptationElements),gameSize(),window.addEventListener("resize",gameSize);