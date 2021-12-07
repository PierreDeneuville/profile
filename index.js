const profileImg = document.querySelector('#avatar-header');
const leek = new Audio('leek.mp4');

profileImg.addEventListener('click', (event) =>{
  leek.play();
});
