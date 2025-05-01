const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*Section for CV */
function openCV() {
  document.getElementById('cvModal').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable scroll
}

function closeCV() {
  document.getElementById('cvModal').style.display = 'none';
  document.body.style.overflow = ''; // Enable scroll
}

function downloadCV() {
  const img = document.getElementById("cvImage");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const imgObj = new Image();
  imgObj.crossOrigin = "anonymous";
  imgObj.src = img.src;

  imgObj.onload = function () {
    canvas.width = imgObj.width;
    canvas.height = imgObj.height;

    ctx.drawImage(imgObj, 0, 0);

    // Add watermark
    const fontSize = canvas.width * 0.12;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = " rgba(150, 150, 150, 0.68)";
    ctx.textAlign = "center";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 6); // -30 degrees
    ctx.fillText("KYDEV PROPERTY", 0, 0);
    const link = document.createElement("a");
    link.download = "KyDev_CV.png";
    link.href = canvas.toDataURL();
    link.click();
  };
};

// FOR SECURITY OF THE WEBSITE //
function showCustomAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML = `<div style="
        position: fixed; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        border-radius: 10px; 
        width: 50%;
        max-width: 400px;
        z-index: 9999;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    ">
        ${message}
    </div>`;
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 1000);
  }
  
  /* Prevent Right Click, F12, and Ctrl+Shift+I/U/J */
  // Disable right-click
  var _0x1b93ce=_0x2266;function _0x2266(_0x4109c8,_0x52d5ba){var _0x3a68f5=_0x39e2();return _0x2266=function(_0x398c6b,_0x22327d){_0x398c6b=_0x398c6b-(-0x2*0x7be+-0x1e6+0x1285);var _0x141f81=_0x3a68f5[_0x398c6b];return _0x141f81;},_0x2266(_0x4109c8,_0x52d5ba);}(function(_0x2e1921,_0xbded3c){var _0xcefd39=_0x2266,_0x23a468=_0x2e1921();while(!![]){try{var _0x5f4125=-parseInt(_0xcefd39(0x12f))/(-0xc0d*-0x2+-0x19*0x124+0xd*0x57)+-parseInt(_0xcefd39(0x123))/(-0x21f0+0xb*0x28d+0x5e3)*(parseInt(_0xcefd39(0x12e))/(0x257f+-0x1bf+-0x23bd))+parseInt(_0xcefd39(0x125))/(0x865*-0x2+-0xd8c*0x2+0x2be6)*(parseInt(_0xcefd39(0x12c))/(0x16a0+-0x457*-0x9+-0x3daa))+-parseInt(_0xcefd39(0x132))/(-0xc7*-0x13+-0x226*-0x11+0x3345*-0x1)+-parseInt(_0xcefd39(0x126))/(-0x9a4*-0x2+-0x18a0+-0x37*-0x19)*(-parseInt(_0xcefd39(0x12a))/(-0x337*-0x7+0x1*-0x206e+0x9f5*0x1))+-parseInt(_0xcefd39(0x130))/(-0x2*-0x6df+0x1*0xf01+0x32*-0x93)*(parseInt(_0xcefd39(0x128))/(0x328*0x1+0x1758+-0x1a76))+-parseInt(_0xcefd39(0x129))/(-0x1f45+0x10de+-0x739*-0x2)*(-parseInt(_0xcefd39(0x12d))/(-0x10c+-0x336+0x227*0x2));if(_0x5f4125===_0xbded3c)break;else _0x23a468['push'](_0x23a468['shift']());}catch(_0x6dc65e){_0x23a468['push'](_0x23a468['shift']());}}}(_0x39e2,0x1*0x54b3+0x2*-0x5d4+0x1e080),document[_0x1b93ce(0x124)+_0x1b93ce(0x127)](_0x1b93ce(0x133)+'u',function(_0x49bedb){var _0x2f62fd=_0x1b93ce;_0x49bedb[_0x2f62fd(0x131)+_0x2f62fd(0x12b)]();}));function _0x39e2(){var _0x4175f8=['addEventLi','4RKcRIE','1066401DfcYCm','stener','3760cqqYeT','3784fOnuSX','8XcZNzR','ault','309640nLvbHX','26544GTmnyE','607653hPnosl','267910bosEoj','5211jvKpcK','preventDef','871962gZbMQA','contextmen','2uMOIIB'];_0x39e2=function(){return _0x4175f8;};return _0x39e2();}
  
// Mobile-specific screenshot block using media queries (detecting mobile screen sizes)
 window.matchMedia("(max-width: 600px)").addEventListener("change", function() {
        document.body.style.display = "none";  // Hide content on mobile devices
        showAlert("Screenshot attempt detected on mobile! Content hidden.");
    });