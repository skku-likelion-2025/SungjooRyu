/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color="blue";
}

function handleMouseEnter(){
    h1.innerText="Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText="Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseover", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor=h1.style.color;
    let newColor;
    if(currentColor==="blue"){
        newColor = "tomato";
    }else{
        newColor="blue";
    }
    h1.style.color=newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass="clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);


const h1=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
*/

const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText='Hello ${username}';
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}