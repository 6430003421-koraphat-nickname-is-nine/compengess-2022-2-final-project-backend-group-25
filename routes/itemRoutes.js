const express = require("express");
const itemsController = require("../controller/itemsController");

const router = express.Router();

router.get("/", itemsController.getItems);
router.get("/members", itemsController.getGroupMembers);
router.post("/", itemsController.addItem);
router.delete("/:item_id", itemsController.deleteItem);

//====== Genre Method

router.get("/genres" ,itemsController.genreGet);
router.post("/genres" ,itemsController.genrePost);
//====== Todo Method
router.get("/todos" ,itemsController.toDoGet);
router.post("/todos" ,itemsController.toDoPost);
router.delete("/todos/:id" , itemsController.toDoDelete);
router.put("/todos/:id" , itemsController.toDoPut);


router.get("/todos" , )
module.exports = router;
