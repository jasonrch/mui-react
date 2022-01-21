import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardActions } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import DeleteButton from './DeleteButton';
import useStyles from '../styles/collapse_styles';
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

function ContactCollapse(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = (e) => {
      return setExpanded(!expanded)
    }
  
    return (
      <Card className={classes.itemCard}>
        <DeleteButton contactId={props.user.id} filterId={props.filterId} />
        <Typography variant="h6" color="secondary" gutterBottom={true} style={{textAlign: 'center'}}>{props.user.name}<br /><i>'{props.user.username}'</i></Typography>
        <Typography paragraph color="textPrimary">Location: {props.user.address.city}</Typography>
        <Typography paragraph color="secondary" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>Company: <b>{props.user.company.name}</b><br />
          <span className={classes.catchphrase}>
            <i>`{props.user.company.catchPhrase}`</i>
          </span>
        </Typography>
        <CardActions className={classes.cardAction}>
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }, classes.centerButton, expanded ? classes.closeButton : classes.dropButton)}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Typography variant="h6" gutterBottom={true} style={{textAlign: 'center'}}>Contact Info:</Typography>
        <Collapse className={classes.collapse} in={expanded} timeout="auto" unmountOnExit>
          <Typography><b>Email:</b> {props.user.email}</Typography>
          <Typography><b>Phone:</b> {props.user.phone}</Typography>
          <Typography gutterBottom={true}><b>Website:</b> {props.user.website}</Typography>
        </Collapse>
      </Card>
    )
  }

export default ContactCollapse