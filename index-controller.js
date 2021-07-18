function onProfileClicked() {
    var elmnt = document.getElementById("profile");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function onEducationClicked() {
    var elmnt = document.getElementById("education");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function onContactClicked() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function onThemesClicked() {
    const themeToggle = document.getElementById('theme-toggle');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeToggle.innerText = 'Light';
    } else {
        themeToggle.innerText = 'Dark';
    }
}