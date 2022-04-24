var todoList = [];

function add() {
  var txt = document.getElementById("txtTodo");
  if (txt.value == "") {
    alert("Lütfen giriş yapınız");
    return;
  }
  var todo = {
    text: txt.value,
    isChecked: true,
    createdDate: new Date(),
  };
  todoList.push(todo);
  listItemGenerator();
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
                <input type="checkbox" class="form-check-input me-1">
            </div>
            <div class="col ${ item.isChecked ? "text-decoration-line-through" : "" }">
                ${item.text} 
            </div>
            <div class="col-2">
                <input type="button" value="Delete" class="btn btn-outline-danger btn-sm float-right">
            </div>
        </div>
    </li>`;
    ul.innerHTML += template;
  }
}
