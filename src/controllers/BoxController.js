const Box = require('../models/Box');

class BoxController {
    async store(req, res){
        const newTitle = req.body.title;

        const box = await Box.create({title: newTitle});
        
        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path:'files',
            options: { sort: { createdAt: -1}  }
        });
        return res.json(box);
    }
}

module.exports = new BoxController();