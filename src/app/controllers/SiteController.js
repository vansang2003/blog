const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //GET home
    index(req, res, next) {

        // res.json({
        //     name: 'test'
        // });

        // res.render('home');

        // Course.find()
        // .then((courses, err) => {
        //     res.json(courses);
        // })
        // .catch(() => { 
        //     res.status(400).json({ error: 'ERROR!!!' }) 
        // });

        Course.find({})
            .then(courses => {

                //chuyển courses thành object trong mongoose
                // courses = courses.map(course => course.toObject())

                res.render('home', { 
                    courses:multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    //GET search
    search(req, res) {
        res.render('search'); 
    }
}

module.exports = new SiteController;