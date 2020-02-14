var leftTab = document.getElementById('left-tab'),
    rightTab = document.getElementById('right-tab');

// window.onload = function(){
//   btn[0].onmouseover=function() {
//     leftTab.style.display="block";
//     leftTab.setAttribute("class","rotateInUpLeft self-animated");
//   }
//   btn[0].onmouseout=function() {
//     leftTab.setAttribute("class","rotateOutDownLeft self-animated");
//     // leftTab.style.display="none";
//   }
//   btn[1].onmouseover=function() {
//     rightTab.style.display="block";
//     rightTab.setAttribute("class","rotateInUpRight self-animated");
//   }
//   btn[1].onmouseout=function() {
//     rightTab.setAttribute("class","rotateOutDownRight self-animated");
//     // leftTab.style.display="none";
//   }
//
// }

function showLeft() {
  leftTab.style.display="block";
  leftTab.setAttribute("class","rotateInUpLeft self-animated");
}

function goneLeft() {
  leftTab.setAttribute("class","rotateOutDownLeft self-animated");
}

function showRight() {
  rightTab.style.display="block";
  rightTab.setAttribute("class","rotateInUpRight self-animated");
}

function goneRight() {
  rightTab.setAttribute("class","rotateOutDownRight self-animated");
}
