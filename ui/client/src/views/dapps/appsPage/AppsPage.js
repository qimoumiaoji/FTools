import React, { useState, useEffect, useRef } from 'react';
import TagIcon from '@mui/icons-material/Tag';
import { Grid, Typography, Avatar, Card, Box, Button } from '@mui/material';

// 分组
const groupBy = (list, fn) => {
    const groups = {};
    list.forEach((o) => {
        const group = JSON.stringify(fn(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });

    return groups;
};

export default function NestedGrid(props) {
    const { gridData } = props;

    const groupData = groupBy(gridData, (row) => row.tag);
    return (
        <>
            <Grid container direction="column">
                {Object.keys(groupData).map((group) => (
                    <>
                        <div>
                            <Button size="large" startIcon={<TagIcon />}>
                                {group.trim().replaceAll('"', '')}
                            </Button>
                        </div>
                        <Grid container spacing={2}>
                            {groupData[group].map((row) => (
                                <Grid
                                    item
                                    xs={2}
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
                ))}
            </Grid>
        </>
    );
}
