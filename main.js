const countdown = () => {
  const date = new Date("Dec 13, 2022 00:00").getTime();
  const currentDate = new Date().getTime();
  const totalSeconds = (date - currentDate) /1000;

  
  const days = Math.floor(totalSeconds / (3600 * 24));
	const hours = Math.floor((totalSeconds / 3600) % 24);
	const minutes = Math.floor((totalSeconds / 60) % 60);
	const seconds = Math.floor(totalSeconds % 60);
  
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if(totalSeconds <= 0) {
		document.getElementById('days').innerHTML = 0;
		document.getElementById('hours').innerHTML = 0;
		document.getElementById('minutes').innerHTML = 0;
		document.getElementById('seconds').innerHTML = 0;
	}

  setInterval(countdown, 1000)
}

function modal() {
  const open = document.querySelector('.btn-sub');
  const close = document.querySelector('.btn-close');
  const modal = document.querySelector('.modal-container');
  
  open.addEventListener('click', () => {
    modal.style.display = "block"
  });
  
  close.addEventListener('click', () => {
    modal.style.display = "none"
  });
};

function sendSubscribe() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const button = document.querySelector('.btn-send');

  button.addEventListener('click', (e) => {
    e.preventDefault();
   
    if (!email.value || !name.value) {
      alert('Nome ou email inválido')
      return
     };
     
     email.value = '';
     name.value = '';
     alert('Inscrição efetuada.');
  })
};

countdown();
modal();
sendSubscribe();
