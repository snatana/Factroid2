let isDark = false;
let isToggling = true;
let toggleInterval = setInterval(toggleTheme, 2000);

function toggleTheme() {
  if (!isToggling) return;

  const root = document.documentElement;
  const floatingBoxes = document.querySelectorAll('.floating-box');

  if (!isDark) {
    root.style.setProperty('--bg-color', '#000');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--button-bg', '#000');
    root.style.setProperty('--button-text', '#fff');
    root.style.setProperty('--button-border', '#fff');
    root.style.setProperty('--hover-bg', '#fff');
    root.style.setProperty('--hover-text', '#000');
    root.style.setProperty('--box-bg', '#000');
    root.style.setProperty('--box-text', '#fff');
  } else {
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--button-bg', '#fff');
    root.style.setProperty('--button-text', '#000');
    root.style.setProperty('--button-border', '#000');
    root.style.setProperty('--hover-bg', '#000');
    root.style.setProperty('--hover-text', '#fff');
    root.style.setProperty('--box-bg', '#fff');
    root.style.setProperty('--box-text', '#000');
  }

  isDark = !isDark;
}

document.getElementById('stopToggleButton').addEventListener('click', () => {
  isToggling = false;
  clearInterval(toggleInterval);
  setDarkTheme();
});

function setDarkTheme() {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', '#000');
  root.style.setProperty('--text-color', '#fff');
  root.style.setProperty('--button-bg', '#000');
  root.style.setProperty('--button-text', '#fff');
  root.style.setProperty('--button-border', '#fff');
  root.style.setProperty('--hover-bg', '#fff');
  root.style.setProperty('--hover-text', '#000');
  root.style.setProperty('--box-bg', '#000');
  root.style.setProperty('--box-text', '#fff');
  isDark = true;
}

// Share Review Section Toggle
document.getElementById('shareReviewBtn').addEventListener('click', () => {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('share-review-section').classList.add('active');
});

function goHome() {
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('share-review-section').classList.remove('active');
}

// Add values to dropdown
function addToDropdown(dropdownId, inputId) {
  const dropdown = document.getElementById(dropdownId);
  const input = document.getElementById(inputId);
  const newValue = input.value.trim();
  if (newValue) {
    const option = document.createElement('option');
    option.text = newValue;
    dropdown.add(option);
    input.value = '';
  }
}

function submitReview() {
  document.getElementById('submissionMessage').innerText =
    'Factroid Team will verify this information. It may take up to 5 working days.';
}
