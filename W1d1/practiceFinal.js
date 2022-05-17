const app=require('express')();
app.use((req, res,next)=>{
    console.log(`${req.url}`);
    next();
});
app.get('/test',(rerq,res,next)=>{
    res.send('ok');
});
var server = app.listen(5000,function(){
    console.log('Server is running ....');
});

