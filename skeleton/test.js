var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("addTodo returns an object with description, id and done", t => {
  const actual = logic.addTodo([], "tester");
  const expected = [
    {
      id: 1,
      description: "tester",
      done: false
    }
  ];
  t.equal(Array.isArray(actual), true, "addTodo should return an object");
  t.deepEqual(
    actual,
    expected,
    "addTodo should return an object with description, id and done"
  );
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

// test("addTodo returns an object with description, id and done", t => {
//   const actual = logic.addTodo([], "tester");
//   const expected = [
//     {
//       id: 2,
//       description: "tester",
//       done: false
//     }
//   ];
//   t.deepEqual(
//     actual,
//     expected,
//     "addTodo should return an object with description, id and done"
//   );
//   t.end();
// });

//test for adding object onto end of (object) array

test("addTodo add object to existing array(of objects)", t => {
  const actual = logic.addTodo(
    [
      {
        id: 0,
        description: "tester",
        done: false
      }
    ],
    "do some code"
  );
  const expected = [
    {
      id: 0,
      description: "tester",
      done: false
    },
    {
      id: 2,
      description: "do some code",
      done: false
    }
  ];
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

test("deleteTodo returns an array", t => {
  const actual = logic.deleteTodo([], 0);
  const expected = [];
  t.equal(Array.isArray(actual), true, "deleteTodo should return an array");

  t.end();
});

// test("deleteTodo takes a number", t => {
//   const actual = logic.deleteTodo([], 0);
//   const expected = "number";
//   t.equal(actual, expected, "deleteTodo should take a  number");

//   t.end();
// });

let testArray = [
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: false
  }
];

test("deleteTodo removes something", t => {
  const actual = logic.deleteTodo(testArray, 0);
  const expected = [
    {
      id: 1,
      description: "do some code",
      done: false
    }
  ];
  t.equal(
    actual.length,
    testArray.length - 1,
    "deleteTodo should remove an object"
  );
  t.deepEqual(actual, expected, "deleteTodo should remove selected object");

  t.end();
});

test("markTodo returns an array", t => {
  const actual = logic.markTodo([], 0);
  const expected = [];
  t.equal(Array.isArray(actual), true, "markTodo should return an array");

  t.end();
});

test("markTodo returns array changes the content, but NOT length", t => {
  const actual = logic.markTodo(testArray, 0);
  const expected = testArray;
  t.notDeepEqual(
    actual,
    expected,
    "markTodo should return an array with changed content, same length"
  );
  t.equal(
    actual.length,
    expected.length,
    "markTodo has not changed the length"
  );
  t.end();
});

test("markTodo returns array with specified object, done value toggled", t => {
  const actual = logic.markTodo(testArray, 0);
  const expected = [
    {
      id: 0,
      description: "tester",
      done: true
    },
    {
      id: 1,
      description: "do some code",
      done: false
    }
  ];
  t.deepEqual(actual, expected, "markTodo should feature a toggled done");

  t.end();
});

test("markTodo returns array with toggled done, toggled back to false", t => {
  const actual = logic.markTodo(
    [
      {
        id: 0,
        description: "tester",
        done: true
      },
      {
        id: 1,
        description: "do some code",
        done: false
      }
    ],
    0
  );
  const expected = testArray;
  t.deepEqual(
    actual,
    expected,
    "markTodo should feature a toggled done, toggled back to false"
  );

  t.end();
});

const sortTestArray = [
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 3,
    description: "a",
    done: false
  },
  {
    id: 2,
    description: "z",
    done: true
  }
];

const sortedTestArrayId = [
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 2,
    description: "z",
    done: true
  },
  {
    id: 3,
    description: "a",
    done: false
  }
];

const sortedTestArrayDesc = [
  {
    id: 3,
    description: "a",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 2,
    description: "z",
    done: true
  }
];

const sortedTestArrayDone = [
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 3,
    description: "a",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 2,
    description: "z",
    done: true
  }
];

test("sortTodos returns array sorted by an attribute", t => {
  t.equals(
    Array.isArray(logic.sortTodos(sortTestArray, "id")),
    true,
    "sortTodos should return an array"
  );
  t.deepEqual(
    logic.sortTodos(sortTestArray, "id"),
    sortedTestArrayId,
    "sortTodos should return an array sorted by id"
  );
  t.deepEqual(
    logic.sortTodos(sortTestArray, "description"),
    sortedTestArrayDesc,
    "sortTodos should return an array sorted by description"
  );
  t.deepEqual(
    logic.sortTodos(sortTestArray, "done"),
    sortedTestArrayDone,
    "sortTodos should return an array sorted by done status"
  );
  t.end();
});

const sortedTestArrayIdReverse = [
  {
    id: 3,
    description: "a",
    done: false
  },
  {
    id: 2,
    description: "z",
    done: true
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 0,
    description: "tester",
    done: false
  }
];

const sortedTestArrayDescReverse = [
  {
    id: 2,
    description: "z",
    done: true
  },
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 3,
    description: "a",
    done: false
  }
];

const sortedTestArrayDoneReverse = [
  {
    id: 1,
    description: "do some code",
    done: true
  },
  {
    id: 2,
    description: "z",
    done: true
  },
  {
    id: 0,
    description: "tester",
    done: false
  },
  {
    id: 3,
    description: "a",
    done: false
  }
];

test("sortTodosReverse returns array reverse-sorted by an attribute", t => {
  t.equals(
    Array.isArray(logic.sortTodosReverse(sortTestArray, "id")),
    true,
    "sortTodosReverse should return an array"
  );
  t.deepEqual(
    logic.sortTodosReverse(sortTestArray, "id"),
    sortedTestArrayIdReverse,
    "sortTodosReverse should return an array reverse-sorted by id"
  );
  t.deepEqual(
    logic.sortTodosReverse(sortTestArray, "description"),
    sortedTestArrayDescReverse,
    "sortTodosReverse should return an array reverse-sorted by description"
  );
  t.deepEqual(
    logic.sortTodosReverse(sortTestArray, "done"),
    sortedTestArrayDoneReverse,
    "sortTodosReverse should return an array reverse-sorted by done status"
  );
  t.end();
});
