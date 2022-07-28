import express from 'express'
import Bus from '../models/busModel';

const busRouter = express.Router();

busRouter.get('/', async (req, res) => {
    const bus = await Bus.find();
    res.send(bus);
})

export default busRouter;