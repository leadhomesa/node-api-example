const chalk = require('chalk');
const { Router } = require('express');
const router = Router();
const ListingModel = require('../models/listing');

// get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await ListingModel.find()
      .sort()
      .exec();

    return res.json({ message: 'ok', listings });
  } catch (ex) {
    console.log(chalk.red(ex));
    return res.status(500).json({ message: 'Error retrieving listings.' });
  }
});

// get specific listing
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await ListingModel.findById(id).exec();
    return res.json({ message: 'ok', listing });
  } catch (ex) {
    console.log(chalk.red(ex));
    return res.status(500).json({ message: 'Error retrieving listing.' });
  }
});

// create listing
router.post('/', async (req, res) => {
  const { name, address, imageUrl } = req.body;

  try {
    const newListing = await ListingModel.create({
      name,
      address,
      imageUrl,
      created: new Date(),
      modified: new Date()
    });

    return res.status(201).json({ message: 'ok', listing: newListing });
  } catch (ex) {
    console.log(chalk.red(ex));
    return res.status(500).json({ message: 'Error creating listing.' });
  }
});

// update specific listing
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address, imageUrl } = req.body;

  try {
    await ListingModel.updateOne(
      {
        _id: id
      },
      {
        name,
        address,
        imageUrl,
        modified: new Date()
      }
    );
    const listing = await ListingModel.findById(id).exec();
    return res.status(200).json({ message: 'ok', listing });
  } catch (ex) {
    console.log(chalk.red(ex));
    return res.status(500).json({ message: 'Error updating listing.' });
  }
});

module.exports = router;
