import { Button, CircularProgress, Divider, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import ReactPDF, { PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import { useDebounceCallback } from '@react-pdf-viewer/core';
import axios from 'axios';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});
const weeks = [
    {
        name: 'tuần 1',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
            { name: 'bài 4', url: '' },
            { name: 'bài 5', url: '' },
            { name: 'bài 6', url: '' },
            { name: 'bài 7', url: '' },
            { name: 'bài 8', url: '' },
            { name: 'bài 9', url: '' },
            { name: 'bài 10', url: '' },
            { name: 'bài 11', url: '' },
            { name: 'bài 12', url: '' },
            { name: 'bài 13', url: '' },
            { name: 'bài 14', url: '' },
        ],
        pdf: './tuan1.pdf',
    },
    {
        name: 'tuần 2',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
            { name: 'bài 4', url: '' },
            { name: 'bài 5', url: '' },
            { name: 'bài 6', url: '' },
            { name: 'bài 7', url: '' },
        ],
        pdf: './tuan2.pdf',
    },
    {
        name: 'tuần 3',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
            { name: 'bài 4', url: '' },
            { name: 'bài 5', url: '' },
            { name: 'bài 6', url: '' },
            { name: 'bài 7', url: '' },
            { name: 'bài 8', url: '' },
            { name: 'bài 9', url: '' },
        ],
        pdf: './tuan3.pdf',
    },
    {
        name: 'tuần 4',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
            { name: 'bài 4', url: '' },
        ],
        pdf: './tuan4.pdf',
    },
    {
        name: 'tuần 5',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
            { name: 'bài 4', url: '' },
        ],
        pdf: './tuan5.pdf',
    },
    {
        name: 'tuần 6',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
            { name: 'bài 3', url: '' },
        ],
        pdf: './tuan6.pdf',
    },
    {
        name: 'tuần 7',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
        ],
    },
    {
        name: 'tuần 8',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
        ],
    },
];
function App() {
    const [week, setWeek] = useState(weeks[0]);
    const [question, setQuestion] = useState({});
    const [baocao, setBaocao] = useState();
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const handleClick = () => {
        if (week && question.name == 'báo cáo') {
            setBaocao(week.pdf);
            setClicked(true);
        } else if (question && question.name != 'báo cáo') {
            setBaocao('./' + week.name + '/' + question.name + '.txt');
            setClicked2(true);
        }
    };

    const pdfPath = './pdf1.pdf';
    const handleChange = (e) => {
        setWeek(e.target.value);
        setQuestion('');
        setClicked(false);
        setClicked2(false);
    };

    const handleChange2 = (e) => {
        setQuestion(e.target.value);
        setClicked2(false);
    };
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState('');
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        show();
    }, [baocao]);
    const show = () => {
        setLoading(true);
        axios
            .get(baocao)
            .then((response) => {
                // response.data chứa nội dung của tệp .txt
                console.log('Nội dung tệp:', response.data);
                setFile(response.data);
            })
            .catch((error) => {
                console.error('Có lỗi xảy ra:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div>
            <Grid container paddingLeft="100px">
                <Grid item xs={12}>
                    <Typography variant="h2">Báo cáo tuần 1-8 môn project 1</Typography>
                    <Typography variant="h5" color="#a37152">
                        Mai Minh Hoàng-20215381
                    </Typography>
                </Grid>

                <Grid item container marginTop="100px" display="flex" alignItems="center">
                    <Grid item xs={2}>
                        <Typography variant="h5">Chọn tuần</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <InputLabel id="week">Tuần</InputLabel>
                        <Select labelId="week" onChange={handleChange} value={week} sx={{ minWidth: 120 }}>
                            {weeks.map((item, index) => {
                                return (
                                    <MenuItem value={item} key={index}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Grid>
                </Grid>
                <Grid item container display="flex" alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="h5">Chọn bài</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <InputLabel id="quesiton">Bài</InputLabel>
                        <Select labelId="question" onChange={handleChange2} value={question} sx={{ minWidth: 120 }}>
                            {week.children.map((item, index) => {
                                return (
                                    <MenuItem value={item} key={index}>
                                        {item.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleClick}>
                        Xem
                    </Button>
                </Grid>

                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <div style={{ border: '1px solid #333', height: '0px', width: '800px' }} />
                    {week && question.name == 'báo cáo' && clicked ? (
                        <Fragment>
                            <div
                                style={{
                                    width: '800px',
                                    height: '750px',
                                    overflow: 'auto',
                                    borderLeft: '1px solid #ccc',
                                }}
                            >
                                <Document file={baocao} onLoadSuccess={onDocumentLoadSuccess}>
                                    {Array.from(new Array(numPages), (el, index) => {
                                        return (
                                            <Page
                                                renderAnnotationLayer={false}
                                                renderTextLayer={false}
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                            />
                                        );
                                    })}
                                </Document>
                            </div>
                        </Fragment>
                    ) : question && question.name != 'báo cáo' && clicked2 ? (
                        <div>
                            <pre>{file}</pre>
                        </div>
                    ) : loading ? (
                        <CircularProgress />
                    ) : (
                        ''
                    )}

                    <div style={{ border: '1px solid #333', height: '0px', width: '800px' }} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
