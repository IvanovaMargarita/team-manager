const Player = require('../models/player.model');    /* this is new */
const jwt = require('jsonwebtoken')


module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
    message: "Hello World"
    });
}
module.exports.createPlayer =(request,response)=>{
    Player.create(request.body)
        .then((newPlayer)=>{
            response.status(201).json(newPlayer)
        })
        .catch((err)=>{
            response.status(400).json({err})
        })
}

module.exports.getOnePlayer =(req,res)=>{
    Player.findOne({_id: req.params.id})
    .then((onePlayer)=>{
        res.status(200).json(allPlayers)
    })
    .catch((err)=>{
        res.status(400).json({err})
    })
}

module.exports.getAllPlayers=(req,res)=>{
    Player.find()
    .then((allPlayers)=>{
        res.status(200).json(allPlayers)
    })
    .catch((err)=>{
        res.status(400).json({err})
    })
}

module.exports.updatePlayer=(req,res)=>{
    Player.findOneAndUpdate({_id:req.params.id},req.body,{
        new: true,
        runValidators: true
    })
    .then((updatedPlayer)=>{
        res.status(200).json(updatedPlayer)
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
}
module.exports.deletePlayer= (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            err.status(400).json(err);
    });
};