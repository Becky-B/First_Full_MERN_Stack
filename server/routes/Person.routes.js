const PersonController = require('../controllers/Person.controller');

module.export = function(app){
    app.get('/api', PersonController.index);
}