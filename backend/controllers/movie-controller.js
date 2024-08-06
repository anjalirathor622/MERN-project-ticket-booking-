//IMPORT AREA

//Add Movies 
const  addMovies = async (req, res, next) => {
    //extracting token
    //console.log(req.headers.authorization)
    const extractedToken = req.headers.authorization;

    //token validation
    if (!extractedToken && extractedToken === ""){
        return res.status(404).json({message: "unathourized"})
    };
    console.log (extractedToken, typeof extractedToken)

}

//export area
export {addMovies};