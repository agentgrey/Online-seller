/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/


/** ------------------ EXPORTING FUNCTION To open sign In page ------------------ **/
module.exports.signIn = function(req, res){
    try {
        return res.render('signIn', {
            title : 'Sign In'
        })
    } catch (error) {
        console.log("Error in userController/signIn", error);
        return;
    }
}
/** ------------------ EXPORTING FUNCTION To open sign Up page ------------------ **/
module.exports.signUp = function(req, res){
    try {
        return res.render('signUp', {
            title : 'Sign Up'
        })
    } catch (error) {
        console.log("Error in userController/signUp", error);
        return;
    }
}