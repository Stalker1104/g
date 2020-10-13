var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    text_div.innerHTML+='Ваше текущее метоположение:'
    text_div.innerHTML+="<br>"
    text_div.innerHTML+=`Широта: ${crd.latitude}`
    text_div.innerHTML+="<br>"
    text_div.innerHTML+=`Долгота: ${crd.longitude}`
    text_div.innerHTML+="<br>"
    text_div.innerHTML+=`Плюс-минус ${crd.accuracy} метров.`
    text_div.innerHTML+="<br>"
    text_div.innerHTML+="<br>"
  };
  
  function error(err) {
    error_div.innerHTML+=`ERROR(${err.code}): ${err.message}`
  };
  
  //navigator.geolocation.getCurrentPosition(success, error, options);