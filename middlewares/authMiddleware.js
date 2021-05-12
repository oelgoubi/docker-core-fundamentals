const protect = (req,res,next)=>{
    const { user } = req.session;
    console.log("this is user",user)
    if(!user){
        return res.status(401).json({
            status : 'fails',
            message: 'Unauthorized'
        })
    }
    // Attach the information of the user to the request
    req.user = user
    // Go to the next middleware in the stack
    next();
}

module.exports = protect