
const errorController = function(err,req,res,next){
return res.status(404).json({
  err
})
}

module.exports=errorController