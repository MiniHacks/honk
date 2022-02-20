// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello(req, res) {
    // https://github.com/vercel/next.js/blob/canary/examples/with-firebase/fetchData/getProfileData.js
    res.status(200).json({ name: "John Doe" });
}

