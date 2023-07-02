
class Details {
} 

Details.prototype.getDetails = (req,res) => 
 res.send({'success':true,'message':'Details fetched successfully',Details})

 
Details.prototype.getDetailsByCustomId = (req,res) =>
 res.send({'success':true,'message':'Details fetched successfully',id:req.body.id})


Details.prototype.addDetails = (req,res) => 
 res.send({'success':true,'message':'Details fetched successfully',id:req.body.id, name: req.body.name , address: req.body.address})




module.exports = Details;
