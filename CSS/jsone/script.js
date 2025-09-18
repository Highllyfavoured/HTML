let aboutMe = document.getElementById("aboutBtn")
let contactMe = document.getElementById("contactBtn")
let skillMe= document.getElementById("skillBtn")
let first = document.getElementById("about")
let second = document.getElementById("contact")
let third = document.getElementById("skill")

first.classList.add ("active-output")
first.style.display= "block"

aboutMe.onclick = () => {
    first.style.display= "block"
    second.style.display= "none"
    third.style.display= "none"
    first.style.backgroundColor= "brown"
}

contactMe.onclick = () => {
    first.style.display= "none"
    second.style.display= "block"
    third.style.display= "none"
    second.style.backgroundColor= "blue"
}

skillMe.onclick = () => {
    first.style.display= "none"
    second.style.display= "none"
    third.style.display= "block"
    third.style.backgroundColor= "green"
}