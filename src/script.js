window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


const texts = ['Front-end Developer', 'UI & UX Developer', 'React Developer'];
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
}, 3000);


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

var swiper3 = new Swiper('.swiper3', {
    lazy: true,
    zoom: true,
    direction: 'horizontal',
    loop: false,
    grabCursor: true,

    zoom: {
        maxRatio: 2.5,
    }

});


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
const downloadText = document.querySelector(".download-text");
const spinnerAnim = document.querySelector(".spinner-anim");


downloadCv.addEventListener("click", ()=>{
    downloadText.style.top = "-100px";
    downloadCv.style.pointerEvents = "none";
    setTimeout(() => {
        downloadCv.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
    }, 250);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text"><i class="fa-solid fa-check"></i>Thank you</span>'
    }, 2500);

    setTimeout(() => {
        downloadCv.innerHTML = '<span class="download-text"><i class="fa-solid fa-file-arrow-down"></i>RESUME</span>'
        downloadCv.style.pointerEvents = "auto";
    }, 7000);   
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
            navSet.style.background = "linear-gradient(320deg, #2b2e49 40%, #353853 40%)";
            navSet.style.boxShadow = "0 0 20px #00000050";
            navCn.style.padding = "8px 3px";
        }


        if (crScrollPos < 300) {
            navSet.style.position = "";
            navSet.style.background = "";
            navSet.style.boxShadow = "";
            navCn.style.padding = "";
            navSet.style.top = "";
        }


        if (crScrollPos < 600) {
            navSet.style.boxShadow = "";
        }




        if (crScrollPos >= 1000) {
            scrollTop.style.display = "block"
        }else{
            scrollTop.style.display = "none"
        }
     });


     const sectionTitleZoom = document.querySelectorAll(".section-title");
     const zoomContainer = document.querySelectorAll(".swiper-zoom-container");
     const swiperSlide = document.querySelectorAll(".swiper-zooms");  
        
        for (let i = 0; i < zoomContainer.length; i++) {
            zoomContainer[i].addEventListener("click", () => {
                for (let i = 0; i < swiperSlide.length; i++) {
                    if (swiperSlide[i].classList.contains("swiper-slide-zoomed")) {
                        sectionTitleZoom[i].classList.add("active");
                    } else {
                        sectionTitleZoom[i].classList.remove("active");
                    }
                }

            })
        }



