
export default (message, color) => {
  const parent = document.getElementById('container');
  const error = document.createElement('aside');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(color);
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  parent.appendChild(error);
  setTimeout(() => {
    parent.removeChild(document.getElementById('error-popup'));
  }, 3500);
};