import express from 'express'
import data from '../data.js';
import Bus from '../models/busModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
    await Bus.remove({});
    const createdBus = await Bus.insertMany(data.bus)
    res.send({createdBus})
})
seedRouter.get('/' , async (req , res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({createdUsers})
});
export default seedRouter;