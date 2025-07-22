document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("start-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const resetBtn = document.getElementById("reset-btn");

  let totalTime = 25 * 60; // 25 minutos em segundos
  let currentTime = totalTime;
  let intervalId = null;

  function updateDisplay(time) {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  function startTimer() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      currentTime--;
      updateDisplay(currentTime);

      if (currentTime <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        alert("Tempo de Pomodoro finalizado!");
        startBtn.disabled = false;
        pauseBtn.disabled = true;
      }
    }, 1000);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }

  function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }

  function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    currentTime = totalTime;
    updateDisplay(currentTime);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);

  updateDisplay(currentTime);
});