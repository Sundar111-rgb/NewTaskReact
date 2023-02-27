const detailsModel = require("./detailsModel");

class Details {
} 

Details.prototype.getDetails = (req,res) => 
detailsModel
            .find({},(err,Details) => err ? res.send(err) : res.send({'success':true,'message':'Details fetched successfully',Details}))


Details.prototype.getDetailsByCustomId = (req,res) =>
detailsModel
            .findOne({id:req.body.id},(err,result) => err ? res.send(err) : res.send({'success':true,'message':'Details fetched successfully',result}))


Details.prototype.addDetails = (req,res) => 
new detailsModel(req.body)
                          .save((err,result)=> err ? res.send(err): res.send({'success':true,'message':'Details fetched successfully',result}))


Details.prototype.updateDetailsById = (req,res) => 
    detailsModel
    .findByIdAndUpdate(req.body._id,{ firstName : req.body.firstName, lastName : req.body.lastName, address: req.body.address},(err,result) => err ? res.send(err) : res.send(result))


Details.prototype.deleteDetailsById = (req,res) => 
    detailsModel
    .findByIdAndRemove(req.body._id,(err,result) => err ? res.send(err) : res.send(result))



module.exports = Details;
