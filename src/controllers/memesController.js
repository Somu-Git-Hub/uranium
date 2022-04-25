const axios = require("axios");

let getAllMemes = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true });
    }
    catch (err) {
        res.status(500).send({ msg: err.message });
    }
}



let getMemes = async function (req, res) {
    let id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let pass = req.query.password;
    try {
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${pass}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true });
    }
    catch (err) {
        res.status(500).send({ msg: err.message });
    }
}



module.exports.getAllMemes = getAllMemes;
module.exports.getMemes = getMemes;