module.exports = n => Number(Array.from(n.toString().replace('-', '')).reverse().join(''));
