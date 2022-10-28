const express = require('express');

const app = express();

// src/app.js

// const express = require('express');

const teams = [
  {
    id: 1,
    name: 'Sport Club Corinthians Paulista',
    initials: 'SCCP',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;
