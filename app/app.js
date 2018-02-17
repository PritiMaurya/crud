const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const {mongoose} = require('./db/mongoose-connect');
const {Student} = require('./model/student');
const cors = require('cors');

const app = express();
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post('/insert',(req,res)=>{
    var newdata = new Student({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        city: req.body.city
    });

    newdata.save().then((data)=>{
       res.send(data);
    })
});


app.get('/select',(req,res)=>{
    //use limit
    // Student.find({status:true}).limit(2).then((data)=>{
    //     res.send(data);
    // });

    //display sort data fname wise
    Student.find({status:true}).sort({"fname":1}).then((data)=>{
        res.send(data);
    });

});



app.post('/update',(req,res)=>{
    // console.log('update Method');
    // console.log(req.body);
    var id = req.body.id;
    var data = {fname:req.body.fname,
        lname:req.body.lname,
        password:req.body.password,
        state:req.body.state,
        city:req.body.city,
        status:true}
    Student.findByIdAndUpdate(id,{$set: data}).then(
        (doc)=>{
            if(!doc){
                return res.status(404).send();
            }
            res.send(doc)
        }
    ).catch((e)=>{
        return res.status(404).send()
    });
});


app.post('/delete',(req,res)=>{
    var id = req.body.id;
    var data = {status:true}
    Student.findByIdAndUpdate(id,{$set: data},{new:true}).then(
        (doc)=>{
            if(!doc){
                return res.status(404).send();
            }
            res.send(doc)
        }
    ).catch((e)=>{
        return res.status(404).send()
    });
});




app.post('/find',(req,res)=>{
    var id = req.body.id;
    Student.findOne({_id:id}).then((data)=>{
        res.send(data);
        // console.log(data);
    },(err)=>{
        res.send("data not found");
    });
});

app.listen(3001,()=>{
    console.log('running port 3001')
});
