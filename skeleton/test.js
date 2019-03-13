var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("addTodo returns an object", t => {
  const actual = typeof logic.addTodo([], "newTodo");
  const expected = "object";
  t.equal(actual, expected, "addTodo should return an object");
  t.end();
});
