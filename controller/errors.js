exports.get404Page= (req,res)=> {
    //res.status(404).sendFile(path.join(__dirname,'views','/404.html'))
    res.status(404).render('error/404' ,{title:'404 Not Found',path:'/error/404'});
}