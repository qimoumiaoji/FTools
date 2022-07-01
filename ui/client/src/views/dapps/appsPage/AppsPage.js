import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Grid, Toolbar, Typography, Box, Avatar } from '@mui/material';
import logo from 'assets/images/logo.svg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

function FormRow({ list }) {
    return list.map((row) => (
        <Grid item xs={4} style={{ border: 'red 1px solid' }} key={row.id}>
            <Item>
                <Img alt="complex" src={logo} />
                <Typography>11</Typography>
            </Item>
        </Grid>
    ));
}

function group(array, subGroupLength) {
    let index = 0;
    const newArray = [];

    while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
    }

    return newArray;
}

export default function NestedGrid(props) {
    const { gridData } = props;

    return (
        <>
            <Grid container spacing={3}>
                {gridData.map((row) => (
                    <Grid
                        item
                        xs={2}
                        key={row.id}
                        style={{ border: 'green 1px solid' }}
                        onClick={() => {
                            window.open(row.url);
                        }}
                    >
                        <Grid item xs={3}>
                            <div style={{ width: '100%', float: 'left', border: 'gray 1px solid' }}>
                                <Avatar alt="complex" src={row.image} />
                            </div>
                        </Grid>
                        <Grid item xs={9} style={{ marginLeft: '25%' }}>
                            <Typography variant="h4">{row.name.trim()}</Typography>
                            <Typography>{row.desc.trim()}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
