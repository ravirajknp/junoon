import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid, TableRow } from '@material-ui/core';

const styleFooter = makeStyles(theme => ({
    container:{
        background: "#2F1893",
        display: "flex",
       justifyContent: "center",
       alignItems: "center",
       height: "200px",
       flexDirection: "column",

    },
    
    heading : {
        fontSize: "42px",
        color: "#fff",
    },
    paraText : {
        color: "rgba(255, 255, 255, 1)",
        fontSize: "20px",
    },

    btn : {
        border: "none",
        padding: "10px",
        marginRight: "30px",
        width: "120px",
        borderRadius: "30px",
        outline: "none",
        background: "#2F1893",
        border: ".1px solid #aa00ff",
        color: "#fff",
        fontSize: "15px",
        cursor: "pointer",
    }
    
}))

const Footer =() => {
    const classFooter = styleFooter();

    return (
        <div className={classFooter.container}>
            <div className={classFooter.heading}>Better Landing for Your Startup</div>

            <div className={classFooter.paraBlock}>
            <p className={classFooter.paraText}>We have created a new product that will help designers, developers and  companies create websites for their startups quickly and easily.</p>
            </div>

            <div className={classFooter.socialButtons}>
                <button className={classFooter.twitter, classFooter.btn}>Twitter</button>
                <button className={classFooter.facebook, classFooter.btn}>Facebook</button>
                <button className={classFooter.google, classFooter.btn}>Google</button>
                <button className={classFooter.instagram, classFooter.btn}>Instagram</button>
            </div>
        </div>
    )
}

export default Footer;