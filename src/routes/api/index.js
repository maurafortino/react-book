const router = require("express").Router();
const searchBookRoutes = require("./searchBooks");

// Book routes
router.use("/searchBooks", searchBookRoutes);

module.exports = router;