const countdown = () => {
  const countDate = new Date("August 24, 2021 00:00:00").getTime();
  const currentTime = new Date().getTime();

  const gap = countDate - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").textContent = textDay;
  document.querySelector(".hour").textContent = textHour;
  document.querySelector(".minute").textContent = textMinute;
  document.querySelector(".second").textContent = textSecond;

  if (gap < 1000) {
    document.querySelector(".countdown").style.display = "none";
    document.querySelector(".countdown-img").style.display = "none";
    document.querySelector(".countdown-title").textContent = "Countdown ended!";
  }
};

setInterval(countdown, 1000);
