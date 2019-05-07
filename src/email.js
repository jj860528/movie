const email = require('emailjs')
var server = email.server.connect({
    user: "jj860528_gmail_com", // 开启POP3/SMTP服务的邮箱
    password: "user_gM05wJszt7OtrtFgQHnu1", // 授权码填在这里
    host: "smtp.qq.com", // 这里以QQ邮箱为例
    ssl: true, // 开启SSL
})
server.send({
    text:    "i hope this works",
    from:    "jj860528_gmail_com",
    to:      "jj860528_gmail_com",
    subject: "testing emailjs"
    }, function(err, message) { console.log(err || message); });