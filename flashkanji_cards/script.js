// script.js – логика для экрана тренировки Flash Kanji.

document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('flash-card');
    const cardInner = card.querySelector('.card-inner');
    const btnNot = document.getElementById('btn-not');
    const btnYes = document.getElementById('btn-yes');
    const feedback = document.getElementById('feedback-text');
    const toggleNow = document.getElementById('mode-now');
    const toggleLater = document.getElementById('mode-later');

    // обработка переключателей "Сейчас"/"Повтор после"
    toggleNow.addEventListener('click', () => {
        toggleNow.classList.add('active');
        toggleLater.classList.remove('active');
    });
    toggleLater.addEventListener('click', () => {
        toggleLater.classList.add('active');
        toggleNow.classList.remove('active');
    });

    // флаг для отслеживания свайпа
    let startX = null;
    let moved = false;

    // При нажатии мыши или касании начинаем отслеживать позицию
    card.addEventListener('pointerdown', (e) => {
        startX = e.clientX;
        moved = false;
    });

    // При движении отмечаем, что пользователь переместил палец/курсор
    card.addEventListener('pointermove', (e) => {
        if (startX !== null) {
            const diff = e.clientX - startX;
            if (Math.abs(diff) > 10) {
                moved = true;
            }
        }
    });

    // При отпускании определяем жест
    card.addEventListener('pointerup', (e) => {
        if (startX === null) return;
        const diff = e.clientX - startX;
        if (moved && diff < -50) {
            handleNotRemember();
        } else if (moved && diff > 50) {
            handleRemember();
        } else {
            // легкий тап без существенного смещения – переворачиваем карту
            card.classList.toggle('flipped');
        }
        startX = null;
        moved = false;
    });

    // Убираем отслеживание при уходе курсора
    card.addEventListener('pointercancel', () => {
        startX = null;
        moved = false;
    });

    // Кнопки
    btnNot.addEventListener('click', handleNotRemember);
    btnYes.addEventListener('click', handleRemember);

    function handleNotRemember() {
        feedback.textContent = 'Не помню';
        // временно подсвечиваем текст красным цветом
        document.getElementById('feedback').style.color = '#ffeded';
        document.getElementById('feedback').style.background = 'linear-gradient(var(--action-no-start), var(--action-no-end))';
        // Сбросить через пару секунд
        setTimeout(() => {
            feedback.textContent = 'Верно';
            document.getElementById('feedback').style.color = '#f5f4f2';
            document.getElementById('feedback').style.background = '';
        }, 1500);
    }

    function handleRemember() {
        feedback.textContent = 'Помню';
        document.getElementById('feedback').style.color = '#eaffea';
        document.getElementById('feedback').style.background = 'linear-gradient(var(--action-yes-start), var(--action-yes-end))';
        setTimeout(() => {
            feedback.textContent = 'Верно';
            document.getElementById('feedback').style.color = '#f5f4f2';
            document.getElementById('feedback').style.background = '';
        }, 1500);
    }
});