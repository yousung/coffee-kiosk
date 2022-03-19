var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const { phone } = req.query;

  try {
    const user = await User.findOne({
      where: { phone },
    });

    res.send({ point : user ? user.point : 0  });
  } catch (err) {
    res.status(500).send({ message: err.message || "error" });
  }
});

module.exports = router;
