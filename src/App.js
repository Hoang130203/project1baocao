import {
    Button,
    CircularProgress,
    Collapse,
    Divider,
    Grid,
    InputLabel,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Fragment, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import ReactPDF, { PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import { useDebounceCallback } from '@react-pdf-viewer/core';
import axios from 'axios';
import { Prism as SyntaxHightlighter } from 'react-syntax-highlighter';
import Complier from './Complier';
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
        pdf: './tuan7.pdf',
    },
    {
        name: 'tuần 8',
        children: [
            { name: 'báo cáo', url: '' },
            { name: 'bài 1', url: '' },
            { name: 'bài 2', url: '' },
        ],
        pdf: './tuan8.pdf',
    },
];
function App() {
    const [language, setLanguage] = useState('cpp');
    const [input, setInput] = useState('');
    const [divWidth, setDivWidth] = useState(null);
    const [contentDebai, setContentDebai] = useState('');
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
            setDebai('./debai/' + week.name + '/' + question.name + '.txt');
            setClicked2(true);
        }
    };

    const pdfPath = './pdf1.pdf';
    const handleChange = (e) => {
        setWeek(e.target.value);
        setQuestion('');
        setContentDebai('');
        setOpen(false);
        setClicked(false);
        setClicked2(false);
    };

    const handleChange2 = (e) => {
        setQuestion(e.target.value);
        setOpen(false);
        setContentDebai('');
        setClicked2(false);
    };
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState('');
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const [loading, setLoading] = useState(false);
    const [debai, setDebai] = useState('');
    useEffect(() => {
        if (question && question.name != 'báo cáo') {
            show();
        }
    }, [baocao]);

    const show = () => {
        setLoading(true);
        axios
            .get(baocao)
            .then((response) => {
                // response.data chứa nội dung của tệp .txt
                //   console.log('Nội dung tệp:', response.data);
                setFile(response.data);
            })
            .catch((error) => {
                console.error('Có lỗi xảy ra:', error);
            })
            .finally(() => {
                setLoading(false);
            });
        axios
            .get(debai)
            .then((response) => {
                // response.data chứa nội dung của tệp .txt
                //   console.log('Nội dung tệp:', response.data);
                setContentDebai(response.data);
            })
            .catch((error) => {
                console.error('Có lỗi xảy ra:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const [open, setOpen] = useState(false);

    const handleClick2 = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Grid container>
                <Grid item container xs={12} justifyContent="center">
                    <Grid item>
                        <Typography variant="h2">Báo cáo &nbsp;</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2">tuần 1-8 &nbsp;</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2">môn project 1</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="h5" color="#a37152">
                            Mai Minh Hoàng-20215381
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    xs={12}
                    marginTop="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={5} sm={4} md={2}>
                        <Typography variant="h5">Chọn tuần</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={6}>
                        <InputLabel id="week">Tuần</InputLabel>
                        <Select labelId="week" onChange={handleChange} value={week} sx={{ minWidth: 170 }}>
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
                <Grid item container display="flex" alignItems="center" xs={12} justifyContent="center">
                    <Grid item xs={5} sm={4} md={2}>
                        <Typography variant="h5">Chọn bài</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={6}>
                        <InputLabel id="quesiton">Bài</InputLabel>
                        <Select labelId="question" onChange={handleChange2} value={question} sx={{ minWidth: 170 }}>
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
                <Grid item container justifyContent="flex-start" alignItems="center" padding="20px 0px">
                    <Grid item xs={1} sm={2}></Grid>
                    <Grid item xs={4} md={6}>
                        <Button variant="contained" onClick={handleClick}>
                            Xem
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="row"
                >
                    <Grid item xs={11.5} style={{ border: '1px solid #333', height: '0px', width: '800px' }} />
                    {question && question.name != 'báo cáo' && clicked2 ? (
                        <Grid item xs={11.5}>
                            <List
                                sx={{ width: '100%' }}
                                component="nav"
                                style={{ backgroundColor: 'rgba(230,239,247,1)' }}
                            >
                                <ListItemButton sx={{ bgcolor: 'rgba(209,221,232,1)' }} onClick={handleClick2}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="h5" style={{ color: '#1976d2' }}>
                                            Đề bài
                                        </Typography>
                                    </ListItemText>
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse
                                    style={{ maxWidth: '100%', overflowX: 'auto', padding: '10px' }}
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <pre style={{ fontSize: '20px' }}>{contentDebai}</pre>
                                </Collapse>
                            </List>
                        </Grid>
                    ) : (
                        ''
                    )}

                    {week && question.name == 'báo cáo' && clicked ? (
                        <Grid
                            item
                            xs={11.5}
                            overflow="auto"
                            ref={(divElement) => divElement && setDivWidth(divElement.offsetWidth)}
                        >
                            <div
                                style={{
                                    width: '100%',
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
                                                width={divWidth * 0.95}
                                            />
                                        );
                                    })}
                                </Document>
                            </div>
                        </Grid>
                    ) : question && question.name != 'báo cáo' && clicked2 ? (
                        <Grid item container xs={11.5} justifyContent="space-between">
                            <Grid item xs={5.7} overflow="auto">
                                <SyntaxHightlighter language="cpp">{file}</SyntaxHightlighter>
                            </Grid>
                            <Grid
                                item
                                container
                                xs={5.7}
                                justifyContent="flex-start"
                                padding="30px 0px"
                                maxHeight="850px"
                            >
                                <Grid container item xs={12} display="flex" flexDirection="column">
                                    <Grid item container paddingBottom="10px">
                                        <Grid item xs={3}>
                                            <Typography variant="h5">Input</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Select
                                                style={{ width: '150px', height: '45px' }}
                                                value={language}
                                                onChange={(e) => {
                                                    setLanguage(e.target.value);
                                                }}
                                            >
                                                <MenuItem value="cpp">
                                                    <Typography>C++</Typography>
                                                </MenuItem>
                                                <MenuItem value="java">
                                                    <Typography>java</Typography>
                                                </MenuItem>
                                                <MenuItem value="py">
                                                    <Typography>python</Typography>
                                                </MenuItem>
                                            </Select>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <TextareaAutosize
                                            style={{
                                                width: '95%',
                                                minHeight: '300px',
                                                maxHeight: '500px',
                                                overflow: 'auto',
                                                padding: '10px 0px 10px 10px',
                                                fontSize: '15px',
                                            }}
                                            onChange={(e) => {
                                                console.log(e.target.value);
                                                setInput(e.target.value);
                                            }}
                                        ></TextareaAutosize>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} paddingLeft="15px" paddingTop="20px">
                                    <Complier language={language} tuan={week.name} bai={question.name} input={input} />
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : loading ? (
                        <CircularProgress />
                    ) : (
                        ''
                    )}

                    <Grid item xs={12} style={{ border: '1px solid #333', height: '0px', width: '800px' }} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
