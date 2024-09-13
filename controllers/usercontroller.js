const users = require('../user.json');
function getAllUsers(req, res) {
    try {
res.json(users);
    } catch(err) {

    }
}
module.exports = {
    getAllUsers
}