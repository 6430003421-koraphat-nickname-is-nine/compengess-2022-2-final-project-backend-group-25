const express = require("express");
const itemsController = require("../controller/todosController");

const router = express.Router();

//====== Todo Method
router.get("/" ,itemsController.toDoGet);
router.post("/" ,itemsController.toDoPost);
router.delete("/:item_id" , itemsController.toDoDelete);

module.exports = router;
