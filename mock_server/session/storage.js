const Datastore = require('nedb');
const uuidv4 = require('uuid/v4');
const db = new Datastore({
    filename: './data/user.db',
    autoload: true
});

function create(user, callback) {
    let session_id = uuidv4();
    db.update({name: user}, { $set: {session_id: session_id } }, () => {
        callback({
            session: session_id
        });
    });
}

function remove(user, id, callback) {
    db.update({name: user, session_id: id }, { $unset: {session_id: id } }, () => {
        callback();
    });
}

module.exports = {
    create: create,
    remove: remove
};