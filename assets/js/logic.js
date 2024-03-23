const themeCheck = document.querySelector("#Theme-checker");
const page = document.querySelector(".page")
if(localStorage.getItem('theme-pref') !== null){
    SetTheme()
}

function SetTheme() {  

    if(themeCheck.checked) {
        localStorage.setItem('theme-pref', "dark");
    }
    else {
        localStorage.setItem('theme-pref', "light")
    }
    page.setAttribute("class", localStorage.getItem('theme-pref'));


}

themeCheck.addEventListener('change', SetTheme);