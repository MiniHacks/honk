import admin from '../../firebase/nodeApp'
const db = admin.firestore()

async function getTotalTime(user) {
    let col = await db.collection('/users/'+user+'/topics').get();
    const TO_ADD = 30 // Assuming a thirty second polling rate. TODO: Verify this.
    return col.docs.length * TO_ADD
}

export default async function gettotalstudytime(req, res) {
    let user = "c5KKbUvTRO77uXpdEA5Q" // req.body['user']
    let total = await getTotalTime(user)
    res.status(200).json({study_time_in_seconds: total});
}