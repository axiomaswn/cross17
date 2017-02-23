const DataDate = require('../models/datadate');
module.exports = {
  create : function(req, res, next){
    DataDate.create({
      tanggal     : req.body.tanggal,
      frequency     : req.body.frequency
    }, function (err, data){
      res.send(data);
    })
  }
  ,

  find : function(req, res, next) {
    DataDate.find({}, function (err, data){
      res.send(data);
    })
  },

  multiSearch : function(req, res, next) {
    var tanggal = req.query.tanggal
    var freq = req.query.freq
    DataDate.find({ $and: [{tanggal:{ $regex: tanggal, $options: 'i' }},{frequency:{ $regex: freq, $options: 'i' }}] }, function (err, data){
      res.send(data);
    })
  },

  getData: function(req,res){
    DataDate.findOne({_id:req.params.id})
    .then(function(data){
      res.json(data)
    })
  },

  delete : function(req, res, next) {
    DataDate.remove({_id: req.params.id}, function (err, data){
        if (err) throw err
      res.send({message:`data dengan id ${req.params.id} berhasil dihapus`})
    })
  },

  update : function(req, res, next) {
    DataDate.findOneAndUpdate({_id: req.params.id},{
      tanggal     : req.body.tanggal,
      frequency     : req.body.frequency
    })
      .then(function(result){
        res.send(result)
      })
      .catch(function(err){
        res.json('error')
      })
  }
}
