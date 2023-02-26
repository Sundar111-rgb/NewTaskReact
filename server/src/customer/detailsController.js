class Details {

} 


Details.prototype.id = (req,res) => {
    res.send(req.params.id);
}

Details.prototype.name = (req,res) => {
    res.send(req.params.name);
}

Details.prototype.address = (req,res) => {
     res.send(req.params.address);
}

module.exports = Details;