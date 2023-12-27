const nodemailer = require("nodemailer");

const mailSender = async (email, title,body) => {
    try{
        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth:{
                pass : process.env.MAIL_PASS,
                user : process.env.MAIL_USER,
            }

        })

        let info = await transporter.sendMail({
            from: 'SkillSpark ||  by SIDHANT',
            to:`${email}`,
            subject: `Mail by SkiilSpark Organization`,
            html: `${body}`,
        });
        console.log(info);
        return info;

    } catch(error) {
        // console.error(error);
        console.log(error.message);
    }
}

module.exports = mailSender;