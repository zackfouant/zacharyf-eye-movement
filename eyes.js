//set eyes' "pupils" to const variable pupils
const pupils = document.getElementsByClassName('pupil');

//when mouse moves, track x,y coordinate movement, assign them to the respective variables
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  //set pupils' left and top style attributes to the x and y coordinates respectively
  //transform those by the negative values
  for (let i = 0; i < 2; i++) {
    pupils[i].style.left = x;
    pupils[i].style.top = y;
    pupils[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
