var startTime, elapsedTime = 0, timerInterval;
var lapCounter = 1; 

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay(elapsedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(elapsedTime);
  document.querySelector('.lap-times').innerHTML = ''; 
  lapCounter = 1; 
}

function updateDisplay(time) {
  var milliseconds = Math.floor((time % 1000) / 10);
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);

  var displayTime = hours.toString().padStart(2, '0') + ':' +
                    minutes.toString().padStart(2, '0') + ':' +
                    seconds.toString().padStart(2, '0') + '.' +
                    milliseconds.toString().padStart(2, '0');

  document.querySelector('.display').textContent = displayTime;
}

document.addEventListener('DOMContentLoaded', function() {
  // Start button click event listener
  document.querySelector('.start').addEventListener('click', startTimer);

  // Stop button click event listener
  document.querySelector('.stop').addEventListener('click', stopTimer);

  // Reset button click event listener
  document.querySelector('.reset').addEventListener('click', resetTimer);

});
document.addEventListener('DOMContentLoaded', function() {
    var lapButton = document.querySelector('.lap');
    
      lapButton.addEventListener('click', function() {
        var lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCounter}: ${document.querySelector('.display').textContent}`;
        document.querySelector('.lap-times').appendChild(lapTime);
        lapCounter++;
      });
    
  
  });
  
