"use strict";

var menuButton = document.querySelector('.nav__button');
var menu = document.querySelector('menu');

function HideMenu() {
  if (menu.classList.contains('menu_show')) {
    menu.classList.remove('menu_show');
  }
}

menuButton.addEventListener('click', function () {
  menu.classList.toggle('menu_show');
});
menu.addEventListener('scroll', function () {
  if (this.classList.contains('menu_show')) {
    this.preventDefault(this);
    this.stopPropagation(this);
  }
});