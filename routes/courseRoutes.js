const express = require('express');
const router = express.Router();
const itemModel = require('../daos/courseDAO');

router.get('/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const item = await itemModel.getItemById(id);
//     if (item) {
//       res.json(item);
//     } else {
//       res.status(404).send('Item not found');
//     }
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
});

module.exports = router;