import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "290px",
        height: "auto",
        // boxShadow: "#dfdfdf 2px 2px 5px",
        borderRadius: "var(--rounded)",
        padding: "0em",
        marginLeft:"20px",
        lineHeight: "1.5em",
        display: "grid",
        // marginTop: "80px",
        gridGap: "10px",
        backgroundColor:"white",
        // overflow: "hidden",
        border: "10px solid var(--blue)",
        transition: "350ms ease -in -out",
        "&:hover" :{
            // border: "1px solid",
            transform: "scale(1.02)",
            boxShadow:"#1DA1F2 2px 5px 10px",
        },
    },
    image: {
        borderRadius: "var(--rounded)",
        height: "200px",
        width:"auto",
        marginTop: "10px",
        justifySelf: "center",
        marginLeft:"80px",
        
    },
    text:{
        color:"#1DA1F2",
        // whiteSpace: "nowrap",
        // width:"300px",
        
    },
    button:{
        color:"white",
        marginTop:"0px",
    },
    // card: {
    //     backgroundColor: "black",
    //     width:"auto",
    //     height:"auto",
    // }

    
});
 

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia className={classes.image}
                    component="img"
                    alt={props.title}
                    image={props.img}
                    title={props.tile}
                />
                <CardContent>
                    <Typography className={classes.text} gutterBottom variant="h10" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.button} size="small" >
                    Read
                </Button>
            </CardActions>
        </Card>
        
    );
}