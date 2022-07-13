const expree = require('express');
const router = expree.Router();
const api_user = require('./api_user')

router.use("/user", api_user);

module.exports = router;