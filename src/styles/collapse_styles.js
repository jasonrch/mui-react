import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    centerButton: {
      margin: '0 auto !important',
      color: 'white !important',
      transition: 'background .4s linear, transform .2s linear',
      border: '2px solid white !important',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 1px 5px 1px #9c102e',
    },
    dropButton: {
      transition: 'transform .2s linear',
      background: 'linear-gradient(225deg, #FF8E53 30%, #FE6B8B 90%)',
    },
    closeButton: {
      transition: 'transform .2s linear',
      transform: 'rotate(-180deg)',
    },
    itemCard: {
      whiteSpace: 'nowrap',
      maxWidth: '22em',
      margin: '0 auto',
      height: 'auto',
      position: 'relative',
      padding: '.75rem .75rem 4em',
      border: '1px solid #ccc',
      boxShadow: 'none',
      textAlign: 'center',
      transition: 'box-shadow .15s ease-out, transform .1s linear',
      [theme.breakpoints.up('sm')]: {
        textAlign: 'start',
      },
      '&:hover': {
        boxShadow: '0 2px 7px hsl(354, 99%, 72%) !important',
        transform: 'translateY(-.25em)',
      },
      '& h6': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 'fit-content',
        minWidth: '100%',
        '& i': {
          width: '100%',
        },
      },
    },
    cardAction: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    catchphrase: {
      color: '#009860'
    },
    bio: {
      '&-enter': {
        opacity: 0,
      },
      '&-enter-active': {
        opacity: 1,
        transition: 'opacity 250ms ease',
      },
      '&-exit': {
        opacity: 1,
      },
      '&-exit-active': {
        opacity: 0,
        transition: 'opacity 250ms ease',
      },
    }
  }));

export default useStyles