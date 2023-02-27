const detailsModel = require("./detailsModel");

class Details {

} 


Details.prototype.getDetails = (req,res) => {
    detailsModel.find({},(err,Details) => {
        if(err){
            res.send(err);
        }else{
            console.log("result Detailss", Details); 
            res.send({'success':true,'message':'Detailss fetched successfully',Details});
        }
    })
}

Details.prototype.getDetailsById = (req,res) => {
    let id = req.params.id;
    detailsModel.findById(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Details.prototype.getDetailsByCustomId = (req,res) => {
    let id = req.body.id;
    detailsModel.findOne({DetailsId : id},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Details fetched successfully',result});
        }
    })
}

Details.prototype.addDetails = (req,res) => {
    let obj = req.body;
    console.log("obj ", obj);
    let model = new detailsModel(obj);
    console.log("model ", model);
    model.save((err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send({'success':true,'message':'Details fetched successfully',result});
        }
    })
}

Details.prototype.updateDetailsById = (req,res) => {
    let id = req.body._id;
    detailsModel.findByIdAndUpdate(id,{ firstName : req.body.firstName, lastName : req.body.lastName, address: req.body.address},(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

Details.prototype.deleteDetailsById = (req,res) => {
    let id = req.body._id;
    console.log("delete Details ", req.body);
    detailsModel.findByIdAndRemove(id,(err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}


module.exports = Details;
