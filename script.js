let isDark = false;
let isToggling = true;
let toggleInterval = setInterval(toggleTheme, 3000);

function toggleTheme() {
  if (!isToggling) return;
  const root = document.documentElement;

  if (!isDark) {
    root.style.setProperty('--bg-color', '#000');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--button-bg', '#000');
    root.style.setProperty('--button-text', '#fff');
    root.style.setProperty('--button-border', '#fff');
    root.style.setProperty('--hover-bg', '#fff');
    root.style.setProperty('--hover-text', '#000');
  } else {
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty('--text-color', '#000');
    root.style.setProperty('--button-bg', '#fff');
    root.style.setProperty('--button-text', '#000');
    root.style.setProperty('--button-border', '#000');
    root.style.setProperty('--hover-bg', '#000');
    root.style.setProperty('--hover-text', '#fff');
  }

  isDark = !isDark;
}

document.getElementById('shareReview').addEventListener('click', () => {
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('share-review-section').classList.remove('hidden');
});

document.getElementById('goHome').addEventListener('click', () => {
  document.getElementById('main-section').classList.remove('hidden');
  document.getElementById('share-review-section').classList.add('hidden');
});

function addToDropdown(type) {
  const input = document.getElementById(`${type}Input`);
  const dropdown = document.getElementById(`${type}Dropdown`);
  const value = input.value.trim();
  if (value !== '') {
    const option = document.createElement('option');
    option.textContent = value;
    option.value = value;
    dropdown.appendChild(option);
    input.value = '';
  }
}

function submitReview() {
  if (!document.getElementById('acceptance').checked) {
    alert('You must accept the statement before submitting.');
    return;
  }
  document.getElementById('submissionMessage').classList.remove('hidden');
}
