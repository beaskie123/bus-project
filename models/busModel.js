import mongoose from 'mongoose';

const busSchema = new mongoose.Schema(
    {
    name: { type: String, required: true, unique: true},
    departureTime: { type: String, required: true},
    arrivaltime: { type: String, required: true},
    fare: { type: Number , required: true},
    boardingPoints: { type: String, required: true},
    droppingPoints: {type: Array, required: true},
    seat: [{
        number: {type: String},
        isBooked: {type : Boolean, default: false} 
    }]
    },
    {
        timestamps: true
    }
);

const Bus = mongoose.model('Bus', busSchema);
export default Bus;