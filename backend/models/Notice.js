const mongoose = require('mongoose');

const NoticeSchema = {
    notice:String
}

const Notice = mongoose.model('notices',NoticeSchema);

module.exports = Notice;