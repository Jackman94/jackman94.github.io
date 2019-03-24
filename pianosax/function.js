
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var avatar = document.getElementById('avatar');
  if(scrolled>200){
    avatar.style.position = "fixed";
    avatar.style.left ="0";
    avatar.style.top ="0";

  }else if(scrolled<200){
    avatar.style.position = "relative";
    avatar.style.top = "0";
  }
};

