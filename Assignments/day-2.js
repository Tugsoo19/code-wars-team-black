// Return to Sanity

const mystery = () => ({ sanity: "Hello" });

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}

// Geometry Basics: Distance between points in 2D

const distanceBetweenPoints = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

function distanceBetweenPoints(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x ** 2 + y ** 2);
}
