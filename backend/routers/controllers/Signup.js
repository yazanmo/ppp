const usersModel = require("../../db/models/user");
const scheduleModel = require("../../db/models/schedule");


const createNewUser = (req, res) => {
    const {
        firstName,
        lastName,
        // phoneNumber,
        email,
        password,
        role,
      } = req.body;
    
      const user = new usersModel({
        firstName,
        lastName,
        // phoneNumber,
        email,
        password,
        role,
      });
    
      user
        .save()
        .then(async (result) => {
          // const sch = new scheduleModel({
          //   user: result._id,
          // });
          // const aaaaa = await sch.save();
    
          res.status(201).json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    };


module.exports = {
    createNewUser
    
  };