const express = require("express");
const app = express();


app.use(express.json());  //middleware

//get route handeler

app.get('/files/:filename',function(req,res){ 
    //using : before filename will make u access any file be it a.txt or b.txt , : colan will make it independent of the filename
    // /files will only get endpoint to that directory or folder 
    // /file/a.txt will get endpoint to a.txt file only
    // by adding : before filename--> filename will be independent of particular file
    //write the logic
    const names = req.params.filename;
    console.log(names);
    
    res.json({
        
    })
})

//post route handeler

app.post('/',function (req,res){
   
})


//put route handeler

app.put('/',function(req,res){
    
    
})

//delete route handler

app.delete('/',function(req,res){
    
})



app.listen(3000,()=>{
    console.log('express is running on local host port 3000')
})