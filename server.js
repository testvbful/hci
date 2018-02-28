const express = require('express');
var bodyParser = require('body-parser');
const animalData = require('./models/animalModel');
const locationData = require('./models/locationModel');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
mongoose.connect('mongodb://ana123:ana12345@ds239368.mlab.com:39368/nwt');
 mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// app.get('/api/hello', (req, res) => {
//   animalData.find().exec(function(err, doc){
//     if(err){
//       console.log("error!!");
//     }
//     else{
//       //console.log("animals iz baze", doc);
//     }
//   });

//   animalData.findOne({name: 'Boni'}).populate('location').exec(function(err, animal){
//     console.log("podaci za Bonijevu lokaciju", animal.location);
//   });

//   res.send({ express: 'Hello From Express' });
// });

app.get('/getAllAnimals', (req, res) => {
  animalData.find().populate('location').exec(function(err, doc){
    if(err){
      console.log("error!!");
    }
    else{
      res.send({ express: doc });
    }
  });
});

app.post('/newAnimal', function(req, res, next) {
    
    //console.log("test", req.body.data.location.name);

    let item= {};
    item['name'] = req.body.data.name;
    item['type']= req.body.data.type;
    item['gender']= req.body.data.gender;
    item['age'] = req.body.data.age;
    item['image']= req.body.data.image;
    item['description']= req.body.data.description;
    item['breed'] = req.body.data.breed;
    item['health']= 'Healthy';
    item['timeInAzil']= '0 days';
    if(item.age < 3)
    {
      item['ageRange']= '0-2';
    }
    else
    {
      item['ageRange']= '2-6';
    }

    locationData.findOne({name: req.body.data.location.name}, function(err, location){
      //console.log("lokacija je", location);
      item['location']=location._id;
      let data = new animalData(item);
      data.save(function(err){
        if (err) {
            var error= 'something bad happened when saving animal! please try again.';
        }
        else{
           console.log("Nova zivotinja je spremljena")
           //console.log(data);
        }
      });
    });

});
app.post('/deleteAnimal', function(req, res, next){
  //console.log("id je", req.body.id);
  //console.log("name", req.body.name);    
  if(!!req.body.id){
      animalData.findOne({_id: req.body.id}, (function(err, animal){
        animal.remove();
      }));
  }
  else{
      animalData.findOne({name: req.body.name}, (function(err, animal){
        animal.remove();
      }));
  }
  
})

app.listen(port, () => console.log(`Listening on port ${port}`));

