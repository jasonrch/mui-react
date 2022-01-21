import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from '../styles/bar_styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const Bar = (props) => {
    const classes = useStyles();

    return (
        <AppBar gutterbottom="true" color="primary" className={classes.header}>
        <Toolbar onChange={props.searchUsers}>
          <Typography className={classes.headerTitle} variant="h6" noWrap>
            Material-UI Test User App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.searchTerm}
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search'}}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Bar;