let alreadyProgressing = false;
let currID = 0;
let activeBars = [];

$(document).ready(function() {
  window.addEventListener('message', function(event) {
    let data = event.data;
    if (data.action === 'progressbar') {
      data.id = currID;
      progress(data);
    } else if (data.action === 'stop') {
      stopProgress(data.id);
    }
  });
});

function stopProgress(id) {
  if (id === undefined || activeBars.includes(id)) {
    $('#progress').addClass('hidden');
    alreadyProgressing = false;
    $('#progress-value').css('animation', '');
    $('#progress').css('animation', '');
    activeBars = activeBars.filter(barId => barId !== id);
    currID++;
  }
}

function progress(data) {
  if (!alreadyProgressing) {
      activeBars.push(data.id);
      alreadyProgressing = true;
      $('#progress').removeClass('hidden');
      $('#progress-text').text(data.text);
      $('#progress-value').css('animation', `load ${data.time}s normal forwards`);
      document.documentElement.style.setProperty('--mainColor', data.color);

      setTimeout(function() {
          stopProgress(data.id);
      }, data.time * 1000);
  } else {
      return;
  }
}


