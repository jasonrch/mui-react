import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    form: {
      width: '90%', 
      margin: '0 auto',
      backgroundColor: '#eee',
      borderRadius: '10px',
      boxShadow: '0 0 5px 1px #cd5c5c',
    },
    formheader: {
      padding: '15px 0',
      borderBottom: '1px solid #ccc',
      '& h3': {
        fontSize: '2.5rem',
        margin: '0',
        textAlign: 'center',
        color: '#cd5c5c',
      },
    },
    row: {
      display: 'block',
      margin: '0',
      flex: '1',
      flexWrap: 'wrap',
    },
    inputGroup: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      margin: '0.25rem 1rem',
      '& > label': {
        textAlign: 'left',
        fontSize: '1.15rem',
        fontWeight: 'bold',
        color: '#cd5c5c',
      },
      '& > input': {
        fontSize: '1.35rem',
        padding: '0.35rem',
        color: '#cd5c5c',
      },
    },
    formBody: {
      padding: '0.5rem 0'
    },
    submit: {
      padding: '.5rem 2rem',
      margin: '.5em auto',
      borderRadius: '15px',
      fontSize: '1.5em !important',
      boxShadow: '0 3px 5px 1px hsl(17deg 70% 30%)',
      borderColor: 'hsl(17deg 70% 40%)',
      backgroundColor: 'salmon',
      transition: 'box-shadow .15s ease-in',
      '&:active': {
        boxShadow: 'none',
      }
    },
    // tablet size+
    [theme.breakpoints.up('sm')]: {
      form: {
        width: '75%',
      },
      row: {
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap',
        margin: '0.5rem 1rem',
      },
      inputGroup: {
        '& > label': {
          fontSize: '1.5rem',
        },
        '& > input': {
          fontSize: '1.75rem',
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      form: {
        width: '90%',
      },
      submit: {
        width: '30%',
        fontSize: '2em !important'
      }
    },
    [theme.breakpoints.up('lg')]: {
      form: {
        width: '70%',
      },
    },
  }));

export default useStyles