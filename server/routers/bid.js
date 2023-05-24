const router = require('express').Router();
const Bidding = require('../models/bid');
const auth = require('../middlewares/auth');
const User = require('../models/user');


router.post('/add', async (req, res) => {
    try {
        const { bidd } = req.body;
        
        const newBidding = new Bidding({
            bidd,
        });

        const savedBid = await newBidding.save();
        res.json(savedBid);
        res.send({Bid: savedBid.bidd})

    } catch (error) {
        console.log(error);
    }
})

router.get('/add', async (req, res) => {
    try {
        const bidding = await Bidding.find();
        res.json(bidding);

    } catch (error) {
        console.log(error);
        res.status(403).send(
            {msg: "Unauthorized Person cannot access this data",
        })
    }
})

module.exports = router;