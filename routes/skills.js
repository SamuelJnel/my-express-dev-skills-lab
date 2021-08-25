const express = require("express");
const router = express.Router();
const skillsControllers = require("../controllers/skills");

/* GET users listing. */
router.get("/", skillsControllers.index);
router.get("/new", skillsControllers.new);
router.get("/:id", skillsControllers.show);

router.post("/", skillsControllers.create);

router.delete("/:id", skillsControllers.delete);

router.get("/:id/edit", skillsControllers.edit);
router.put("/:id", skillsControllers.update);

module.exports = router;
