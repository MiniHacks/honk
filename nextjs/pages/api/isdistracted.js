import admin from '../../firebase/nodeApp'
const db = admin.firestore()

async function gettopics(user) {
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
    return arr
}

async function getPreviousVector(user) {
    let topics = await gettopics(user)

    let timestamp = -1;
    let vector = null
    topics.forEach(topic => {
        if(topic['timestamp'] > timestamp) {
            vector = topic['vector']
        }
    })

    return vector
}

async function addVector(user, vector) {
    return await db.collection('/users/'+user+'/topics').add({
        timestamp: Date.now(),
        vector: vector
    })
}

export default async function isdistracted(req, res) {
    let user = "c5KKbUvTRO77uXpdEA5Q" // req.body['user']
    let ele = {topic: "hi", header: "bye", content: "mary"} // req.body['element']

    let previous = await getPreviousVector(user)

    console.log("Request Contents:")
    console.log("Elements: " + ele)
    console.log("Previous: " + previous)
    // let response = await fetch("http://localhost/python/embeddings", {headers: {"Content-Type":"application/json"}, method: "POST", body: JSON.stringify({
    //     element: ele,
    //     previous: previous
    // })});

    // let data = response.json();
    let newVec = [0.2, 0.4, 0.01, 0.32222] // data['vector']
    let distracted = true // data['distracted']

    addVector(user, newVec);
    res.status(200).json({ distracted: distracted});
}
