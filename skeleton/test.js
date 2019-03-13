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

// test("addTodo returns an object with text added", t => {
//   const actual = logic.addTodo([], "tester");
//   const expected = [
//     {
//       description: "tester"
//     }
//   ];
//   t.deepEqual(
//     actual,
//     expected,
//     "addTodo should return an object with text added"
//   );
//   t.end();
// });

test("addTodo returns an object with description, id and done", t => {
  const actual = logic.addTodo([], "tester");
  const expected = [
    {
      id: 2,
      description: "tester",
      done: false
    }
  ];
  t.deepEqual(
    actual,
    expected,
    "addTodo should return an object with description, id and done"
  );
  t.end();
});

//test for adding object onto end of (object) array

test("addTodo add object to existing array(of objects)", t => {
  const actual = logic.addTodo([
    {
    id: 0,
    description: "tester",
    done: false
    }
], "do some code");
  const expected = [
    {
    id: 0,
    description: "tester",
    done: false
    },
    {
    id: 3,
    description: "do some code",
    done: false
    }
  ]
  t.deepEqual(actual, expected, "addTodo should add object to existing array");
  t.end();
});

// // test to see if the id function is working

// test("addTodo should increment id number", t => {
//   const actual = logic.addTodo([
//     {
//     id: 0,
//     description: "tester",
//     done: false
//     }
// ], "do some code");
//   const expected = [
//     {
//     id: 0,
//     description: "tester",
//     done: false
//     },
//     {
//     id: 1,
//     description: "do some code",
//     done: false
//     }
//   ]
//   t.deepEqual(actual, expected, "addTodo should add object to existing array and increment id");
//   t.end();
// });