import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showStudent';
import Create from './components/createStudent/createStudent';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Students Create &
                        Show</Typography>
                < /AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItem="strict">
                            <Grid item xs={12} sm={7}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <Student/>
                                </AppBar>
                                <Grid item xs={12} sm={4}>
                                    <AppBar className={classes.appBar} position="static" color="inherit">
                                        <Create />
                                    </AppBar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    );
}

export default App;