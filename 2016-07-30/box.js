/**
  Run in node:

    node box.js

**/

const boxes = [[2, 3, 4], [1, 1, 10]];

// Calculates the total surface area of a box.
function totalv1(bs) {
  var total = [];
  for (var b of bs) {
    sides = [b[0]*b[1], b[1]*b[2], b[2]*b[0]];
    m = Math.min(sides[0], sides[1], sides[2]);
    box = (sides[0] + sides[1] + sides[2])*2 + m;
    // console.log(box, sides, b);
    total.push( box);
  }
  return total.reduce((a, b) => a + b, 0);
}

console.log(totalv1(boxes));

function totalv2( bs ) {
    var ret = 0;
    for ( const b of bs ) {
        const sides = [b[0]*b[1], b[1]*b[2], b[2]*b[0]];
        sides.map((s) => {ret += s*2 } );
        ret += Math.min( ...sides );
    }
    return ret;
}

console.log(totalv2(boxes));

function totalv3(boxes) {
    var totalSurfaceArea = [];
    for (var box of boxes) {
        var sidesArea = [
            box[0] * box[1],
            box[1] * box[2],
            box[2] * box[0]
        ];
        var areaSlack = Math.min(sidesArea[0], sidesArea[1], sidesArea[2]);
        var surfaceArea = (sidesArea[0] + sidesArea[1] + sidesArea[2]) * 2 + areaSlack;
        totalSurfaceArea.push(surfaceArea);
    }

    return totalSurfaceArea.reduce(function(x, y) {
        return x + y;
    }, 0);
}

console.log(totalv3(boxes));

function totalv4(boxes) {

    var total = [];

    for (var box of boxes) {

        sides =
            [
                box[0]*box[1],
                box[1]*box[2],
                box[2]*box[0]
            ];

        boxAllowance = Math.min(sides[0], sides[1], sides[2]);

        boxSurface = (sides[0] + sides[1] + sides[2])*2;

        boxSurface += boxAllowance;

        total.push(boxSurface);
    }

    return total.reduce((a, b) => a + b, 0);
}

console.log(totalv4(boxes));
