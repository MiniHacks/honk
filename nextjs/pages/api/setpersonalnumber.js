import admin from '../../firebase/nodeApp'
const db = admin.firestore()

export default async function setpersonalnumber(req, res) {
    let user = 'c5KKbUvTRO77uXpdEA5Q' // req.body['user']
    let number = '9526669929' // req.body['number']

    db.collection('/users/').doc(user).set({
        personalPhone: number
    }, {merge: true})

    res.status(200).json({});
}