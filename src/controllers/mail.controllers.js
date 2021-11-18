const nodeMailer = require('nodemailer');


const sendMail  = async(req,res,next) => {
    const {name,email,telephone,message } = req.body
    contentHTML = `
        <h1>Informacion del mensaje</h1>
        <ul>
            <li>Nombre del contacto : ${name}</li>
            <li>Email del contacto : ${email}</li>
            <li>Telefono del contacto : ${telephone}</li>
        </ul>
        <p>${message}</p>    
    `;
    const transporter = nodeMailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT_MAIL,
        secure: false,
        auth:{
            user: process.env.USERNAME_MAIL,
            pass: process.env.PASSWORD
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    try {
        const info = await transporter.sendMail({
            from: '"user From the application" <aplicacionweb@insuofficesas.com>',
            to: 'comercial@insuofficesas.com',
            subject: 'Contacto desde la aplicacion WEB',
            html: contentHTML
        });
        res.status(200).json({
            status:'Mensaje Enviado',
            message: 'En breve nos comunicaremos contigo!',
        })
    } catch (error) {
        res.status(500).json({
            message: 'something went wrong'
        })
    }
};

module.exports = {
    sendMail
}