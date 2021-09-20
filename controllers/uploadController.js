exports.upload = async(req, res) => {
    try {
        response.send("ok");
    } catch (err) {
        res.json({ msg: err.message });
    }
};