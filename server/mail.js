const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: '163',
    auth: {
        user: 'from email',
        pass: 'password for from email'
    }
});



// setup email data with unicode symbols
let mailOptions = {
    from: 'from email', // sender address
    to: 'to email', // list of receivers
    subject: '主题', // Subject line
    text: 'text', // plain text body
    html: '<b>Hello world ?</b>' // html body
};



exports.sendMail=function(to, subject="subject", message="message",errorCal,successCal){
  mailOptions.to=to
  mailOptions.subject=subject
  mailOptions.text=subject
	mailOptions.html=message


	transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //error
      console.log(error);
      if(errorCal){
        errorCal()
      }
    }else{
      //success
      console.log(info);
      if(successCal){
        successCal()
      }
    }
});
}
