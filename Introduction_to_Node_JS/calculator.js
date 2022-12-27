// Common JS Default Exports
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };

//It executes the default common js export as output of subtract value
// module.exports = add;
// module.exports = sub;

// Common JS Named Exports
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

//It executes the named common js export(multiple expression executions)
module.exports.add = add; // exports.add = add;
module.exports.sub = sub; // exports.sub = sub;
