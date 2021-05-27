var express = require('express');
var router = express.Router();

var { updateDraft } = require("../utils/mongoOperations");

router.post('/', async(req,res) => {
    try {
      var item = req.body
      await updateDraft(req._id,item)
        .then(async r => {
          console.log(r.result)
          if (r.result.ok === 1) {
            res.send({
              ok: "ok"
            })
          }
        })
    } catch (error) {
      res.send ({
        updateDraftErr: "draftErr"
      })
    }
  })

module.exports = router