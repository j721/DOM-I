const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

document.querySelector('h1').textContent ="DOM is Awesome"

document.querySelector('button').textContent ="Get Started"

const navigation =document.querySelectorAll("a");
navigation.forEach((anchor, index)=>{
  anchor.textContent= siteContent["nav"][`nav-item-${index}`]
})

// navigation[0].textContent =siteContent["nav"]["nav-item-1"];
// navigation[1].textContent =siteContent["nav"]["nav-item-2"];
// navigation[2].textContent =siteContent["nav"]["nav-item-3"];
// navigation[3].textContent =siteContent["nav"]["nav-item-4"];
// navigation[4].textContent =siteContent["nav"]["nav-item-5"];
// navigation[5].textContent =siteContent["nav"]["nav-item-6"];

const headings = document.querySelectorAll("h4");
// headings.forEach((heading,index)=>{
//   heading.textContent =siteContent["main-content"][`${index}-h4`]
// })

headings[0].textContent =siteContent["main-content"]["features-h4"];
headings[1].textContent =siteContent["main-content"]["about-h4"];
headings[2].textContent =siteContent["main-content"]["services-h4"];
headings[3].textContent =siteContent["main-content"]["product-h4"];
headings[4].textContent =siteContent["main-content"]["vision-h4"];
headings[5].textContent =siteContent["contact"]["contact-h4"];

const paragraph =document.querySelectorAll("p");
paragraph[0].textContent =siteContent["main-content"]["features-content"];
paragraph[1].textContent =siteContent["main-content"]["about-content"];
paragraph[2].textContent =siteContent["main-content"]["services-content"];
paragraph[3].textContent =siteContent["main-content"]["product-content"];
paragraph[4].textContent =siteContent["main-content"]["vision-content"];
paragraph[5].textContent =siteContent["contact"]["address"];
paragraph[6].textContent =siteContent["contact"]["phone"];
paragraph[7].textContent =siteContent["contact"]["email"];
paragraph[8].textContent =siteContent["footer"]["copyright"];

let middleImage =document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// updates to navigation

const newLink = document.createElement("a");
newLink.textContent ="Home";
const parentElement = document.querySelector('nav');
parentElement.prepend(newLink);

const newLink2 = document.createElement("a");
newLink2.textContent ="Login";
parentElement.append(newLink2);


const newNav = document.querySelectorAll('a');
newNav.forEach(element =>{
  element.style.color ="green";
});

// Stretch

document.querySelector('body').style.backgroundColor ="beige";
document.querySelector('body').style.color ="#8514ff";