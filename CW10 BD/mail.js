//Chunk 3

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key:'16dee032a490241b7fb959c4e20adb75-77751bfc-295b3de1',
        domain: 'sandbox0a73f751933b4216a545f86c177f1c91.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4
const sendMail = (email, name, text, cb) => {
    const mailOptions = {
            from: email,
            to: 'scott.dennis@younglings.africa',
            name,
            text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err,null);
        } else {
            cb(null,data);
        }

    });

}


module.exports = sendMail;