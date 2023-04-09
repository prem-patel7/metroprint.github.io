// mobile navbar
var menu_outline = $('ion-icon[name="menu-outline"]');
var close_outline =$('ion-icon[name="close-outline"]');
var mob_navbar = $('.mob-navbar');

$(document).ready(function() {
    $(menu_outline).click(function() {
      menu_outline.css('display','none');
      close_outline.css('display','block');
      mob_navbar.css('transform','translateX(0%)');
  
      $('html, body').css({
          'overflow': 'hidden',
      });
  
    });
    $(close_outline).click(function() {
      menu_outline.css('display','block');
      close_outline.css('display','none');
      mob_navbar.css('transform','translateX(100%)');
  
      $('html, body').css({
          'overflow': 'scroll',
      });
    });
  });

