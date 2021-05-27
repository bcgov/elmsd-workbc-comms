var express = require('express');
var router = express.Router();

var { saveDraft } = require("../utils/mongoOperations");

router.post('/', async(req,res) => {
    try {
      var item = req.body
      await saveDraft(item)
        .then(async r => {
          console.log(r.result)
          console.log(r.insertedId)
          if (r.result.ok === 1) {
            res.send({
              ok: "ok",
              id: r.insertedId, 
            })
          }
        })
    } catch (error) {
      res.send ({
        draftErr: "draftErr"
      })
    }
  })

module.exports = router