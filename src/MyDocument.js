import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { StyleSheet } from '@react-pdf/renderer';

// Tạo styles
const styles = StyleSheet.create({
    page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
    section: { margin: 10, padding: 10, flexGrow: 1 },
});
const myPdf = '../public/pdf1.pdf';

const MyDocument = () => (
    <Document file={myPdf}>
        <Page pageNumber={1} />
    </Document>
);
export default MyDocument;
