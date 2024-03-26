import languages from './languages.js';

const form = document.querySelector('.modal__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedUrl = document.querySelector('input[name="website"]:checked').value;
  window.location.href = selectedUrl;
});

function loadTranslations(language) {
  const translation = languages[language] ? languages[language] : languages['en'];
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (translation.hasOwnProperty(key)) {
          element.innerHTML = translation[key];
      }
  });
}

function getLanguage() {  
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
    if (lang) {
        return lang;
    } else {
        return navigator.language.substring(0, 2)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const language = getLanguage();
    loadTranslations(language);
});
