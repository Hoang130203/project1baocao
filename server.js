const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
const puppeteer = require('puppeteer');
const { default: axios } = require('axios');
const app = express();

// Thiết lập CORS cho tất cả các routes
app.use(cors());

app.use(bodyParser.json());
// Các routes của bạn
app.post('/do-something', async (req, res) => {
    try {
        const postData = req.body.fileData;
        const inputData = req.body.input;
        const replacedString = postData.replace(/\\\\n/g, '\\n');
        const replacedString2 = inputData.replace(/\\\\n/g, '\\n');
        const langue = req.body.language;

        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            code: replacedString,
            language: langue,
            input: inputData,
        });
        var config = {
            method: 'post',
            url: 'https://api.codex.jaagrav.in',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                res.send(response.data.output);
                console.log(postData);
                // res.send(postData);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
