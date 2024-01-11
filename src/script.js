
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const texts = [' Frontend Developer', ' UI & UX Developer'];
var count = 0;
var index = 0;
var decrement = 0;
var currentText = '';
var letter = '';

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const typeWrite = async () => {
    if (count == texts.length) {
        count = 0;
    }
    currentWord = texts[count];
    currentLetter = currentWord.slice(0, ++index);
    document.querySelector(".job-bar").textContent = currentLetter;
    if (index == currentWord.length) {
        await sleep(1500);
        while (index > 0) {
            currentLetter = currentWord.slice(0, --index);
            document.querySelector(".job-bar").textContent = currentLetter;
            await sleep(50);
        }
        count++;
        index = 0;
        await sleep(500);
    }
    setTimeout(typeWrite, Math.random() * 200 + 50);
}

const mainRes = document.querySelector(".short-resume-i1");
const beforeUnloads = document.querySelector(".beforeunloads")
const pages = document.querySelector("#page")
beforeUnloads.style.display = "none";
document.body.overflowY = "hidden";
pages.overflowY = "hidden";

setTimeout(() => {
  
    mainRes.style.display = "";
    const swiper = new Swiper('.swiper', {
        effect: "cube",
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,

        },
        speed: 4000,

    });

    document.body.overflowY = "auto";
    pages.overflowY = "auto";
    beforeUnloads.style.display = "";
    var swiper2 = new Swiper('.swiper2', {
        effect: "coverflow",
        direction: 'horizontal',
        loop: true,
        grabCursor: true,

        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        coverflowEffect: {
            slideShadows: false,
            rotate: 20,
            scale: 0.55,
        }
        
    });



}, 3000);





const linkAnmFadeTimer = document.querySelector(".link-anim-fade") 
const navTmr = document.querySelector("nav") 
const shortResTmr = document.querySelector(".short-resume-i1") 
const linkCon = document.querySelector(".nav-links-effect-container");

setTimeout(() => {  
    linkAnmFadeTimer.style.visibility = "visible";
    navTmr.style.display = "block";


    typeWrite();
}, 3000);
    


const downloadCv = document.querySelector("#downloadCv");
const submitCont = document.querySelector("#submitC");
const downloadText = document.querySelector(".download-text");
const submitContText = document.querySelector(".submit-text");
const spinnerAnim = document.querySelector(".spinner-anim");


downloadCv.addEventListener("click", () => {
    downloadText.style.top = "-100px";
    downloadCv.style.pointerEvents = "none";
    setTimeout(() => {
        downloadCv.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
    }, 250);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text">Henüz eklemedim :(</span>'
    }, 2500);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text"><i class="fa-solid fa-file-arrow-down"></i>Özgeçmiş (CV)</span>'
        downloadCv.style.pointerEvents = "auto";
    }, 7000);
})

const nameInput = document.querySelector(".c-name")
const areaContainer = document.querySelectorAll(".area-container")
const emailInput = document.querySelector(".c-email")
const errMessage = document.querySelectorAll(".errmessage")
const textareaInput = document.querySelector(".textarea")



function validate(email) {
    var emailValid = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    return emailValid.test(email);
}


