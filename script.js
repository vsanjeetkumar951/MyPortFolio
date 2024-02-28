//  <!-- -------------About------------------- -->

var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontain of tabcontains) {
    tabcontain.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//  <!-- --------------------Services-------- -->

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxYHCN6Zk5vTYcUJmfnH8QAo2Od1hWn81Mm08BIg4vuZvhkZ6UVdO09rLt2BHGXm0Njw/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent seccessfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});





// ---------------curser---------------------
// Circle Mouse Flowller

const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: "mf-cursor",
  innerClassName: "mf-cursor-inner",
  textClassName: "mf-cursor-text",
  mediaClassName: "mf-cursor-media",
  mediaBoxClassName: "mf-cursor-media-box",
  iconSvgClassName: "mf-svgsprite",
  iconSvgNamePrefix: "-",
  iconSvgSrc: "",
  dataAttr: "cursor",
  hiddenState: "-hidden",
  textState: "-text",
  iconState: "-icon",
  activeState: "-active",
  mediaState: "-media",
  stateDetection: {
    "-pointer": "a,button",
    "-hidden": "iframe",
  },
  visible: true,
  visibleOnState: false,
  speed: 0.55,
  ease: "expo.out",
  overwrite: true,
  skewing: 0,
  skewingText: 2,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300,
  
});

gsap.from(".about-col-1", {
  scrollTrigger: {
    trigger: ".about-col-1",
    scroller: "body",
    scrub: 2,
  },
  x: "-125",
});



gsap.to("#services", {
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start: "top 50%",
    end: "botton 10%",
    scrub: 2,
  },
  background: "rgb(237,32,5)",
  background: "linear-gradient(0deg, rgba(237,32,5,1) 0%, rgba(4,4,4,1) 100%)",
});

AOS.init({
  duration: 3000,
  offset: 50,
});

var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#about",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
   
  }
})
tl.to(".blob",{
  top:"-100%",
 
})


