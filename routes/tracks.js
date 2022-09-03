const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
/**
 * lista los items
 */

router.get("/",getItems);

/**
 * obtener detalle de item
 */
router.get("/:id",validatorGetItem, getItem);

/**
 * crear un registro
 */
router.post("/", validatorCreateItem, createItem);
/**
 * actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 * eliminar
 */
router.delete("/:id", validatorGetItem, deleteItem);
module.exports = router;