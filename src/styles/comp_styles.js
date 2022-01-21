import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    App: {
      textAlign: 'center',
    },
    container: {
      display: 'grid !important',
      // xs={12: 1} sm={6: 2} md={4: 3} lg={3: 4} 
      [theme.breakpoints.up('xs')]: {
        gridTemplateColumns: '1fr',
      },
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      maxWidth: '90vw',
      margin: '0 auto !important',
      [theme.breakpoints.down('sm')]: {
        margin: '1em .5rem 0 .5rem',
      },
    },
    title: {
      margin: '.5em 0 !important',
      color: 'coral',
    },

  }));

export default useStyles