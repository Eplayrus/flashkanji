// script.js – this file contains small interactive behaviours for the
// demo page. It doesn't load any external scripts and runs safely in
// modern browsers.

document.addEventListener('DOMContentLoaded', () => {
    const cardsBtn = document.querySelector('.menu-btn.cards');
    const exercisesBtn = document.querySelector('.menu-btn.exercises');
    const continueBtn = document.querySelector('.continue-btn');

    cardsBtn.addEventListener('click', () => {
        alert('Раздел «Карточки» ещё не реализован в этой демонстрации.');
    });

    exercisesBtn.addEventListener('click', () => {
        alert('Раздел «Упражнения» ещё не реализован в этой демонстрации.');
    });

    continueBtn.addEventListener('click', () => {
        alert('Спасибо! Кнопка «Продолжить» нажата.');
    });
});