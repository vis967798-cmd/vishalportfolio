// ====================================
// Typing Animation
// ====================================

const words = [
    "AI & Data Science Student",
    "Machine Learning Enthusiast",
    "Frontend Developer",
    "Python Programmer",
    "Future AI Engineer",
    "Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing");

function type() {

    if(charIndex < words[wordIndex].length){

        typingText.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typingText.textContent =
        words[wordIndex].substring(
        0,
        charIndex - 1
        );

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex =
        (wordIndex + 1) %
        words.length;

        setTimeout(type,300);

    }

}

type();


// ====================================
// Counter Animation
// ====================================

function animateCounter(id,target){

    let count = 0;

    const element =
    document.getElementById(id);

    const interval =
    setInterval(()=>{

        count++;

        element.innerText =
        count;

        if(count >= target){

            clearInterval(interval);

        }

    },50);

}

animateCounter(
"projectCount",
3
);

animateCounter(
"skillCount",
5
);

animateCounter(
"certCount",
3
);


// ====================================
// Quotes Animation
// ====================================

const quotes = [

"Artificial Intelligence is the new electricity.",

"Data is a precious thing and will last longer than systems.",

"Without data, you're just another person with an opinion.",

"First solve the problem, then write the code.",

"Machine Learning is the future of intelligent systems.",

"Dream Big. Learn Fast. Build Smart.",

"Success in AI comes from continuous learning.",

"Technology is best when it brings people together."

];

let quoteIndex = 0;

const quoteBox =
document.getElementById("quoteBox");

setInterval(()=>{

    quoteIndex++;

    if(
        quoteIndex >=
        quotes.length
    ){
        quoteIndex = 0;
    }

    quoteBox.style.opacity = "0";

    setTimeout(()=>{

        quoteBox.innerText =
        quotes[quoteIndex];

        quoteBox.style.opacity = "1";

    },500);

},5000);


// ====================================
// Mouse Glow Effect
// ====================================

const glow =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

}
);


// ====================================
// Random Glow Size
// ====================================

setInterval(()=>{

    const size =
    Math.floor(
    Math.random()*100
    ) + 200;

    glow.style.width =
    size + "px";

    glow.style.height =
    size + "px";

},3000);


// ====================================
// Scroll Reveal
// ====================================

const sections =
document.querySelectorAll(
"section"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(
entry.isIntersecting
){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

}

);

},

{
threshold:0.1
}

);

sections.forEach(

(section)=>{

section.style.opacity="0";

section.style.transform=
"translateY(50px)";

section.style.transition=
"all 1s ease";

observer.observe(section);

}

);


// ====================================
// Profile 3D Tilt
// ====================================

const profile =
document.querySelector(
".hero-image img"
);

profile.addEventListener(

"mousemove",

(e)=>{

const rect =
profile.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
(y - centerY) / 50;

const rotateY =
(centerX - x) / 50;

profile.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)

`;

}

);

profile.addEventListener(

"mouseleave",

()=>{

profile.style.transform=
`
perspective(1000px)
rotateX(0)
rotateY(0)
scale(1)
`;

}

);


// ====================================
// Doraemon Animation
// ====================================

const doraContainer =
document.getElementById(
"doraemon-container"
);

function showDoraemon(){

    doraContainer.classList.add(
    "show-doraemon"
    );

    createHeart();

    setTimeout(()=>{

        doraContainer.classList.remove(
        "show-doraemon"
        );

    },8000);

}

// First appearance

setTimeout(
showDoraemon,
3000
);

// Every 10 sec

setInterval(
showDoraemon,
10000
);


// ====================================
// Heart Animation
// ====================================

function createHeart(){

for(let i=0;i<6;i++){

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.right="120px";

heart.style.bottom="220px";

heart.style.fontSize=
(Math.random()*20+20)
+"px";

heart.style.zIndex="999999";

heart.style.pointerEvents=
"none";

document.body.appendChild(
heart
);

const x =
Math.random()*150-75;

const y =
Math.random()*150+100;

heart.animate(

[
{
transform:
"translate(0,0)",
opacity:1
},
{
transform:
`translate(${x}px,-${y}px)`,
opacity:0
}
],

{
duration:2000
}

);

setTimeout(()=>{

heart.remove();

},2000);

}

}


// ====================================
// Navbar Active Link
// ====================================

const navLinks =
document.querySelectorAll(
"nav ul li a"
);

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(

(section)=>{

const sectionTop =
section.offsetTop;

if(
pageYOffset >=
sectionTop - 200
){

current =
section.getAttribute(
"id"
);

}

}

);

navLinks.forEach(

(link)=>{

link.classList.remove(
"active"
);

if(

link.getAttribute("href")
=== "#" + current

){

link.classList.add(
"active"
);

}

}

);

}

);


// ====================================
// Current Year
// ====================================

document.getElementById(
"year"
).innerText =
new Date().getFullYear();


// ====================================
// Page Load Animation
// ====================================

window.addEventListener(

"load",

()=>{

document.body.style.opacity=
"0";

setTimeout(()=>{

document.body.style.transition=
"opacity 1.5s ease";

document.body.style.opacity=
"1";

},100);

}

);