import admin from '../../firebase/nodeApp'
const db = admin.firestore()

async function getTopicsTime(user) {
    let col = await db.collection('/users/'+user+'/topics').get();
    let topics = {}
    const TO_ADD = 30 // Assuming a thirty second polling rate. TODO: Verify this.
    col.docs.forEach( doc => {
        doc.data()['topics'].forEach(topic => {
            if(topic in topics) {
                topics[topic] += TO_ADD
            } else {
                topics[topic] = TO_ADD
            }
        })
    });
    return topics
}

export default async function gettopicsstudytime(req, res) {
    let user = "c5KKbUvTRO77uXpdEA5Q" // req.body['user']
    let topics = await getTopicsTime(user)
    res.status(200).json({times_in_seconds: topics});
}