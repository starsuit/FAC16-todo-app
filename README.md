# PROJECT WEEK 2

### The Project

To create a simple to-do app where users could add a to-do item, check off that to-do item, and delete the to-do item. A stretch goal was to order the list.

We had a user story to guide us:
- enter tasks I need to do into a web page so that I don't forget them:
- view the tasks I have added in a list so that I can plan my day
- mark tasks as complete so that I can focus on the tasks I have left
- the to-dos to be large enough so that I don't hit the wrong one with my thumb

---
### How to set up our project

1. Create a new directory.
2. git clone `https://github.com/FAC-Sixteen/Week-2-project-JASH.git`
3. To install dependencies, run `npm i` in your terminal.
4. To test, run `npm test` in your terminal.

---
### What did we struggle with?

* Getting our heads around the initial functions in logic.js was difficult. The arguments to the functions didn't really 'exist' yet. TDD actually really helped with this, as we could take baby steps with our code.

* Not fully understanding update and renderState functions. When adding the markTodo button we tried (for some time...) to add/remove/toggle classes to the markTodo buttons before realising we were doing this *inside* the callback function inside the event listener. We fixed this with if else statements checking the todo.done *before* the event listener.  

---
### What did we learn?

* How to use `Array.map()` better! 
* `Array.isArray()`
* How to clone an array of objects
* How to write pure functions and to call those functions.
* Better understand callbacks, where what and why
* We understand the purpose of TDD better now - it really helped when we were working without knowing what values our functions would be receiving

---
### Stretch goals

* add alert for when the user presses the delete button
* sort & slice, change order(priority) of todos
* customise layout
* maybe some animations?
