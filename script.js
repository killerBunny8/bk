document.title = "Burger King" ;//changes the website title to burger king
//=======Naviagation========//
(function(){ // Immediately Invoked Function(IIF)
  var navTabs = [ //the links on the navigation bar
    {href: '#', text: 'Order'},
    {href: '#', text: 'Offers'},
    {href: '#', text: 'Menu'},
    {href: '#', text: 'Delivery'},
    {href: '#', text: 'More'}
  ];    
  var navElem = document.createElement("nav"),//creates the nav element <nav> </nav>
    navList = document.createElement("ul"),//creates the UL element <ul> </ul>
    navLink,navTab ;   
  navElem.appendChild(navList); //the UL to become nested in nav, <nav> <ul> </ul> </nav> 
  
  navList.classList.add('Nav');
  
  for (var i = 0; i < navTabs.length; i++) { //allows it to run this for how many variables there are in navtabs
    navTab = document.createElement("li");//creates an list element for every itemn
    navLink = document.createElement("a");//creates an anchor for every item        
    navLink.href = navTabs[i].href; //assigns the href porperty of anchor(adds a link)
    navLink.innerHTML = navTabs[i].text;//assigns a string to the li(adds text)
    navTab.appendChild(navLink);//nests 'a' into 'li' <li> <a> </a> </li>
    navList.appendChild(navTab);// nests 'li' in 'ul'<ul><li></li></ul>
  }  
    var navButtons = [ //the links on the navigation buttons
    {href: '#', text: 'Sign Up'},
    {href: '#', text: '£0.00'}
  ];

  
  window.onload = function () {//function
    document.getElementById("navigationBar").appendChild(navElem);// nests into navigationBar container
    const img = new Image(45,45);//width,height  
    img.src = `https://pngimg.com/uploads/burger_king/burger_king_PNG15.png`; //specify image
    var logo= document.createElement("a");//creates an anchor link
    logo.appendChild(img);
    logo.href = "#";//creates the link
    document.getElementById("navigationBar").appendChild(logo); //nests logo into navigation bar container
    var navdiv = document.createElement("div"); // creates a div element
    navdiv.classList.add("navButtons"); //adds a class tag to the containrer
    navButtonList = document.createElement("ul"); //creates an unordered list element
    navdiv.appendChild(navButtonList);//appends UL into container
    document.getElementById("navigationBar").appendChild(navdiv); //nests into navbar container
    
    for (let i = 0; i < navButtons.length; i++) {//for loop for each item in the navbutton list
      navButtonlis = document.createElement("li");//creates an li
      navButtonlis.classList.add('button'+[i])//adds a classname to allow us to use css
      navButtonLink = document.createElement("a");  //adds a link
      navButtonLink.innerHTML = navButtons[i].text;//gets text from the navbutton list
      navButtonLink.href= navButtons[i].href;//gets the linlks from the navbutton list
      navButtonList.appendChild(navButtonlis);//appends LI into ul
      navButtonlis.appendChild(navButtonLink);//appends a into li
    }   
  }     
//====== main =====//
  var mainPageImgs = [ //the images and buttons on the main body
    {alt: 'Katsu Chilli Whopper', src:'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/df2429dc1d4cec108eec0ac4ed173ceacdb9ec6f-1450x500.jpg', href: '#', txt:"Find Out More"},
    {alt: 'Plottwist', src: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/dfe44696b1cdbfaa0a4450e32b0b178b04430eb2-1184x600.jpg', href: '#', txt:"Find Out More"},
    {alt: 'Free Whopper', src: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/c3d9508ce74de218b1fecb00dc11099e3ba10706-1000x507.jpg', href: '#', txt:""},
    {alt: 'Offers', src: '/bk.png', href: '#', txt:"See Offers"},
    {alt: 'Resposible Business', src: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/b031f7b96eb855219b3a7ebf5e0c8f664a268944-1600x1600.png?rect=0,448,1600,998&w=2550&q=40&fit=max&auto=format', href: '#', txt:"Find Out More"}
  ];

  for (let i = 0; i < mainPageImgs.length; i++) {//for loop, iterates for the amount of items in the array
    imgDiv = document.createElement("div");// creates a div element
    imgDiv.classList.add('mainImg'+[i]);//adds a class to the div element
    document.getElementById("main-page").appendChild(imgDiv);//appends the div onto the main-page div on the html file
    imgMain = document.createElement("img");//creates an img element
    imgMainLink = document.createElement("a");//creates an anchor element 
    mainButtons = document.createElement("p");//creates a p element
    mainButtonsLink = document.createElement("a");//creates an anchor element
    mainButtonsLink.classList.add('mainButtons'+[i]);//adds a class to the second anchor element
    mainButtonsLink.appendChild(mainButtons)//appends the anchor onto the p element
    imgDiv.appendChild(imgMainLink);//appends the anchor element onto the div
    imgDiv.appendChild(mainButtonsLink);//appends the anchor into the div element
    imgMainLink.appendChild(imgMain);//appends the image onto the anchor
    imgMainLink.href = mainPageImgs[i].href;//assigns the link for the images from the array list
    imgMain.src = mainPageImgs[i].src; //assigns the link for the images from the array list
    imgMain.alt = mainPageImgs[i].alt; //assigns the src for the images from the array list
    mainButtons.innerHTML = mainPageImgs[i].txt; //assigns the text for the buttons
    mainButtonsLink.href = mainPageImgs[i].href;//assingns the links for the button

    var buttonCSS = document.getElementsByClassName("mainButtons"+[i]);

    
  };
  //==========Second part of the Main==========//
  var mainlowerImg = document.createElement("img");//creates an image ewlement
  mainlowerImg.src =('https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png');//assigns the image src
  for (let i = 0; i < 2; i++) {//creates two divs in this iterator
    var mainsecond = document.createElement("div");
    mainsecond.classList.add("ldiv"+[i]);//adds a class list
    document.getElementById("main-page-lower").appendChild(mainsecond); //appends it onto the html page
  };


  var appTitle = document.createElement("h1");//creates a h1 element
  appTitle.innerHTML= "Save £££ <br> With offers on demand";//gives the h1 element a value

  var appDetail =[//list for appstore/googlestore with img link, appstore/playsore link and alt value
    {src:'https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png' , href:'https://apps.apple.com/gb/app/burger-king-uk-ireland/id1062524641', alt:'Appstore'},
    {src:'https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0' , href:'https://play.google.com/store/apps/details?id=com.emn8.mobilem8.nativeapp.bkuk&hl=en_GB', alt:'Google store'}
  ];
  var appLogos = document.createElement("div");//creates a div element
  appLogos.classList.add("appLogos");//adds a class name to the div
  for (let i = 0; i < appDetail.length; i++) { //for loop
    var applogo= document.createElement("img");// creates an image element
    var applogoLink = document.createElement("a");//creates an anchor element
    applogo.src = appDetail[i].src;//takes the img link from the list and assigns it to the img element
    applogoLink.href = appDetail[i].href;//takes the appstore link and assigns it to the anchor element
    applogo.alt = appDetail[i].alt;//assigns the alt value to the img 
    applogoLink.appendChild(applogo);//appends the img into the anchor element
    appLogos.appendChild(applogoLink);//assigns the anchor into the div
  };
  var appDisclaimer = document.createElement("p");//creates a 'p' element
  appDisclaimer.innerHTML="Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.";//assigns the value into the the p element



  
  var ldiv = document.querySelectorAll("div");
  ldiv[8].appendChild(mainlowerImg);

  ldiv[9].appendChild(appTitle);
  ldiv[9].appendChild(appLogos);
  ldiv[9].appendChild(appDisclaimer);
  
}());

  


// ====== Full Page=======//

document.body.style.cssText="margin: 0;padding: 0; background: rgb(245, 235, 220);color: rgb(80, 35, 20); font-family: Flame, 'Cooper Black', 'Helvetica Neue', Helvetica, Arial, sans-serif; Font-size: 14px; " ;//body css, set color, font, and margin


//=======navigation====//
var navBar = document.getElementById("navigationBar"); //allows us to access the id with navbar
navBar.style.cssText = "width: 99%; position: fixed; display: grid; grid-template-columns: 48% 14% auto; padding: 12px;  background: rgb(245, 235, 220);z-index: 1;}" ; //creates a css grid for nav elements, sets background color and width. also changes its position to fixed

//==========Main=========//
var main = document.getElementById("main-page");
main.style.cssText = "position: relative; margin-top: 48px;";





