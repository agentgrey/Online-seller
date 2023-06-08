/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/


/** ------------------ EXPORTING FUNCTION To open home page ------------------ **/
module.exports.home = function(req, res){
    try {
        return res.render('home', {
            title : 'Online Seller'
        })
    } catch (error) {
        console.log("Error in homeController/home", error);
        return;
    }
}