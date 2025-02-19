'use strict';

const fs = require('fs');

const tutorials = fs.readdirSync(__dirname).filter(file => file.endsWith('.md'));

module.exports = tutorials.reduce((map, filename) => {
  const content = fs.readFileSync(`${__dirname}/${filename}`, 'utf8');
  map[`docs/tutorials/${filename}`] = {
    title: `Mongoose Tutorials: ${content.split('\n')[0].replace(/^#+/, '').trim()}`,
    acquit: true,
    markdown: true
  };
  return map;
}, {});
