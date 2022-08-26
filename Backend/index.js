const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// connect to database 
const url = "mongodb+srv://dando1:dando123@cluster0.ygvjrkk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(() => {
    console.log("connected succcessfully");
}).catch((err) => {
    console.error("failed to connect")
});



// data scchema 

const itemSchema = {
    adhar:String,
    title: String,
    description: String
}

// data model 
const Item = mongoose.model("Item", itemSchema);

// READ route


app.use('/items', (req, res) => {
    Item.find()
        .then((items) => {
            res.json(items)
        }).catch((err) => {
            res.status(404).json("error" + err)
        });
})


// create route
app.post('/newitem', (req, res) => {
    const newItem = new Item(
        {   adhar:req.body.adhar,
            title: req.body.title,
            description: req.body.description
        }
    );
    newItem.save()
        .then((item) => {
            console.log(item);
        }).catch((err) => {
            console.error("error :" + err)
        });
})



app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
        if (!err) {
            console.log("Item deleted");
        } else {
            console.log(err);
        }
    });
});



app.put("/put/:id", (req, res) => {
    const updatedItem = {
        adhar:req.body.adhar,
        title: req.body.title,
        description: req.body.description,
    };

    Item.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedItem },
        (req, res, err) => {
            if (!err) {
                console.log("Item updated");
            } else {
                console.log(err);
            }
        }
    );
});

app.listen(port, function () {
    console.log(`server is running on ${port}`);
})