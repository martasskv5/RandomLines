// simple line, but every time different

const width = 125;
const height = 125;
const sizes = [width, height]

let i = 0;
setDocDimensions(width, height);

// store final lines
const finalLines = [];

function createRandInRange(i) {
  // Generate a random float between 0 and i
  let currentValue = Math.random() * i;
  return Math.min(currentValue, i); // Ensure the value stays within the range
}

function createRandIntInRange(i) {
  // Generate a random float between 0 and i
  let currentValue = Math.random() * i;
  // Round down to the nearest whole number to ensure an integer result
  return Math.floor(currentValue);
}

// Function to generate a single random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate an array of random colors
function generateColorsList(numColors) {
  var colors = [];
  for (var i = 0; i < numColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}

// Generate a list of random colors
var colorsList = generateColorsList(Math.min(width, height));

// Prevent lines to be bigger then canvas
function setSize(maxValue) {
  var j = sizes[createRandIntInRange(sizes.length)];

  if (j > maxValue) {
    return j - (j - maxValue);
  } else {
    return j;
  }
}

// Create some random lines
for (let i = 0; i < width | i < height; i++) {
  finalLines.push([
    [
      [createRandInRange(setSize(width)), createRandInRange(setSize(height))],
      [createRandInRange(setSize(width)), createRandInRange(setSize(height))],
    ]
  ]);
}

// draw it
for (let i = 0; i < finalLines.length; i++) {
  //console.log(colorsList[createRandIntInRange(colorsList.length)])
  drawLines(finalLines[i], {
    stroke: colorsList[createRandIntInRange(colorsList.length)],
    width: createRandInRange(Math.min(width, height) / 30)
  });
}


//drawLines([
//[
//[createRandInRange(height), createRandInRange(width)],
//[createRandInRange(width), createRandInRange(height)],
//]
//])