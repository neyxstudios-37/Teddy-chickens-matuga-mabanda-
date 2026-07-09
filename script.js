// Toggle 3-Dot Dropdown Menu
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Close Menu When Clicking Outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

// Share Website Function
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'TEDDY Chickens matuga',
            text: 'Order fresh high-quality chickens at great prices!',
            url: window.location.href
        });
    } else {
        alert('Share this link with your friends: ' + window.location.href);
    }
    dropdownMenu.classList.add('hidden');
                               }
