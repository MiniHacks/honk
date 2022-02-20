// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from '../firebase/nodeApp'

export default function hello(req, res) {
    // https://github.com/vercel/next.js/blob/canary/examples/with-firebase/fetchData/getProfileData.js
    const db = admin.firestore()

    res.status(200).json({ name: "John Doe" });
}
