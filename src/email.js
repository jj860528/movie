var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'guiqiuhaoyong@gmail.com',
        pass: 'asdfsdaf8985afsd'
    }
});

var mailOptions = {
    from: 'guiqiuhaoyong@gmail.com', // sender address
    to: 'jj860528@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});