let isDark = false;
let isToggling = true;

function toggleTheme() {
  const root = document.documentElement;

  if (isDark) {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--button-bg', '#ffffff');
    root.style.setProperty('--button-text', '#000000');
    root.style.setProperty('--button-border', '#000000');
    root.style.setProperty('--hover-bg', '#000000');
    root.style.setProperty('--hover-text', '#ffffff');
  } else {
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--button-bg', '#000000');
    root.style.setProperty('--button-text', '#ffffff');
    root.style.setProperty('--button-border', '#ffffff');
    root.style.setProperty('--hover-bg', '#ffffff');
    root.style.setProperty('--hover-text', '#000000');
  }

  isDark = !isDark;
}

let toggleInterval = setInterval(toggleTheme, 2000);

// Stop button functionality
document.getElementById('stopToggleButton').addEventListener('click', () => {
  isToggling = false;
  clearInterval(toggleInterval); // Stop interval loop
  toggleTheme(); // Apply the last toggled theme
});
