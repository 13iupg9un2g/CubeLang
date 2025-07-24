
document.getElementById('startBtn')?.addEventListener('click', () => {
    window.location.href = 'lesson1.html';
});

function checkAnswer(correct) {
    const input = document.getElementById('answer');
    const result = document.getElementById('result');
    if (!input || !result) return;

    if (input.value.trim().toLowerCase() === correct.toLowerCase()) {
        result.textContent = '✅ Correct!';
        result.style.color = 'lime';
    } else {
        result.textContent = '❌ Try again.';
        result.style.color = 'red';
    }
}
