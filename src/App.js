import useStyles from './styles/comp_styles';
import ContactCollapse from './components/ContactCollapse';
import User from './components/UserForm';
import Bar from './components/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import React, { useState, useEffect } from 'react';

function App() {
  const classes = useStyles();
  // const [userInfo, setUserInfo] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [prevResults, setPrevResults] = useState([]);
  const [inProp, setInProp] = useState(false);

  // on app load, fetch data and setState on value to be searched through
  useEffect(() => {
    getUsers();
    setInProp(true);
  }, []);

  const getUsers = async () => {
    try {
      const users = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await users.json();
      // setUserInfo(await data);
      setSearchResults(await data);
      setPrevResults(await data);
    } catch(err) {
      console.error(err.message);
    }
  };

  const searchUsers = async (e) => {
    let inp = e.target.value.toLowerCase();
    // extract the searchTerm here and send the result to filter 
    // the data from jsonplaceholder to display in grid template.
    if (inp.length !== 0) {
      let shallow = [...prevResults];
      const results = shallow.filter((user) => 
        user.name.toLowerCase().includes(inp) ||
        user.email.toLowerCase().includes(inp) ||
        user.username.toLowerCase().includes(inp) ||
        user.website.toLowerCase().includes(inp) ||
        user.address.city.toLowerCase().includes(inp)
      );
      setSearchResults(results);
    } else {
      setSearchResults(prevResults);
    }
  }

  // expects an id and filters the state list of items to remove item with same id
  const filterList = ((contactId) => {
    const results = searchResults.filter(item => item.id !== contactId);
    setSearchResults(results);
  });

  // add usercard on form submission
  const addUser = ((user) => {
    let userId = searchResults.length + 1;
    user.id = userId;
    let users = [...searchResults, user];
    setSearchResults(users);
    setPrevResults(users);
  });
  
  return (
    <div className={classes.App} >
      <Bar searchTerm={searchUsers} />
      <Toolbar />
      <Typography variant="h4" className={classes.title}>Fake User List and Filter</Typography>
      <Grid className={classes.container} alignItems="stretch" justifyContent="center" container spacing={4}>
            {searchResults.map((user) => (
              <Grow item key={user.id} in={inProp}>
                <Grid style={{margin: '15px'}}>
                  <ContactCollapse filterId={filterList} user={user}/>
                </Grid>
              </Grow>
              )
            )}
      </Grid>
      <User addUser={addUser} />
    </div>
  );
}

export default App
