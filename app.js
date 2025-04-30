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
    const modal = document.getElementById('cvModal');
    const canvas = document.getElementById('cvCanvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = 'img/CV.png'; // Your original CV image path

    img.onload = function () {
        // Set canvas size
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Add watermark
        const fontSize = canvas.width * 0.15;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = 'rgba(128, 128, 128, 0.5)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-45 * Math.PI / 180);
        ctx.fillText('KYDEV PROPERTY', 0, 0);
        ctx.restore();

        modal.style.display = 'flex';
    };
}

function closeCV() {
    document.getElementById('cvModal').style.display = 'none';
}

function downloadCV() {
    const canvas = document.getElementById('cvCanvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'KyDev CV.png';
    link.click();
}

// FOR SECURITY OF THE WEBSITE //

// Create a custom alert box
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
    setTimeout(() => alertBox.remove(), 1000); // Hide after 1 seconds
}

// Disable right-click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    showCustomAlert("Right-click is disabled!");
});

// Block all key shortcuts
document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();

    if (event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        showCustomAlert("Shortcut is disabled!");
        return false;
    }

    if (key === "f12") {
        event.preventDefault();
        showCustomAlert("Developer tools are disabled!");
        return false;
    }

    if ((event.ctrlKey && key === "s") || // Ctrl + S (Save)
        (event.ctrlKey && key === "p") || // Ctrl + P (Print)
        (event.ctrlKey && key === "u") || // Ctrl + U (View Source)
        (event.ctrlKey && event.shiftKey && key === "s") || // Ctrl + Shift + S
        (key === "printscreen")) { // Print Screen (PrtScn)
        event.preventDefault(); 
        showCustomAlert("This action is disabled!");
        return false;
    }
});

// Block Print Screen via Clipboard (extra security)
document.addEventListener("keyup", function (event) {
    if (event.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // Clears clipboard to block screenshots
        showCustomAlert("Screenshots are disabled!");
    }
});

// 🔹 Detect Mobile Screenshot Attempts (Hide Content)
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.body.style.filter = "blur(100px)"; // Blur content on app-switching
    } else {
        document.body.style.filter = "none"; // Restore content when user returns
    }
});

// 🔹 Block Screenshot via Media Queries (Mobile)
const style = document.createElement("style");
style.innerHTML = `
    @media (max-width: 768px) {
        html {
            -webkit-user-select: none;
            -webkit-touch-callout: none;
            user-select: none;
        }
    }
`;
document.head.appendChild(style);
document.addEventListener('contextmenu', function(e) {
	if (e.target.tagName === 'IMG', 'VIDEO') {
		e.preventDefault();
	}
});