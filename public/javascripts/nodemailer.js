'use strict';

var nodemailer = require('nodemailer');

var sendMail = (email)=>{



// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
            user: 'backupsachin1@gmail.com', // generated ethereal user
            pass: '9041055490'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Ekart Order Confimation" <backupsachin1@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Your Order has been confirmed', // Subject line
        text: 'Your Book will be deliverd within 7 business days!!!! Thank You for purchasing with us', // plain text body
        html: `<h3>Hello ${email} thank you for shopping wih us` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

};

module.exports.sendMail = sendMail;