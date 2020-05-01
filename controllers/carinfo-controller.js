const Car = require('mongoose').model('car')
const Rentalinfo = require('mongoose').model('rentalinfo')
const User = require('mongoose').model('user')

module.exports = {
    viewDetails: (req, res) => {

        let id = req.params.id
        Car.findById(id).then(foundCar => {
            res.render('carDetails', { foundCar })
        })
    },
    takeCar: (req, res) => {
        let id = req.body.carId
        let userId = req.user._id   
        let RentedCarInfoObj = {}   

        Car.findById(id).then(foundCar => {
            User.findById(userId).then(user => {
                user.rentedCars.push(foundCar._id)
                user.save().then(()=>{
                    foundCar.isRented = true
                    foundCar.save().then(()=>{
                        rentedInfo={
                            car: foundCar._id,
                            user: userId,
                            date: req.body.dateOfRental,
                            days: req.body.daysOfRental
                        }

                        console.log(rentedInfo)
                        Rentalinfo.create(rentedInfo).then(()=>{
                            res.send('Sucess!')
                        })
                    })
                })
            })
        })  
    }
}

