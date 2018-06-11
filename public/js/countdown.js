function fulltime() {
  var time = new Date();
  let newYear = new Date("jul,15,2018,10:00:00");
  let totalRemains = (newYear.getTime() - time.getTime());

  if (totalRemains > 1) {
    let RemainsSec = (parseInt(totalRemains / 1000));
    let RemainsFullDays = (parseInt(RemainsSec));
    let secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
    let RemainsFullHours = (parseInt(secInLastDay / 3600));
    if (RemainsFullHours < 10) { RemainsFullHours = "0" + RemainsFullHours };
    let secInLastHour = secInLastDay - RemainsFullHours * 3600;
    let RemainsMinutes = (parseInt(secInLastHour / 60));
    if (RemainsMinutes < 10) { RemainsMinutes = "0" + RemainsMinutes };
    var lastSec = secInLastHour - RemainsMinutes * 60;
    if (lastSec < 10) { lastSec = "0" + lastSec };

    document.querySelector('.RemainsFullDays').innerHTML = RemainsFullDays + " секунд";
    setTimeout('fulltime()', 10)
  }

  else {
    document.querySelector('.clock').innerHTML = "Лот продано!";
  }
}