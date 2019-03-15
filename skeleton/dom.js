// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    console.log(todo);
    var todoNode = document.createElement("li");
    // you will need to use addEventListener
    todoNode.classList.add("todo-panel");
    // add span holding description

    let t = document.createTextNode(todo.description);
    let textSpan = document.createElement("div");
    textSpan.appendChild(t);
    textSpan.classList.add("todo-description");

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.classList.add("button-delete");
    deleteButtonNode.textContent = "X";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // add markTodo button
    // create inner checkbox input
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = `checkbox${todo.id}`;
    checkBox.classList.add("check-box");
    // create visual checkbox div
    var checkMarkBox = document.createElement("div");
    checkMarkBox.classList.add("check-mark-box");

    var checkMarkTick = document.createElement("div");
    checkMarkTick.classList.add("check-mark-tick");
    // create surrounding label div
    var markTodoButtonNode = document.createElement("label");

    markTodoButtonNode.htmlFor = `checkbox${todo.id}`;
    markTodoButtonNode.classList.add("check-label");

    // append checkbox input, visual checkbox and textspan to label

    markTodoButtonNode.appendChild(checkBox);
    markTodoButtonNode.appendChild(checkMarkTick);
    markTodoButtonNode.appendChild(checkMarkBox);
    markTodoButtonNode.appendChild(textSpan);

    if (todo.done) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }

    // markTodoButtonNode.classList.add("blue");
    // markTodoButtonNode.setAttribute("type", "checkbox");
    markTodoButtonNode.addEventListener("click", function(event) {
      // console.log(event);
      // console.log(markTodoButtonNode.classList);
      // if (markTodoButtonNode.classList[0] === "blue") {
      //   markTodoButtonNode.classList.remove("blue");
      //   markTodoButtonNode.classList.add("red");
      // }

      // console.log(markTodoButtonNode.classList);
      // markTodoButtonNode.classList.toggle("blue");
      // console.log(event);
      // console.log(event.path[0]);
      // markTodoButtonNode.checked = false;
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButtonNode);
    // add classes for css
    todoNode.appendChild(deleteButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log(event);
      var description = event.target.elements["description"].value;
      var newState = todoFunctions.addTodo(state, description);
      event.target.elements["description"].value = "";
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");
    todoListNode.classList.add("todo-panel-container");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
