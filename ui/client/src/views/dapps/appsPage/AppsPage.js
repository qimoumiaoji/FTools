import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Avatar, Card } from '@mui/material';

export default function NestedGrid(props) {
    const { gridData } = props;

    return (
        <>
            <Grid container spacing={2}>
                {gridData.map((row) => (
                    <Grid
                        item
                        xs={4}
                        key={row.id}
                        onClick={() => {
                            window.open(row.url);
                        }}
                    >
                        <Card style={{ background: 'white' }} variant="outlined">
                            <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
                                <div style={{ width: '100%', marginLeft: '5px' }}>
                                    <Avatar alt="complex" src={row.image} style={{ float: 'left' }} />
                                    <div style={{ marginLeft: '45px' }}>
                                        <Typography variant="h4">{row.name.trim()}</Typography>
                                        <Typography noWrap="true">{row.desc.trim()}</Typography>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
