'use strict';

{
  // 要素を取得
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');


  // メニューアイコンをクリックした時
  open.addEventListener('click', () => {

    // .overlayを表示
    overlay.classList.add('show');

    // メニューアイコンを非表示
    open.classList.add('hide');
  });


  // ✕をクリックした時
  close.addEventListener('click', () => {

    // .overlayを非表示
    overlay.classList.remove('show');

    // メニューアイコンを表示
    open.classList.remove('hide');
  });
}