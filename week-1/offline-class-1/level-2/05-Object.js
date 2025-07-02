// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let hasKey1 = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty('key1'):", hasKey1);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);

  const fruits = ['apple', 'banana', 'cherry'];
  let fruitObj = Object.fromEntries(fruits.map((fruit, index) => [index, fruit]));
  console.log("After Object.fromEntries():", fruitObj);

  let newFruitObj = Object.assign({}, fruits);
  console.log("After Object.assign() with array:", newFruitObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
