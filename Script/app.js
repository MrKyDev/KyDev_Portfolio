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


//Experience
