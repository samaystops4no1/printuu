const config = require("./../config.js");
const uploadFile = require("./fileUploader/upload.js");
const submitFeedback = require("./feedback/submitFeedback.js");
const printFile = require("./printService/print.js");

module.exports = function (app,dirname) {

    /* Routes to serve HTML files */
    app.get("/", function (req, res) {
        console.log(req.method + " request received at " + req.url);
        res.sendFile(dirname + '/public/html/index.html');
    });
    app.get("/printme", function (req, res) {
        console.log(req.method + " request received at " + req.url);
        res.sendFile(dirname + '/public/html/getprint.html');
    });
    app.get("/faq", function (req, res) {
        console.log(req.method + " request received at " + req.url);
        res.sendFile(dirname + '/public/html/faq.html');
    });
    app.get("/feedback", function (req, res) {
        console.log(req.method + " request received at " + req.url);
        res.sendFile(dirname + '/public/html/feedback.html');
    });

    /* Routes for backend */
    app.post("/todest", uploadFile);
    app.post("/sendprint",printFile);
    app.post("/feedback",submitFeedback);
}