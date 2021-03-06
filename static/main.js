function setCookie(exdays, key, value) {
  var userid = key + "=" + value;
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "; expires=" + d.toUTCString();
  var path = "; path=/";
  document.cookie = userid + expires + path
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts.pop().split(";").shift();
  return ""
}

function toggleShow(parent){parent.children.forEach(function(child) {
  child.classList.toggle('show');
})}

(function() {
  x = getCookie("lang");
  if (x == "") {
    setCookie(1000, "lang", "en")
  }
})();

function languageSwitch() {
  lang = getCookie("lang");
  if (lang == 'zh') {
    setCookie(1000, 'lang', 'en');
  } else {
    setCookie(1000, 'lang', 'zh');
  }
  location.reload(true);
}

function exchangeList(obj, action) {
  // parent = obj.parent;
  // toggleShow(parent);
  var url = '/exchange/';
  switch (action) {
  case 'accept':
  case 'reject':
  case 'delete':
  case 'done':
    url += action + '/' + obj.dataset.id;
    window.location.replace(url);
    break;
  default:
    console.log('unkown action: ', action);
  }
}
