// Changing page to dark mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        document.getElementById('btn').innerHTML = "Light Mode";
    } else {
        document.getElementById('btn').innerHTML = "Dark Mode";
    }
}