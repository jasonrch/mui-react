import useStyles from '../styles/form_styles';

const User = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={(e) => {
            e.preventDefault();
            let name = e.target.elements.firstname.value[0].toUpperCase() + e.target.elements.firstname.value.substr(1) + ' ' + e.target.elements.lastname.value[0].toUpperCase() + e.target.elements.lastname.value.substr(1)

            let newUser = {
                name,
                username: e.target.elements.username.value,
                address: {city: e.target.elements.location.value},
                company: {name: e.target.elements.company.value, catchPhrase: e.target.elements.catchphrase.value},
                email: e.target.elements.email.value,
                phone: e.target.elements.phone.value || 'NA',
                website: e.target.elements.website.value || 'NA',
            };
            props.addUser(newUser);
            }
            }>
            <div className={classes.formheader}>
                <h3>Add User:</h3>
            </div>
            <div className={classes.formBody}>
                <div className={classes.row}>
                    <div className={classes.inputGroup}>
                        <label>First name *</label>
                        <input type="text" name="firstname" placeholder="enter your first name" required/>
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Last name *</label>
                        <input type="text" name="lastname" placeholder="enter your last name" required/>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputGroup}>
                        <label>Username *</label>
                        <input name="username" type="text" placeholder="enter your username" required/>
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Location *</label>
                        <input type="text" name="location" placeholder="where are you located?" required/>                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputGroup}>
                        <label>Company *</label>
                        <input name="company" type="text" placeholder="company name" required/>
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Catchphrase *</label>
                        <input type="text" name="catchphrase" placeholder="keep on truckin" required/>                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputGroup}>
                        <label>Phone </label>
                        <input name="phone" type="tel" placeholder="888-123-4567" />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Website </label>
                        <input type="text" name="website" placeholder="www.reddit.com" />                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputGroup}>
                        <label>Email *</label>
                        <input type="email" name="email" required/>
                    </div>
                </div>
            </div>
            <div className={classes.row}>
                <input type="submit" className={classes.submit} value="Add User"/>
            </div>
        </form>
    )
}

export default User;