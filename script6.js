const wrapper = document.querySelector('.wrapper'),
  qrInput=wrapper.querySelector('.form input'),
  generateButton = document.querySelector('.form button'),
  qrImg = wrapper.querySelector('.qr-code img');

generateButton.addEventListener('click', () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  wrapper.classList.add('active');
  qrInput.value = '';

});