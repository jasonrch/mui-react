import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        height: '1em',
        width: '1em',
        borderRadius: '50%',
        border: '2px solid white',
        color: 'white',
        margin: '.5rem',
        padding: '.25rem',
        fontSize: '1.3rem',
        boxShadow: '0 0 3px 1px #FF8E53',
        position: 'absolute',
        right: 0,
        top: 0,
        background: 'linear-gradient(225deg, #FF8E53 30%, #FE6B8B 90%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
})
);

export default useStyles