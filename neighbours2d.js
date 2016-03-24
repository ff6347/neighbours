/**
 * Findig the neighbours in 2d matrix
 * @author Fabian "fabiantheblind" Morón Zirfas
 * @license MIT
 */
//   |  0 |  1 |  2 |
// --+----+----+----+
// 0 |    |    |    |
// --+----+----+----+
// 1 |    |    |    |
// --+----+----+----+
// 2 |    |    |    |
// --+----+----+----+

var get_neighbours2d = function(matrix, x, y) {
  var neighbours = [];
  var is_toprow = false;
  var is_bottomrow = false;
  var is_leftcolumn = false;
  var is_rightcolumn = false;
  var left = null;
  var right = null;
  var ontop = null;
  var below = null;
  var topleft = null;
  var topright = null;
  var belowleft = null;
  var belowright = null;
  if (x === 0) {
    is_leftcolumn = true;
  } else if (x === matrix.length - 1) {
    is_rightcolumn = true;
  }
  if (y === 0) {
    is_toprow = true;
  } else if (y === matrix[x].length - 1) {
    is_bottomrow = true;
  }
  if (is_toprow !== true && is_leftcolumn !== true) {
    topleft = matrix[x - 1][y - 1];
    neighbours.push({
      point: topleft,
      comment: 'topleft'
    });
  }
  if (is_toprow !== true) {
    ontop = matrix[x][y - 1];
    neighbours.push({
      point: ontop,
      comment: 'ontop'
    });
  }
  if (is_toprow !== true && is_rightcolumn !== true) {
    topright = matrix[x + 1][y - 1];
    neighbours.push({
      point: topright,
      comment: 'topright'
    });
  }
  if (is_leftcolumn !== true) {
    left = matrix[x - 1][y];
    neighbours.push({
      point: left,
      comment: 'left'
    });

  }
  if (is_rightcolumn !== true) {
    right = matrix[x + 1][y];
    neighbours.push({
      point: right,
      comment: 'right'
    });
  }
  if (is_bottomrow !== true && is_leftcolumn !== true) {
    belowleft = matrix[x - 1][y + 1];
    neighbours.push({
      point: belowleft,
      comment: 'belowleft'
    });
  }
  if (is_bottomrow !== true) {
    below = matrix[x][y + 1];
    neighbours.push({
      point: below,
      comment: 'below'
    });
  }
  if (is_bottomrow !== true && is_rightcolumn !== true) {
    belowright = matrix[x + 1][y + 1];
    neighbours.push({
      point: belowright,
      comment: 'belowright'
    });
  }
  return neighbours;
};

var main = function() {
  var w = 10;
  var h = 3;
  var counter = 0;
  var matrix = []; // columns
  for (var x = 0; x < w; x++) {
    var row = [];
    for (var y = 0; y < h; y++) {
      var p = {
        x: x,
        y: y,
        ndx: counter
      };
      row.push(p);
      counter++;
    }
    matrix.push(row);
  }
  var randomColumn = Math.floor(Math.random() * (matrix.length));
  var randomRow = Math.floor(Math.random() * (matrix[randomColumn].length));

  console.log('x is: %s ||  y is %s', randomColumn, randomRow);
  console.log('max x  is: %s || max y is %s', matrix.length - 1, matrix[randomColumn].length - 1);
  var startpoint = matrix[randomColumn][randomRow];
  var nearest_neighbours = get_neighbours2d(matrix, randomColumn, randomRow);
  console.log('nearest_neighbours are\n', nearest_neighbours);

};
main();
