var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const xml2js = require('xml-js');
const stations = require('../stations.json');

router.get('/', function(req, res) {
  res.render('../views/index', {
    title: 'Translink Proxy'
  })
});

router.get('/stations', async function(req, res) {
  try {
    // This API is no longer responding
    // const data = await fetch('https://apis.opendatani.gov.uk/translink');
    // const result = await data.json();
    // const { stations } = result;

    res.append('Access-Control-Allow-Origin', '*');
    res.status(200).json(stations);
  } catch (e) {
    res.status(500).json({ message: `Internal server error - ${e.message}`});
  }
});

router.get('/station/:code', async function(req, res) {
  try {
    const xmlData = await fetch(`https://apis.opendatani.gov.uk/translink/${req.params.code}.xml`);
    const xmlAsText = await xmlData.text();
    const jsonData = JSON.parse(
      xml2js.xml2json(xmlAsText, {
        compact: true,
        textKey: "_",
        attributesKey: "$",
        commentKey: "value"
      })
    );

    res.append('Access-Control-Allow-Origin', '*');
    res.status(200).send(jsonData);
  } catch (e) {
    res.status(500).json({ message: `Internal server error - ${e.message}`});
  }
});

module.exports = router;
