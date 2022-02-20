import admin from '../../firebase/nodeApp'
const db = admin.firestore()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const msgSid = process.env.MESSAGE_SERVICE_SID;
const twilio = require('twilio')(accountSid, authToken);

async function getAlertNumber(user) {
    let doc = await db.collection('/users/').doc(user).get();
    let phone = doc.data()['alertPhone']
    return phone
}

async function getPersonalNumber(user) {
    let doc = await db.collection('/users/').doc(user).get();
    let phone = doc.data()['personalPhone']
    return phone
}

export default async function alertnumber(req, res) {
    let user = 'c5KKbUvTRO77uXpdEA5Q' // req.body['user']
    let alertPhone = await getAlertNumber(user)
    let personalPhone = await getPersonalNumber(user)

    let message = await twilio.messages.create({
        messagingServiceSid: msgSid,
        body: 'Your friend with the phone number ' + personalPhone + ' is being distracted while they are supposed to be getting work done. Why don\'t you encourage them to make better choices in their life?',
        to: alertPhone,
     })

    res.status(200).json({});
}