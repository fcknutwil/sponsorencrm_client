const express = require('express');

const router = express.Router();
const storage = require('./storage');

let callbackFactory = (response) => {
    return (result) => {
        response.json(result);
    };
};

router.put("/:user", function (req, res) {
    storage.create(req.params.user, callbackFactory(res))
});
router.delete("/:user/:id", function (req, res) {
    storage.remove(req.params.user, req.params.id, callbackFactory(res));
});

module.exports = router;