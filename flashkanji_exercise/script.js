// script.js – логика заполнения кандзи в упражнении Flash Kanji.

document.addEventListener('DOMContentLoaded', () => {
    const blanks = document.querySelectorAll('.blank');
    const choices = document.querySelectorAll('.choice');
    const learnedCount = document.getElementById('learned-count');
    const totalCountElem = document.getElementById('total-count');
    const scoreDetail = document.getElementById('score-detail');
    const todayCount = document.getElementById('today-count');
    const todayTotal = document.getElementById('today-total');
    const resultMsg = document.getElementById('result-msg');
    const streakCount = document.getElementById('streak');
    const checkBtn = document.getElementById('check-btn');

    const totalBlanks = blanks.length;
    totalCountElem.textContent = totalBlanks;
    todayTotal.textContent = totalBlanks;

    let selectedChoice = null;

    // при клике на кандзи из списка выбираем его
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            // не выбирать использованные
            if (choice.classList.contains('used')) return;
            if (selectedChoice) {
                selectedChoice.classList.remove('selected');
            }
            selectedChoice = choice;
            choice.classList.add('selected');
        });
    });

    // обработка клика на пустое место в тексте
    blanks.forEach(blank => {
        blank.addEventListener('click', () => {
            // если уже заполнено – очистить
            if (blank.textContent.trim() !== '') {
                const value = blank.textContent.trim();
                // найти плитку и освободить
                const tile = document.querySelector(`.choice[data-value="${value}"].used`);
                if (tile) {
                    tile.classList.remove('used');
                }
                blank.textContent = '';
                blank.classList.remove('filled');
                blank.dataset.value = '';
                updateProgress();
                return;
            }
            // если свободно и выбрано кандзи – вставить
            if (selectedChoice && !blank.classList.contains('filled')) {
                const val = selectedChoice.dataset.value;
                blank.textContent = val;
                blank.dataset.value = val;
                blank.classList.add('filled');
                selectedChoice.classList.add('used');
                selectedChoice.classList.remove('selected');
                selectedChoice = null;
                updateProgress();
            }
        });
    });

    function updateProgress() {
        // считать, сколько пустых заполнено
        const filled = Array.from(blanks).filter(b => b.textContent.trim() !== '');
        learnedCount.textContent = filled.length;
        todayCount.textContent = filled.length;
        // обновить деталь счёта: правильных + оставшихся
        const remaining = totalBlanks - filled.length;
        scoreDetail.textContent = `${filled.length}+${remaining}`;
        // при каждом обновлении скрываем сообщение о результате
        resultMsg.textContent = '';
        resultMsg.className = 'result';
    }

    checkBtn.addEventListener('click', () => {
        let correct = 0;
        blanks.forEach(blank => {
            const answer = blank.dataset.answer;
            if (blank.textContent.trim() === answer) {
                correct++;
            }
        });
        if (correct === totalBlanks) {
            resultMsg.textContent = 'Отлично! Всё верно!';
            resultMsg.classList.remove('wrong');
            resultMsg.classList.add('correct');
            // обновить счёт: всё заполнено
            learnedCount.textContent = totalBlanks;
            todayCount.textContent = totalBlanks;
            scoreDetail.textContent = `${totalBlanks}+0`;
            // увеличить streak
            const streak = parseInt(streakCount.textContent, 10) || 0;
            streakCount.textContent = streak + 1;
        } else {
            const wrong = totalBlanks - correct;
            resultMsg.textContent = `Ошибок: ${wrong}`;
            resultMsg.classList.remove('correct');
            resultMsg.classList.add('wrong');
        }
    });
});