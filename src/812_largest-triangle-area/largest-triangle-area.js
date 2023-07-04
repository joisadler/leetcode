// Brute force method, using Heron's formula
const distance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

const area = (a, b, c) => {
  const p = (a + b + c) / 2;
  return Math.sqrt(Math.abs(p * (p - a) * (p - b) * (p - c))).toFixed(1);
};

const maxValueOf = arr => Math.max.apply(null, arr);

const largestTriangleArea = (points) => {
  const areas = [];
  for (let i = 0; i < points.length; i += 1) {
    const point1 = points[i];
    const pointsExcept1 = points.filter(p => p !== point1);
    for (let j = 0; j < pointsExcept1.length; j += 1) {
      const point2 = pointsExcept1[j];
      const otherPoints = pointsExcept1
        .filter(p => p !== point1 && p !== point2);
      for (let k = 0; k < otherPoints.length; k += 1) {
        const point3 = otherPoints[k];
        const a = distance(point1, point2);
        const b = distance(point2, point3);
        const c = distance(point1, point3);
        const currentArea = area(a, b, c);
        areas.push(currentArea);
      }
    }
  }
  return maxValueOf(areas);
};

/* eslint-disable */
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));
// 2
console.log(largestTriangleArea([[1,0],[0,0],[0,1]]))
// 0.5
console.log(largestTriangleArea([[-35,19],[40,19],[27,-20],[35,-3],[44,20],[22,-21],[35,33],[-19,42],[11,47],[11,37]]))
// 1799
console.log(largestTriangleArea([[35,-23],[-12,-48],[-34,-40],[21,-25],[-35,-44],[24,1],[16,-9],[41,4],[-36,-49],[42,-49],[-37,-20],[-35,11],[-2,-36],[18,21],[18,8],[-24,14],[-23,-11],[-8,44],[-19,-3],[0,-10],[-21,-4],[23,18],[20,11],[-42,24],[6,-19]]));
// 3627

export default largestTriangleArea;
