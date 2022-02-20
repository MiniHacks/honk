import admin from '../../firebase/nodeApp'
const db = admin.firestore()

export default async function addtopics(req, res) {
    // https://github.com/vercel/next.js/blob/canary/examples/with-firebase/fetchData/getProfileData.js
    // let col = await db.collection('/users/c5KKbUvTRO77uXpdEA5Q/topics').get();
    // let arr = []
    // col.docs.forEach( doc => arr.push(doc.data()))
    res.status(200).json({ name: "hmm" });
}
