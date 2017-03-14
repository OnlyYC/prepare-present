const express = require('express');



const router = express.Router();
const mail=require('./mail')



/**
 * present
 */
router.post('/present', function(req, res, next){
    const username = req.body.username;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const present = req.body.present;
    const address = req.body.address;


    console.log('username: '+username, ',email: '+email, ',phoneNumber:'+phoneNumber+',present:'+present+',address:'+address);

    //服务端验证字段
    req.checkBody('username', '用户名不能为空').notEmpty();
    //req.checkBody('username', 'sorry,你不是我的目标').equals('name');
    req.checkBody('email', '须为邮箱且不能为空').notEmpty().isEmail();
    req.checkBody('phoneNumber', '电话号码不能为空').notEmpty();
    req.checkBody('present', '礼物不能为空').notEmpty();
    req.checkBody('address', '地址不能为空').notEmpty();


    let errors=req.validationErrors(); console.log(errors);
    if(errors) return res.status(301).send(errors).end();


    //发送邮件
    //向提供方发提醒邮件
    var message2provider=`
    <div>
      <span>用户名:</span><span>${username}</span>
      <hr/>
      <span>邮箱:</span><span>${email}</span>
      <hr/>
      <span>电话号码:</span><span>${phoneNumber}</span>
      <hr/>
      <span>礼物:</span><span>${present}</span>
      <hr/>
      <span>地址:</span><span>${address}</span>
      <hr/>
    </div>
    `
    mail.sendMail(
      to='876714394@qq.com',
      subject="please prepare present for me",
      message=message2provider
    )



    //向申请方回复邮件
    mail.sendMail(
      to=email,
      subject="present",
      message='你的期待已传达'
    )

    res.status(200).send("success").end();

});




module.exports = router;
