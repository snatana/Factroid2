// Theme toggle
let isDark = false, toggling = true;
const interval = setInterval(() => {
  if (!toggling) return;
  document.documentElement.style.setProperty(
    '--bg-color', isDark ? '#ffffff' : '#000000'
  );
  document.documentElement.style.setProperty(
    '--text-color', isDark ? '#000000' : '#ffffff'
  );
  document.documentElement.style.setProperty(
    '--button-bg', isDark ? '#ffffff' : '#000000'
  );
  document.documentElement.style.setProperty(
    '--button-text', isDark ? '#000000' : '#ffffff'
  );
  document.documentElement.style.setProperty(
    '--button-border', isDark ? '#000000' : '#ffffff'
  );
  document.documentElement.style.setProperty(
    '--hover-bg', isDark ? '#000000' : '#ffffff'
  );
  document.documentElement.style.setProperty(
    '--hover-text', isDark ? '#ffffff' : '#000000'
  );
  isDark = !isDark;
}, 2000);

document.getElementById('stopToggleButton')
  .addEventListener('click', () => toggling = false);

// Show/Hide Share Review
const shareBtn = document.getElementById('shareReviewBtn');
const formDiv  = document.getElementById('share-review-form');
const homeDiv  = document.getElementById('main-content');
const bottom   = document.querySelector('.bottom-sections');
const themeCtl = document.querySelector('.theme-control');
const goHome   = document.getElementById('goHomeBtn');

shareBtn.addEventListener('click', () => {
  formDiv.classList.add('active');
  homeDiv.style.display = 'none';
  bottom.style.display = 'none';
  themeCtl.style.display = 'none';
});

goHome.addEventListener('click', () => {
  formDiv.classList.remove('active');
  homeDiv.style.display = 'block';
  bottom.style.display = 'flex';
  themeCtl.style.display = 'block';
});

// Populate dropdowns with sample data
const companies = ['Apple','Google','Amazon','Microsoft','Samsung'];
const products  = ['Electronics','Apparel','Home Goods','Sports'];

companies.forEach(c => {
  let opt = new Option(c, c);
  document.getElementById('companySelect').add(opt);
});
products.forEach(p => {
  let opt = new Option(p, p);
  document.getElementById('productSelect').add(opt);
});

// Submission handler
document.getElementById('reviewForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('confirmationMessage').textContent =
    'Factroid Team will verify your information within 5 working days. Upon satisfaction, your review will be uploaded.';
  document.getElementById('confirmationMessage').style.display = 'block';
});
