import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Avatar } from '@mui/material';

export default function NestedGrid(props) {
    const { gridData } = props;

    return (
        <>
            <Grid container spacing={3}>
                {gridData.map((row) => (
                    <Grid
                        item
                        xs={4}
                        key={row.id}
                        onClick={() => {
                            window.open(row.url);
                        }}
                    >
                        <Grid item xs={3}>
                            <div style={{ width: '100%', float: 'left' }}>
                                <Avatar alt="complex" src={row.image} />
                            </div>
                        </Grid>
                        <Grid item xs={9} style={{ marginLeft: '25%' }}>
                            <Typography variant="h4">{row.name.trim()}</Typography>
                            <Typography noWrap="true">{row.desc.trim()}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
