const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());


const session = require('express-session');
const MySQLstore = require('express-mysql-session')(session);
const db = require(__dirname+'/db_connect2');
const router = express.Router(); 

const sessionStore = new MySQLstore({},db);


// app.get('/test', async (req,res)=>{
//     const sql = "SELECT * FROM `test_book`";
//     const [r]= await db.query(sql)
    
//     res.json(r)
// });

app.get("/",function(request,response){
    //response.render("main",{name:"Weisung"});
    response.render("main");
    //response.send("<h2>Hello Express Success</h2>");
    //response.end("<h2>Hello Express Success</h2>");
});
app.get("/lookbook",function(request,response){
    response.render("lookbook");
})
app.get("/onlineshop",function(request,response){
    response.render("onlineshop");
})
app.get("/store_info",function(request,response){
    response.render("store_info");
})
app.get("/login",function(request,response){
    response.render("login");
});
app.post("/login", async function(request,response){
    const output = {
        success: false,
        body: request.body
    };
    const sql="INSERT INTO `test_book` SET ?"
    const [r] = await db.query(sql,[request.body])
    

    if(r.affectedRows===1 && r.insertId) {
        output.success = true;
    }
    response.json(output);
});

app.get("/try-post-form",function(request,response){
    response.render("try-post-form");
})
app.post("try-post-form" ,function(request,response){
    response.render("try-post-form",request.body);
    //response.json(request.body);
})

app.get("/try-qs",function(request,response){
    response.json(request.query);
})


//const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.static('public'));

//app.use('/address-book', require(__dirname+'/routes/address-book'));














app.use(express.static('public'));

app.use(function(request,response){
    response.status(404).send("<h2>找不到頁面</h2>");    
});
app.listen(3000,function(){
    console.log("Server Started");
});