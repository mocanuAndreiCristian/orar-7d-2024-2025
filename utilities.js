let dark = confirm("Do you prefer dark mode?:");

if (dark) {
    document.documentElement.style.setProperty("color-scheme", "dark");
} else {
    document.documentElement.style.setProperty("color-scheme", "light");
}