submitCont.addEventListener("click", () => {
    

    for (let i = 0; i < areaContainer.length; i++) {
        if (nameInput.value.trim().length < 2 || validate(emailInput.value) === false || textareaInput.value.trim().length < 10) {
            areaContainer[i].classList.add("error")
            errMessage[i].style.display = "block";
            if (nameInput.value.trim().length < 1) {

                errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>İsminizi bilmem gerek!";
            }
            if (emailInput.value.trim().length < 1) {

                errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>Size nereden ulaşabileceğimi bilmeliyim!";
            }
            if (textareaInput.value.trim().length < 1) {

                errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>Bana mesaj göndermeniz gerek!";
            }
            if (nameInput.value.trim().length > 2) {
                areaContainer[0].classList.remove("error")
                errMessage[0].style.display = "none";
            }
            if (validate(emailInput.value) === true) {
                areaContainer[1].classList.remove("error")
                errMessage[1].style.display = "none";
            }
            if (textareaInput.value.trim().length > 10) {
                areaContainer[2].classList.remove("error")
                errMessage[2].style.display = "none";
            }
            submitCont.classList.add("shake")
            setTimeout(() => {
                submitCont.classList.remove("shake")
            }, 400);
            
        } else if (validate(emailInput.value) === true){
            submitCont.classList.remove("shake")
            areaContainer[i].classList.remove("error")
            errMessage[i].style.display = "none";
            submitContText.style.top = "-100px";
            submitCont.style.pointerEvents = "none";
            setTimeout(() => {
                submitCont.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
            }, 250);

            var nameValue = nameInput.value;
            
            setTimeout(() => {
                submitCont.classList.add("okbtn")
                submitCont.innerHTML = '<span class="download-text"><i class="fa-solid fa-check"></i>Teşekkürler!</span>'             
                nameInput.value = "";
                emailInput.value = "";
                textareaInput.value = "";
            }, 2500);

            setTimeout(() => {
                submitCont.classList.remove("okbtn")
                submitCont.innerHTML = 'Gönder'
                submitCont.style.pointerEvents = "auto";
            }, 7000);

        }
    }

})



nameInput.addEventListener("input", ()=>{

    if (nameInput.value.trim().length > 2) {
        areaContainer[0].classList.remove("error")
        errMessage[0].style.display = "none";
    }
    if (nameInput.value.trim().length <= 2){
        areaContainer[0].classList.add("error")
        errMessage[0].style.display = "block";
        errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>Bunun bir isim olduğundan emin misiniz?";
    }
    if (nameInput.value.trim().length < 1) {
        errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>İsminizi bilmem gerek!";
    }
})

emailInput.addEventListener("input", () => {

        if (validate(emailInput.value) === true) {
            areaContainer[1].classList.remove("error")
            errMessage[1].style.display = "none";
        }
        if (validate(emailInput.value) === false) {
            areaContainer[1].classList.add("error")
            errMessage[1].style.display = "block";
            errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>Hmm, bu bir email adresine hiç benzemiyor...";
        }
        if (emailInput.value.trim().length < 1) {
            errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>Size nereden ulaşabileceğimi bilmeliyim!";
        }
    
})

textareaInput.addEventListener("input", () => {
    errMessage[2].style.color = "";
    if (textareaInput.value.trim().length > 10) {
        areaContainer[2].classList.remove("error")
        errMessage[2].style.display = "none";
    }
    if (textareaInput.value.trim().length <= 10) {
        areaContainer[2].classList.add("error")
        errMessage[2].style.display = "block";
        errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>Mesaj çok kısa!";
    }
    if (textareaInput.value.trim().length < 1) {
        errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>Bana mesaj göndermeniz gerek!";
    }
})



    const nthAll = document.querySelectorAll("#nth a");
    const dotLinkEffect = document.querySelector(".dot-link-effect");

    function removeAllClass_fromNth() {
        const nthAll = document.querySelectorAll("#nth a");
        for (let i = 0; i < nthAll.length; i++) {
            dotLinkEffect.classList.remove("active"+i)
        }
    }

    for (let i = 0; i < nthAll.length; i++) {
        nthAll[i].addEventListener("click", () => {
            removeAllClass_fromNth()
            dotLinkEffect.classList.add("active"+i)
        })     
    }

    for (let i = 0; i < nthAll.length; i++) {
        nthAll[i].addEventListener("mouseover", () => {
            for (let i = 0; i < nthAll.length; i++) {
                nthAll[i].style.opacity = ".30"
            }
            nthAll[i].style.opacity = "1"
        })

        nthAll[i].addEventListener("mouseout", () => {
            for (let i = 0; i < nthAll.length; i++) {
                nthAll[i].style.opacity = "1"
            }
        })
    }
   


