import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Bea',
            email: 'bea1@example.com',
            password: bcrypt.hashSync('12345')
        },
        {
            name: 'Andrea',
            email: 'andrea@example.com',
            password: bcrypt.hashSync('12345')
        }
    ],
    products: [
        {
            name:"JAC LINERS",
            slug: "jac-liner",
            departureTime: '06:00 AM',
            arrivaltime: '07:00AM',
            fare: 250,
            boardingPoints:'Calamba',
            droppingPoints:['Makati','Ayala','Quezon City'],
            seats: [
                { number: '1', isBooked: false },
                { number: '2', isBooked: false },
                { number: '3', isBooked: false },
                { number: '4', isBooked: false },
                { number: '5', isBooked: false },
                { number: '6', isBooked: false },
                { number: '7', isBooked: false },
                { number: '8', isBooked: false },
                { number: '9', isBooked: false },
                { number: '10', isBooked: false },
              ]
        },
        {
            name:"BGC LINERS",
            slug: 'bgc-liner',
            departureTime: '06:00 AM',
            arrivaltime: '07:00AM',
            fare: 250,
            boardingPoints:'Calamba',
            droppingPoints:['Makati','Manila','BGC'],
            seats: [
                { number: '1', isBooked: false },
                { number: '2', isBooked: false },
                { number: '3', isBooked: false },
                { number: '4', isBooked: false },
                { number: '5', isBooked: false },
                { number: '6', isBooked: false },
                { number: '7', isBooked: false },
                { number: '8', isBooked: false },
                { number: '9', isBooked: false },
                { number: '10', isBooked: false },
              ]
        },
        {
            name:"LUCENA LINES",
            slug: 'lucena-liner',
            departureTime: '09:00 AM',
            arrivaltime: '12:00PM',
            fare: 250,
            boardingPoints:'Calamba',
            droppingPoints:['LUCENA','BATANGAS','BATANGAS'],
            seats: [
                { number: '1', isBooked: false },
                { number: '2', isBooked: false },
                { number: '3', isBooked: false },
                { number: '4', isBooked: false },
                { number: '5', isBooked: false },
                { number: '6', isBooked: false },
                { number: '7', isBooked: false },
                { number: '8', isBooked: false },
                { number: '9', isBooked: false },
                { number: '10', isBooked: false },
              ]
        },
        {
            name:"HM TRANSPORT",
            slug: "hm-transport",
            departureTime: '06:00 AM',
            arrivaltime: '07:00AM',
            fare: 250,
            boardingPoints:'Calamba',
            droppingPoints:['ALABANG','LAWTON','MANILA'],
            seats: [
                { number: '1', isBooked: false },
                { number: '2', isBooked: false },
                { number: '3', isBooked: false },
                { number: '4', isBooked: false },
                { number: '5', isBooked: false },
                { number: '6', isBooked: false },
                { number: '7', isBooked: false },
                { number: '8', isBooked: false },
                { number: '9', isBooked: false },
                { number: '10', isBooked: false },
              ]
        },
        {
            name:"DELA ROSA TRANSIT",
            slug: 'dela-rosa-transit',
            departureTime: '06:00 AM',
            arrivaltime: '07:00AM',
            fare: 250,
            boardingPoints:'Calamba',
            droppingPoints:['NUEVA ECIJA','TARLAC','PAMPANGA'],
            seats: [
                { number: '1', isBooked: false },
                { number: '2', isBooked: false },
                { number: '3', isBooked: false },
                { number: '4', isBooked: false },
                { number: '5', isBooked: false },
                { number: '6', isBooked: false },
                { number: '7', isBooked: false },
                { number: '8', isBooked: false },
                { number: '9', isBooked: false },
                { number: '10', isBooked: false },
              ]
        },

    ]
}

export default data;