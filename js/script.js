const mainContents = document.querySelector('.main-contents');
const interestLogo = {
  'react': ['fab', 'fa-react', 'fa-10x'],
  'node': ['fab', 'fa-node', 'fa-10x'],
  'database': ['fas', 'fa-database', 'fa-10x'],
  'html5': ['fab', 'fa-html5', 'fa-10x'],
  'css3': ['fab', 'fa-css3-alt', 'fa-10x'],
  'js': ['fab', 'fa-js', 'fa-10x'],
}
const contactLogo = {
  'github': ['fab', 'fa-github', 'fa-3x'],
  'instagram': ['fab', 'fa-instagram', 'fa-3x'],
}

const contactLogoWeb = {
  'github': 'https://github.com/Muscardinus94',
  'instagram': 'https://www.instagram.com/kjh_0809/',
}
const phoneNumber = "+821029766446";
const emailAddress = "9028364@gmail.com";
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navInterest = document.querySelector('.nav-interest');
const navContact = document.querySelector('.nav-contact');

start();

function start() {
  showHome();
  navEvent();
}

function navEvent() {
  navHome.addEventListener('click', showHome);
  navAbout.addEventListener('click', showAbout);
  navInterest.addEventListener('click', showInterest);
  navContact.addEventListener('click', showContact);
}

function showHome() {
  mainContents.innerHTML = '';
  let div = document.createElement('div');
  div.classList.add('home');
  let i = document.createElement('i');
  i.classList.add('fas', 'fa-anchor', 'fa-10x');
  let p = document.createElement('p');
  p.innerText = "FrontEnd Developer";
  let button = document.createElement('button');
  button.classList.add('button');
  button.innerText = "Explore About Jae";
  button.addEventListener('click', showAbout, {once: true});
  div.appendChild(i);
  div.appendChild(p);
  div.appendChild(button);
  mainContents.appendChild(div);
}

function showAbout() {
  mainContents.innerHTML = '';
  let div = document.createElement('div');
  div.classList.add('about');
  let img = document.createElement('img');
  img.classList.add('photo');
  img.src = "../img/profile.jpg";
  let p = document.createElement('p');
  p.classList.add('introduction');
  p.innerHTML = "김제형<br>FrontEnd Developer";
  div.appendChild(img);
  div.appendChild(p);
  mainContents.appendChild(div);
}

function showInterest() {
  mainContents.innerHTML = '';
  let div = document.createElement('div');
  div.classList.add('interest');
  for (prop in interestLogo) {
    let i = document.createElement('i');
    for (logoInfo of interestLogo[prop]) {
      i.classList.add(logoInfo);
    }
    div.appendChild(i);
  }
  mainContents.appendChild(div);
}

function showContact() {
  mainContents.innerHTML = '';
  let contact = document.createElement('div');
  contact.classList.add('contact');
  let phone = document.createElement('p');
  phone.id = 'phone';
  phone.innerText = phoneNumber;
  let email = document.createElement('p');
  email.id = 'email';
  email.innerText = emailAddress;
  let gitig = document.createElement('div');
  gitig.classList.add('gitig');
  for (prop in contactLogo) {
    let i = document.createElement('i');
    for (logoInfo of contactLogo[prop]) {
      i.classList.add(logoInfo);
    }
    let logoWeb = contactLogoWeb[prop];
    i.addEventListener("click", () => {
      window.location.href = logoWeb;
    });
    gitig.appendChild(i);
  }
  contact.appendChild(phone);
  contact.appendChild(email);
  contact.appendChild(gitig);
  mainContents.appendChild(contact);
}
