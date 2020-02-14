const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://root:toor@phonebook-qppqo.mongodb.net/phonebook');

mongoose.Promise = global.Promise;

module.exports = mongoose;