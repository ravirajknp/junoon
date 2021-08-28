import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, colors, Grid, TableRow } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';




const styles = makeStyles(theme => ({
    container: {
        width: "100%",
        // background: "red",
        display: "grid",
        gridTemplateRows: "row",
        // border: "1px solid black",
        gridTemplateColumns: "10rem 1fr 2fr 1fr 10rem",
        alignItems: "center",
        background: "#eee",
        boxShadow: "0 8px 8px -4px lightblue",
    },

    navLogo: {
        gridColumn: "2/3",
    },
    listBlock: {
        display: "flex",
        gridColumn: "3/4",

    },
    listItem: {
        listStyle: "none",
        marginRight: "40px",
        pointerEvents: "auto",
        color: "black",
        fontSize: "20px",
        fontWeight: "500",

    },
    navSignInUp: {
        gridColumn: "4/5",
    },
    btnSignIn: {
        border: "none",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "1.2rem",
        color: "rgba(30, 14, 98, 1)",
        fontWeight: "700",

    },
    btnSignUp: {
        cursor: "pointer",
        textAlign: "center",
        fontSize: "1rem",
        background: "rgba(72, 43, 231, 1)",
        color: "white",
        borderRadius: "15px",
        padding: "3px",
        marginLeft: "20px",
        border: "none",
        width: "6rem",
        height: "2rem"
    }

}))

const Header = () => {

    const classes = styles()

    return (
        <div className={classes.container}>

            <div className={classes.navLogo}>
                <a href="#"> <h1>Project Junoon</h1></a>
            </div>
            <div className={classes.navMenu}>
                <ul className={classes.listBlock}>
                    <li className={classes.listItem}>
                        <a href="#">Product</a>
                    </li>
                    <li className={classes.listItem}>
                        <a href="#">Pricing</a>
                    </li >
                    <li className={classes.listItem}>
                        <a href="#">Community</a>
                    </li >
                    <li className={classes.listItem}>
                        <a href="#">Events</a>
                    </li>
                </ul>
            </div>
            <div className={classes.navSignInUp}>
                <Button href="/login" className={classes.btnSignIn} >Sign In</Button>
                <Button href="/signup" className={classes.btnSignUp} >Sing Up</Button>

            </div>

        </div>
    )
}

export default Header;
