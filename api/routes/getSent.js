var express = require('express');
var router = express.Router();

var { getSent } = require("../utils/mongoOperations");

router.get('/', async(req,res) => {
    try {
        await getSent()
        .then(async cursor => {
            var results = await cursor.toArray()
            console.log(results.length)
            console.log(results)
            res.send ({
                results: results,
                total: results.length
            })
        })
    } catch (error) {
      res.send ({
        getErr: "getErr"
      })
    }
  })

module.exports = router