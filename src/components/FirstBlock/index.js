import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { colors, Grid, TableRow } from '@material-ui/core';

const styleFirst = makeStyles(theme => ({
    firstContainer: {
        width: "100%",
        // border: "1px solid gray",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "white",
        marginTop: "20px",
    },
    rightBlock: {
        width: "50%",
    },
    listItem: {
        listStyle: "none",
        fontSize: "20px",
        color: "rgba(30, 14, 98, 1)",
        margin: "20px",
    },
    leftBlock: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",

    },
    rightBlock: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    rightHeading: {
        justifySelf: "bottom",
        fontSize: "22px",
        color: "#1E0E62",
        textTransform: "uppercase",
        opacity: "0.5",

    },
    rightTextBox: {
        width: "163px",
        height: "96px",
        color: "rgba(30, 14, 98, 1)",
        textAlign: "center",
        fontSize: "22px",
    },
    btn :{
        background: "rgba(72, 43, 231, 1)",
        fontSize: "14px",
        borderRadius: "15px",
        color: "white",
        padding: "8px",
        width: "7rem",
        border: "none",

    }

}))

const FirstBlock = () => {
    const classesFirst = styleFirst();
    return (
        <div className={classesFirst.firstContainer}>
            <div className={classesFirst.leftBlock}>
                <div className={classesFirst.first, classesFirst.list}>
                    <ul>
                        <li className={classesFirst.listItem}>Jackets & Coats</li>
                        <li className={classesFirst.listItem}>Hoodies</li>
                        <li className={classesFirst.listItem}>T-shirts & Vests</li>
                        <li className={classesFirst.listItem}>Shirts</li>
                        <li className={classesFirst.listItem}>Blazers & Suits</li>
                        <li className={classesFirst.listItem}>Jeans</li>
                        <li className={classesFirst.listItem}>Trousers</li>
                        <li className={classesFirst.listItem}>Shorts</li>
                        <li className={classesFirst.listItem}>Underwear</li>
                        <li className={classesFirst.listItem}>Accessories</li>
                    </ul>
                </div>
                <div className={classesFirst.second, classesFirst.list}>
                    <ul>
                        <li className={classesFirst.listItem}>Dresses</li>
                        <li className={classesFirst.listItem}>Swimwear</li>
                        <li className={classesFirst.listItem}>Tops</li>
                        <li className={classesFirst.listItem}>Basic</li>
                        <li className={classesFirst.listItem}>Knitwear</li>
                        <li className={classesFirst.listItem}>Lingerie</li>
                        <li className={classesFirst.listItem}>Nightwear</li>
                        <li className={classesFirst.listItem}>Sportwear</li>
                        <li className={classesFirst.listItem}>Beauty</li>
                        <li className={classesFirst.listItem}>Shoes</li>
                    </ul>
                </div>
                <div className={classesFirst.third, classesFirst.list}>
                    <ul>
                        <li className={classesFirst.listItem}>Jumpsuit</li>
                        <li className={classesFirst.listItem}>Rompers</li>
                        <li className={classesFirst.listItem}>Waistcoats</li>
                        <li className={classesFirst.listItem}>Sweatshirts</li>
                        <li className={classesFirst.listItem}>Hoodies</li>
                        <li className={classesFirst.listItem}>Maternity Wear</li>
                        <li className={classesFirst.listItem}>Nightwear</li>
                        <li className={classesFirst.listItem}>Jeans</li>
                        <li className={classesFirst.listItem}>Knitwear</li>

                    </ul>
                </div>

            </div>
            <div className={classesFirst.rightBlock}>
                <div className={classesFirst.rightHeading}>
                    New Stuff
                </div>
                <div className={classesFirst.rightTextBox}>
                    Chek It! Our New Products for Everyone
                </div>

                <button className={classesFirst.btn}>
                    Explore
                </button>

            </div>
        </div>
    )
}

export default FirstBlock
