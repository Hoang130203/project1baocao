import { Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
function Complier({ tuan, bai, input, language }) {
    const [pageContent, setPageContent] = useState('');
    const [file, setFile] = useState();
    const [error, setError] = useState('');
    const fetchData = async () => {
        try {
            const fileResponse = await axios.get(
                'https://raw.githubusercontent.com/Hoang130203/projectcnpm/main/public/' + tuan + '/' + bai + '.txt',
            );
            const fileData = fileResponse.data;
            console.log(fileData);
            setFile(fileData);
            const postData = {
                fileData: fileData, // Dữ liệu bạn muốn gửi lên server, ví dụ: fileData
                input: input,
                language: language,
            };
            var qs = require('qs');
            var data = qs.stringify({
                code: fileData,
                language: language,
                input: input,
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
                    setPageContent(response.data.output);
                    setError(response.data.error);
                    console.log(postData);
                    // res.send(postData);
                })
                .catch(function (error) {
                    console.log(error);
                });
            /*          const response = await axios.post('http://localhost:3001/do-something', postData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json', // Loại dữ liệu bạn gửi đi là JSON
                },
            });
*/
            //     const data = await response.data;
            //     console.log(data); // Dữ liệu hoặc phản hồi từ máy chủ
            //     setPageContent(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Grid container item xs={12} display="flex" flexDirection="row">
            <Grid item container paddingRight="3px" paddingTop="30px" xs={12} md={2} justifyContent="center">
                <Grid item>
                    <Button onClick={fetchData} variant="contained">
                        Run
                    </Button>
                </Grid>
            </Grid>
            <Grid item container display="flex" flexDirection="column" xs={12} md={10}>
                <Grid item>
                    <Typography variant="h5">Output</Typography>
                </Grid>
                <Grid
                    item
                    container
                    style={{
                        minHeight: '200px',
                        maxHeight: '500px',
                        flex: '1',
                        maxWidth: '90%',
                        border: '2px solid #333',
                        paddingTop: '10px',
                    }}
                    display="flex"
                    flexDirection="row"
                >
                    <Grid style={{ color: 'brown', textAlign: 'center' }} xs={12}>
                        Mai Minh Hoàng- 20215381
                    </Grid>
                    <Grid
                        style={{
                            overflow: 'auto',
                            maxHeight: '500px',
                            fontSize: '15px',
                            maxWidth: '100%',
                            minHeight: '90%',
                        }}
                        padding="10px 20px"
                        xs={12}
                        overflow="hidden"
                    >
                        <pre>{pageContent}</pre>
                        <pre style={{ color: 'red' }}>{error}</pre>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Complier;
