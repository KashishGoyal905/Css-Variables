const inputs = document.querySelectorAll('input');
const img = document.querySelector('img');
const blur1 = document.querySelector('#blur');
const space1 = document.querySelector('#space');
const color1 = document.querySelector('#color');
const k = document.querySelector('.js')



function handel1(e) {
    var z1 =this.value;
    img.style.filter =`blur(${z1}px)`;
}
function handel2(e) {
    var z2 =this.value;
  img.style.border =`${z2}px solid yellow`;
}
function handel3(e) {
    var z3 =this.value;
 img.style.border =`${20}px solid ${z3}`;
 k.style.color=`${z3}`
}
blur1.addEventListener('change', handel1);
blur1.addEventListener('mousemove', handel1);
space1.addEventListener('change', handel2);
space1.addEventListener('mousemove', handel2);
color1.addEventListener('change', handel3);
