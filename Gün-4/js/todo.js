console.log("todo.js");

function load() {
  var checkBoxs = document.getElementsByClassName("me-1");
  for (var i = 0; i < checkBoxs.length; i++) {
    var cb = checkBoxs[i];
    var timer;
    cb.addEventListener("click", function () {
      var li = this.parentNode;
      if (this.checked) {
        this.parentNode.classList.add("checked");

        timer = setTimeout(function () {
          li.parentNode.removeChild(li);
        }, 4000);
      } else {
        clearTimeout(timer);
        this.parentNode.classList.remove("checked");
      }
    });
  }
}

function cleaner() {
  setInterval(function () {
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
      var li = lis[i];
      if (li.classList.contains("checked")) {
        li.parentNode.removeChild(li);
      }
    }
  }, 2000);
}

load();
//cleaner();
