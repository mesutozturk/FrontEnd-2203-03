var todoList = [];

function add() {
  var txt = document.getElementById("txtTodo");
  if (txt.value == "") {
    alert("Lütfen giriş yapınız");
    return;
  }
  var todo = {
    text: txt.value,
    isChecked: false,
    createdDate: new Date(),
  };
  todoList.push(todo);
  saveLocalStroge();
  listItemGenerator();
  txt.value = "";
  txt.focus();
}
//Ternary If Operator ? :
function listItemGenerator() {
  var ul = document.getElementById("todoList");
  ul.innerHTML = "";
  for (var i = 0; i < todoList.length; i++) {
    var item = todoList[i];
    var template = `<li class="list-group-item">
        <div class="row">
            <div class="col-1">
                <input type="checkbox" ${
                  item.isChecked ? "checked" : ""
                } class="form-check-input me-1 cb-state" data="${i}">
            </div>
            <div class="col ${
              item.isChecked ? "text-decoration-line-through" : ""
            }">
                ${item.text} 
            </div>
            <div class="col-2">
                <input type="button" value="Delete" class="btn btn-outline-danger btn-sm float-right btn-delete" data=${i}>
            </div>
        </div>
    </li>`;
    ul.innerHTML += template;
  }
  var cbList = document.getElementsByClassName("cb-state");
  for (var i = 0; i < cbList.length; i++) {
    var item = cbList[i];
    item.addEventListener("change", function () {
      //callback function
      var index = this.getAttribute("data");
      todoList[index].isChecked = !todoList[index].isChecked;
      var itemCol = this.parentNode.parentNode.children[1]; // 2 element üste çıktık 2. alt elementini seçtik bu seçtiğimiz itemCol bizim textimizi barındıran div olduğu için verdiğimiz class ile üstü çizik veya değil olacak
      itemCol.classList.toggle("text-decoration-line-through");
      saveLocalStroge();
    });
  }
  var deleteBtnList = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteBtnList.length; i++) {
    var item = deleteBtnList[i];
    item.addEventListener("click", function () {
      var index = this.getAttribute("data");
      todoList.splice(index, 1); //dizinin içindeki index numarasına göre 1 eleman siler
      var parentLi = this.parentNode.parentNode.parentNode; //li elementini seçtik
      parentLi.parentNode.removeChild(parentLi); // li'nin ul'sinden li elementini sildik
      saveLocalStroge();
    });
  }
}

function checkLocalStroge() {
  var myTodoList = localStorage.getItem("myTodoList");

  if (myTodoList != null) {
    todoList = JSON.parse(myTodoList);
  }
  listItemGenerator();
}
checkLocalStroge();
function saveLocalStroge() {
  localStorage.setItem("myTodoList", JSON.stringify(todoList));
}