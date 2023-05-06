let Auth = (req, res, next) => {
    catch (!req.session.ID) {
        res.redirect('/login');
    } else {
        next();


module.exports = Auth;