window.addEventListener('scroll', function () {
    var aboutus = document.getElementById('introduction');
    var aboutus_top = aboutus.getBoundingClientRect().top;
    var aboutus_bottom = aboutus.getBoundingClientRect().bottom;

    var products = document.getElementById('about');
    var products_top = products.getBoundingClientRect().top;
    var products_bottom = products.getBoundingClientRect().bottom;


    var projects = document.getElementById('projects');
    var projects_top = projects.getBoundingClientRect().top;
    var projects_bottom = projects.getBoundingClientRect().bottom;
    // console.log(products_top + 200);
    // console.log(window.innerHeight);


    var contact = document.getElementById('contact');
    var contact_top = contact.getBoundingClientRect().top;
    var contact_bottom = contact.getBoundingClientRect().bottom;

    if (aboutus_top + 700 < window.innerHeight) {
        dotLinkEffect.style.left = "10%";
    }
    if (products_top + 700 < window.innerHeight) {
        dotLinkEffect.style.left = "34.5%";
    }
    if (projects_top + 700 < window.innerHeight) {
        dotLinkEffect.style.left = "62%";
    }
    if (contact_top < 700) {
        dotLinkEffect.style.left = "88%";
    }

});

    const menuBtn = document.querySelector(".menu-btn");
    const navbarLinksM = document.querySelector(".nav-links");
    const navLinkContainer = document.querySelector(".nav-link-container");
    const downloadBtn = document.querySelector(".download-cv");
    const menuOvelay = document.querySelector(".nav-menu-overlay");
    const linkAn  = document.querySelectorAll(".link-anim-set");
    const navLsT = document.querySelector(".responsive-settings-mobile-animation");

    

    document.addEventListener("click", (e)=>{        
        target = e.target.parentNode; 
        targetDef = e.target; 

        if (target === menuBtn) {
            
            navbarLinksM.classList.add("active-nav")
            document.body.style.overflowY = "hidden"
            setTimeout(() => {
                menuOvelay.style.display = "block";
                navbarLinksM.classList.add("anim-navs")
            }, 400);
            setTimeout(() => {
                navLsT.style.display = "flex";
            }, 800);
              
       
        }

        function closeNav() {
            setTimeout(() => {
                navbarLinksM.classList.remove("active-nav")
            }, 100);
            navbarLinksM.classList.remove("anim-navs")
            menuOvelay.style.display = "none";
            document.body.style.overflowY = "auto"
            navLsT.style.display = "";
        }

        for (let i = 0; i < linkAn.length; i++) {
            if (target === linkAn[i]) {
               closeNav() 
            }            
        }
       
        if (targetDef === menuOvelay || target === linkCon) {
            closeNav()
        }
        
        
    });

    

    const navCn = document.querySelector(".nav-container");
    const navSet = document.querySelector(".nav-set");
    const scrollTop = document.querySelector(".scroll-top-btn");
    const navTtl = document.querySelector(".nav-title");
    const ns = document.querySelector(".download-center");

    scrollTop.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    })
    
    document.addEventListener("scroll", ()=>{ 

        crScrollPos = window.pageYOffset; 
        if (crScrollPos > 300) {
            navSet.style.top = "-400px";
        }
   
        if (crScrollPos >= 400) {          
            navSet.style.position = "fixed";
            navSet.style.top = "0px";
            navSet.style.background = "linear-gradient(320deg, #21223a 40%, #252742 40%)";
            navCn.style.padding = "8px 3px";
        }


        if (crScrollPos < 300) {
            navSet.style.position = "";
            navSet.style.background = "";
            navCn.style.padding = "";
            navSet.style.top = "";
        }





        if (crScrollPos >= 1000) {
            scrollTop.style.display = "block"
        }else{
            scrollTop.style.display = "none"
        }
     });




