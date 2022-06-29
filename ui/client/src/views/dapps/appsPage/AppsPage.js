import React, { useState, useEffect, useRef } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Toolbar,
    Typography,
    Button
} from '@mui/material';

export default function StickyHeadTable(props) {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3">
                    <strong>Dapps</strong>
                </Typography>
            </Toolbar>
        </Paper>
    );
}
