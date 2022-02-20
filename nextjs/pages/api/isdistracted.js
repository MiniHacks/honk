import admin from '../../firebase/nodeApp'
const db = admin.firestore()

async function getVectors(user) {
    let col = await db.collection('/users/'+user+'/vectors').get();
    let arr = []
    let time = new Date()
    col.docs.forEach( doc => {

        // 5 minutes in miliseconds.
        if(time - doc.data()['timestamp'] > 1000 * 60 * 5) {
            // doc.ref.delete()
            // console.log("deleted")
        } else {
            arr.push(doc.data())
        }
    });
    return arr
}

async function getPreviousVector(user) {
    let topics = await getVectors(user)

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
    return await db.collection('/users/'+user+'/vectors').add({
        timestamp: Date.now(),
        vector: vector
    })
}

async function addTopics(user, topics) {
    return await db.collection('/users/'+user+'/topics').add({
        timestamp: Date.now(),
        topics: topics
    })
}

export default async function isdistracted(req, res) {
    let user = "c5KKbUvTRO77uXpdEA5Q" // req.body['user']
    console.log(Object.keys(req));
    console.log(req.body)
    let ele = JSON.parse(req.body)
    let previous = JSON.stringify(await getPreviousVector(user))

    console.log("Request Contents:")
    // console.log("Elements: ", ele);
    // console.log("Previous: ",  previous)
    let response = await fetch("http://localhost:5001/python/embeddings", {headers: {"Content-Type":"application/json"}, method: "POST", body: JSON.stringify({
        element: ele,
        previous_embedding_string: previous
    })});

    let data = await response.json();
    let newVec = data['embed_string']
    let distracted = !data['focused']
    let topics = data['keywords']

    await addTopics(user, topics);
    await addVector(user, newVec);
    if (distracted) {
        data['distracted_by'] = topics[0]
    }
    console.log(Object.keys(data));
    res.status(200).json({distracted_by: data['distracted_by']});
}
