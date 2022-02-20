import admin from '../../firebase/nodeApp'
const db = admin.firestore()

export default async function gettopics(req, res) {
    let user = "c5KKbUvTRO77uXpdEA5Q" // req.body['user']
    let col = await db.collection('/users/'+user+'/topics').get();
    let arr = []
    let time = new Date()
    col.docs.forEach( doc => {
        
        // 5 minutes in miliseconds.
        if(time - doc.data()['timestamp'] > 1000 * 60 * 5) {
            doc.ref.delete()
            console.log("deleted")
        } else {
            arr.push(doc.data())
        }
    });
    res.status(200).json({ topics: arr });
}
