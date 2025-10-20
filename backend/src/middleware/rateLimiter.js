import rateLimit from "../Config/upstash.js";

//update
const ratelimiter = async (req, res, next) => {
try {
    const { success } = await rateLimit.limit(req.ip);
    if (!success) {
        return res.status(429).json({ message: "Too many requests" });
    }
    next();
} catch (error) {
    return res.status(500).json({ message: error.message });
}

};


export default ratelimiter;