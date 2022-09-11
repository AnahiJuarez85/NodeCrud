const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * lista los items
 */

router.get("/",authMiddleware, getItems);

/**
 * obtener detalle de item
 */
router.get("/:id",validatorGetItem, getItem);

/**
 * crear un registro
 */
router.post("/",authMiddleware,checkRol(["admin"]), validatorCreateItem, createItem);
/**
 * actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 * eliminar
 */
router.delete("/:id", validatorGetItem, deleteItem);
module.exports = router;