/**
 * Findig the neighbours in list
 * when we organize this list as a matrix
 * @author Fabian "fabiantheblind" Morón Zirfas
 * @license MIT
 */
// +----------+----------+----------+
// | 0 (5,5)  | 3 (10,5) | 6 (15,5) |
// +----------+----------+----------+
// | 1 (5,10) | 4 (10,10)| 7 (15,10)|
// +----------+----------+----------+
// | 2 (15,10)| 5 (15,10)| 8 (15,15)|
// +----------+----------+----------+

var get_neighbours = function(ndx, list, width, height, steps) {
  var w_steps = (width / steps) - 1;
  var h_steps = (height / steps) - 1;
  var curr_point = list[ndx];
  var neighbours = [];
  var left = false;
  var right = false;
  var top = false;
  var bottom = false;
  var centered = false;
  // for(var i = 0; i < list.length;i++){
  if (ndx < h_steps) {
    // we are at the left border
    console.log('Left border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    left = true;
  }
  if (ndx > (list.length - 1) - h_steps) {
    // right border
    console.log('Right border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    right = true;
  }
  if (ndx % (h_steps) === 0) {
    // upper border
    console.log('Upper border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    top = true;
  }
  if (ndx % (h_steps) === h_steps - 1) {
    // lower border
    console.log('Lower border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    bottom = true;
  }
  if (right !== true && left !== true && top !== true && bottom !== true) {
    console.log('centered with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    centered = true;
  }
  if (right === true && bottom === false && top === false) {
    neighbours = [];
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
  }
  if (right === true && top === true && bottom === false) {
    neighbours = [];
    // neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);

  }
  if (right === true && bottom === true && top === false) {
    neighbours = [];
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);

  }
  if (left === true && bottom === false && top === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
  }
  if (left === true && top === true && bottom === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    // neighbours.push(ndx + (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    // neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));


  }
  if (left === true && bottom === true && top === false) {
    neighbours = [];
    // neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    // neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
  }
  if (top === true && left === false && right === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    // neighbours.push(ndx + (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
  }
  if (bottom === true && left === false && right === false) {
    neighbours = [];
    // neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
  }

  if (centered === true) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
  }

return neighbours;
};
var main = function() {
  var w = 100;
  var h = 50;
  var s = 5;
  var points = [];
  var counter = 0;
  for (var x = s; x < w; x += s) {
    for (var y = s; y < h; y += s) {
      points.push({
        "x": x,
        "y": y,
        "ndx": counter
      });
      counter++;
    }
  }
  var startpoint = points[Math.floor(Math.random() * points.length)];
  var nearest_neighbours = get_neighbours(startpoint.ndx, points, w, h, s);
  console.log(nearest_neighbours);
  var nextpoint = nearest_neighbours[Math.floor(Math.random() * nearest_neighbours.length)];

};
main();