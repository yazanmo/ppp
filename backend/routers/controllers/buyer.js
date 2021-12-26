const buyerModel = require("../../db/models/buyer");

const createNewBuyer = (req, res) => {
    const {
        name,
        price,
        description,
        email,
        password,
        role,
      } = req.body;
    
      const buyer = new buyerModel({
        name,
        price,
        description,
        email,
        password,
        role,
      });
    
      buyer
        .save()
        .then(async (result) => {
    
          res.status(201).json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };

    const getAllBuyer = (req, res) => {
        buyerModel.find({}).then((result) => {
        res.status(200)
        res.json(result)
      }).catch((err) => {
        res.status(404)
        res.send(err)
      })
    
    }


    const getBuyerByName = (req, res) => {
      const name = req.query.name;
      if (!name) return res.status(404).json('not found');
    
      buyerModel
        .find({ name })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }



    module.exports = {
        createNewBuyer,getAllBuyer,getBuyerByName
        
      };