import useStyles from '../styles/remove_styles';

export default function DeleteButton(props) {
    const classes = useStyles();

    return (
        <div onClick={() => props.filterId(props.contactId)} className={classes.button}>
            X
        </div>
    )
}
