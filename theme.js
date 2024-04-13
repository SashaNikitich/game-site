const toggleThemeBtn = document.getElementById('toggle-theme-btn')
const toggleThemeImg = document.getElementById('toggle-theme-img')

function setDarkTheme() {
    document.body.classList.add('dark')
    toggleThemeImg.src = 'assets/sun.png'
    localStorage.theme = 'dark'
}

function setLightTheme() {
    document.body.classList.remove('dark')
    toggleThemeImg.src = 'assets/moon.png'
    localStorage.theme = 'light'
}
toggleThemeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        setLightTheme()
    } else {
        setDarkTheme()
    }
})

if (localStorage.theme == 'dark') {
    setDarkTheme()
}