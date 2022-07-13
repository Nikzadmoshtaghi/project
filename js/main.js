window.alert("This site is responsive in 1200px and 768px sizes")
// sticky navbar
// scroll smooth
let stickys = document.querySelectorAll(".top-main-menu");
let scroll = document.querySelector(".scroll");
stickys.forEach(sticky => {
    window.addEventListener("scroll", e => {
        if(scrollY >= 500) {
            sticky.classList.add("sticky");
            scroll.classList.add("show");
        }else{
            sticky.classList.remove("sticky");
            scroll.classList.remove("show");
        }
        scroll.addEventListener("click", e => {
            if(scroll.classList.contains("show")){
                window.scrollTo({top:0, behavior:"smooth"})
            }
        })
        
        
    })
})

// popup
let popupBtns = document.querySelectorAll(".popup-btn");
popupBtns.forEach(popupBtn => {
    if (popupBtn) {
        var popupWrapper = document.createElement("div");
        popupWrapper.className = "popup-wrapper"
        document.body.prepend(popupWrapper);
    }
    
    popupBtn.addEventListener("click", e => {
        let popup = popupBtn.nextElementSibling;
        popup.classList.add("show");
        document.querySelector(".popup-wrapper").classList.add("show");
    
        let popupCloseFunc = e => {
            popup.classList.remove("show");
            document.querySelector(".popup-wrapper").classList.remove("show");
        }
    
        let popupCloses = document.querySelectorAll(".popup-close");
        popupCloses.forEach(popupclose => {
            popupclose.addEventListener("click", popupCloseFunc)
        })
        popupWrapper.addEventListener("click", popupCloseFunc)
    
    })
})

// form Validation
let forms = document.querySelectorAll(".form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let seePassword = document.querySelector("#see-password");
// userPatter => up
let up = /^[a-zA-Z][\w._]{5,23}$/
// evaluatePassword => ep
let ep = 0;
// evaluateUser => eu
let eu = false;

forms.forEach(form => {
    form.addEventListener("submit", e => {
        if (!(eu && ep === 5)) {
            e.preventDefault()
            if (!eu) {
                form.Username.classList.add("is-invalid")
            }
            if (ep !== 5) {
                form.Password.classList.add("is-invalid")
            }
        }
    })
    form.Username.addEventListener("keyup", e => {
        if (e.target.value) {
    
            username.textContent = e.target.value.toLowerCase()
            if (up.test(e.target.value)) {
                eu = true;
                e.target.classList.add("is-valid")
                e.target.classList.remove("is-invalid")
            } else {
    
                e.target.classList.add("is-invalid")
            }
        } else {
            username.innerHTML = "<i>please write something"
        }
    })
    
    form.Password.addEventListener("keyup", e => {
        if (e.target.value) {
    
            password.textContent = "*".repeat(e.target.value.length);
            seePassword.textContent = e.target.value
    
            ep = 0;
            ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
            ep += /[a-z]/.test(e.target.value) ? 1 : 0;
            ep += /[0-9]/.test(e.target.value) ? 1 : 0;
            ep += /[\W]/.test(e.target.value) ? 1 : 0;
            ep += e.target.value.length >= 6 ? 1 : 0;
    
            if (ep === 5) {
                e.target.classList.add("is-valid")
                e.target.classList.remove("is-invalid")
            } else {
                e.target.classList.add("is-invalid")
            }
    
        } else {
            password.innerHTML = "<i>please select a password</i>"
           seePassword.innerHTML = "<i>please select a password</i>"
    
        }
    })
})




// accordion
let accordion = document.querySelector(".accordion");
Array.from(accordion.children).forEach(wraper => {
    wraper.querySelector("span").addEventListener("click", e => {
        let span = e.target;
        let wraper = span.parentElement;
        let div = span.nextElementSibling;
        wraper.classList.toggle("show");
        if(wraper.classList.contains("show")) {
            div.style.maxHeight = div.scrollHeight + 37+ 'px'
        }else{
            div.style.maxHeight = null
        }
        Array.from(accordion.children).forEach(w => {
            if(w != wraper) {
                w.classList.remove("show");
                w.querySelector("div").style.maxHeight = null
            }
        })
    })
})

// dark-mode
let body = document.querySelector("body")
let btns = document.querySelectorAll(".button");
btns.forEach(btn => {
    btn.addEventListener("click", e => {
    
        body.classList.toggle("dark")
    })
    
})


// ham-menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }