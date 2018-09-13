fade=1;
fadeIn = (time-inPoint) / fade;
fadeOut = (outPoint - time) / fade;
if (time < inPoint + fade) {
 ease(fadeIn, 0 ,1) * value
}
 else if(time > outPoint - fade) {
ease(fadeOut, 0 ,1) * value
} 
else{ 
value; 
}
