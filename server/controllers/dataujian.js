const DataUjian = require('../models/dataujian');
module.exports = {
  create : function(req, res, next){
    DataUjian.create({
      letter     : req.body.letter,
      frequency     : req.body.frequency
    }, function (err, data){
      res.send(data);
    })
  }
  ,

  find : function(req, res, next) {
    DataUjian.find({}, function (err, data){
      res.send(data);
    })
  },

  multiSearch : function(req, res, next) {
    var letter = req.query.letter
    var freq = req.query.freq
    DataUjian.find({ $and: [{letter:{ $regex: letter, $options: 'i' }},{frequency:{ $regex: freq, $options: 'i' }}] }, function (err, data){
      res.send(data);
    })
  },

  getData: function(req,res){
    House.findOne({_id:req.params.id})
    .then(function(data){
      res.json(data)
    })
  },

  delete : function(req, res, next) {
    DataUjian.remove({_id: req.params.id}, function (err, data){
        if (err) throw err
      res.send({message:`data dengan id ${req.params.id} berhasil dihapus`})
    })
  },

  update : function(req, res, next) {
    DataUjian.findOneAndUpdate({_id: req.params.id},{
      letter     : req.body.letter,
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
