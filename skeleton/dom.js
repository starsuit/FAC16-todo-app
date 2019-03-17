// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");
  const sortDone = document.getElementById("sort-done");
  const sortDesc = document.getElementById("sort-desc");
  const sortDoneReverse = document.getElementById("sort-done-reverse");
  const sortDescReverse = document.getElementById("sort-desc-reverse");

  let state = [
    { id: -3, description: "first todo", done: true },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: true },
    { id: -4, description: "fourth todo", done: false }
  ];
  // this is our initial todoList

  let stateSort = "none";

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
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
    deleteButtonNode.setAttribute("aria-label", "delete todo");
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
    markTodoButtonNode.setAttribute("aria-label", "toggle checkbox");

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

    markTodoButtonNode.addEventListener("click", function(event) {
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
      var description = event.target.elements["description"].value;
      var newState = todoFunctions.addTodo(state, description);
      event.target.elements["description"].value = "";
      update(newState);
    });
  }

  const stateObj = {
    none: () => state,
    done: () => todoFunctions.sortTodos(state, "done"),
    desc: () => todoFunctions.sortTodos(state, "description"),
    doneRev: () => todoFunctions.sortTodosReverse(state, "done"),
    descRev: () => todoFunctions.sortTodosReverse(state, "description")
  };

  // sortDesc.addEventListener("click", function() {
  //   let newState = todoFunctions.sortTodos(state, "description");
  //   update(newState);
  // });

  // sortDoneReverse.addEventListener("click", function() {
  //   let newState = todoFunctions.sortTodosReverse(state, "done");
  //   update(newState);
  // });

  // sortDescReverse.addEventListener("click", function() {
  //   let newState = todoFunctions.sortTodosReverse(state, "description");
  //   update(newState);
  // });

  // you should not need to change this function
  var update = function(newState, newSort = stateSort) {
    state = newState;
    stateSort = newSort;
    renderState(state);
    renderSort(stateSort);
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

  var renderSort = function(stateSort) {
    const sortContainer = document.querySelector(".sort-container");
    const sortNode = document.createElement("div");
    sortNode.classList.add("sort-button-container");

    const createSortButton = sortType => {
      const button = document.createElement("button");
      button.classList.add("sort-button");
      button.textContent =
        stateSort === sortType ? `${sortType} ↑` : `${sortType} ↓`;
      if (stateSort === sortType || stateSort === `${sortType}Rev`) {
        button.classList.add("sort-button-selected");
      }
      button.addEventListener("click", function() {
        const newStateSort =
          stateSort === sortType ? `${sortType}Rev` : sortType;
        const getSortedState = stateObj[newStateSort];
        let newState = getSortedState();
        update(newState, newStateSort);
      });
      return button;
    };

    const doneButton = createSortButton("done");
    const descButton = createSortButton("desc");

    sortNode.appendChild(doneButton);
    sortNode.appendChild(descButton);

    sortContainer.replaceChild(sortNode, sortContainer.firstChild);

    // you may want to add a class for css
  };

  if (container) renderState(state);
  if (container) renderSort(stateSort);
})();
