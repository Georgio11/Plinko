let wrapper = document.querySelector('.wrapper');
let langList = document.querySelector(".lang_list");
let threeangle = document.querySelector(".curent span");
let listElems = document.querySelectorAll(".lang_list li");
let langBtnText = document.querySelector(".curent p");
let langBtn = document.querySelector(".curent");
let startBtn = document.querySelector(".btn button");
let ball = document.querySelector(".ball");
let ball2 = document.querySelector(".ball2");
let item1 = document.querySelector(".item:nth-child(1)");
let item2 = document.querySelector(".item:nth-child(2)");
let item4 = document.querySelector(".item:nth-child(4)");
let item5 = document.querySelector(".item:nth-child(5)");
let text = document.querySelector(".text > p");
let modal = document.querySelector(".modal");
let modalText1 = document.querySelector(".modal_text p:nth-child(1)");
let modalText2 = document.querySelector(".modal_text p:nth-child(2)");
let modalText3 = document.querySelector(".modal_text p:nth-child(3)");
let modalBtn = document.querySelector(".modal a");
let ball3 = document.querySelectorAll(".ball3");
let ball4 = document.querySelectorAll(".ball4");


langBtn.addEventListener('click', () => {
    langList.classList.toggle('active');
    threeangle.classList.toggle('active');
});

listElems.forEach(listElem => {
    listElem.addEventListener('click', (e) => {
        const value = e.target.textContent;
        langBtnText.innerHTML = value;
        
        if (value === 'hi') {
            text.innerHTML = 'खांचों को घुमाओ, <br>अपने बोनस का दावा करें';
            startBtn.innerHTML = 'शुरू करें';
            item1.innerHTML = '375% पर <br>प्रथम 3 <br>जमा';
            item2.innerHTML = 'कोशिश <br>दोबारा';
            item4.innerHTML = 'कोशिश <br>दोबारा';
            item5.innerHTML = '150% <br>पहला <br>जमा <br>बक्शीश';
            modalText1.innerHTML = 'स्वागत बोनस';
            modalText2.innerHTML = 'Gपहली 3 जमाओं पर 375% प्राप्त करें';
            modalText3.innerHTML = '₹36,000 तक';
            modalBtn.innerHTML = 'अभी पकड़ो';
        } else {
            text.innerHTML = 'Spin the slots, <br>claim your bonus';
            startBtn.innerHTML = 'START NOW';
            item1.innerHTML = '375% on <br>first 3 <br>deposits';
            item2.innerHTML = 'Try <br>again';
            item4.innerHTML = 'Try <br>again';
            item5.innerHTML = '150% <br>first <br>deposit <br>bonus';
            modalText1.innerHTML = 'WELCOME BONUS';
            modalText2.innerHTML = 'GET 375% ON FIRST 3 DEPOSITS';
            modalText3.innerHTML = 'UP TO ₹36,000';
            modalBtn.innerHTML = 'GRAB NOW';
        }

        langList.classList.remove('active');
        threeangle.classList.remove('active');
    });
});

let count = 0;

startBtn.addEventListener('click', ()=> {
    if(count == 0 ) {

        function addFirstClassWithInterval(index) {
            if (index < ball3.length) {
                ball3[index].classList.add("active"); 
                setTimeout(() => {
                    addFirstClassWithInterval(index + 1);
                }, 300); 
            }
        }
        
        setTimeout(() => {
            addFirstClassWithInterval(0);
        }, 300);
        
        startBtn.disabled = true;
        ball.classList.add('active');
        setTimeout(()=> {
            ball2.classList.add('block');
            item2.classList.add('active');
            ball3.forEach(ball => {
                ball.classList.remove('active')
            })
            startBtn.disabled = false;
        }, 1700)
        count++;
    } else {
        function addSecondClassWithInterval(index) {
            if (index < ball4.length) {
                ball4[index].classList.add("active"); 
                setTimeout(() => {
                    addSecondClassWithInterval(index + 1);
                }, 300); 
            }
        }
        
        setTimeout(() => {
            addSecondClassWithInterval(0);
        }, 300);

        ball2.classList.add('active');
        startBtn.disabled = true;
        setTimeout(()=> {
            item5.classList.add('active');
            modal.classList.add('active');
        }, 1700);
        setTimeout(()=> {
            modal.classList.add('opacity');
        }, 2000)
    }
});

function adaptationElements() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const aspectClass = aspectRatio >= 1.8
        ? 'modificate1'
        : aspectRatio >= 1.6
            ? 'modificate2'
            : aspectRatio > 1
                ? 'modificate3'
                : 'modificate4';

    wrapper.className = `wrapper ${aspectClass}`;
}

adaptationElements();

window.addEventListener('resize', adaptationElements);

function gameSize() {
    let gameContainer = document.querySelector(".game_container");
    let windowHeight = window.innerHeight;
    let scaleFactor = windowHeight / 1000; 
    if(window.innerHeight <= 950 && !wrapper.classList.contains('modificate4')) {
        gameContainer.style.transform = 'scale(' + scaleFactor + ')';
    }
}

gameSize();

window.addEventListener('resize', gameSize);