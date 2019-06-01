import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  social: {
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});
const SignIn=(props)=> {
  const { classes, login , handleChange} = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={login}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" name="username" autoComplete="username" autoFocus onChange={handleChange}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={handleChange}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
          <div className={classes.social}>
          <div className="g-signin2" id="g-signin2"></div>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
          5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgi
          CnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3
          VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0MiAzNyBDIDQy
          IDM5Ljc2MTcxOSAzOS43NjE3MTkgNDIgMzcgNDIgTCAxMSA0MiBDIDguMjM4MjgxIDQyID
          YgMzkuNzYxNzE5IDYgMzcgTCA2IDExIEMgNiA4LjIzODI4MSA4LjIzODI4MSA2IDExIDYg
          TCAzNyA2IEMgMzkuNzYxNzE5IDYgNDIgOC4yMzgyODEgNDIgMTEgWiAiPjwvcGF0aD48cG
          F0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzQuMzY3MTg4IDI1IEwgMzEgMjUg
          TCAzMSAzOCBMIDI2IDM4IEwgMjYgMjUgTCAyMyAyNSBMIDIzIDIxIEwgMjYgMjEgTCAyNi
          AxOC41ODk4NDQgQyAyNi4wMDM5MDYgMTUuMDgyMDMxIDI3LjQ2MDkzOCAxMyAzMS41OTM3
          NSAxMyBMIDM1IDEzIEwgMzUgMTcgTCAzMi43MTQ4NDQgMTcgQyAzMS4xMDU0NjkgMTcgMz
          EgMTcuNjAxNTYzIDMxIDE4LjcyMjY1NiBMIDMxIDIxIEwgMzUgMjEgWiAiPjwvcGF0aD48
          L2c+PC9zdmc+"
          alt="facebook"></img>

          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My
          5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgi
          CnZpZXdCb3g9IjAgMCAxOTIgMTkyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbG
          w9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lk
          dGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi
          BzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRh
          c2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm
          9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1t
          b2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE5MnYtMTkyaDE5MnYxOTJ6IiBmaWxsPSJub2
          5lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PHBhdGggZD0iTTE1MiwyNGgtMTEyYy04
          Ljg0LDAgLTE2LDcuMTYgLTE2LDE2djExMmMwLDguODQgNy4xNiwxNiAxNiwxNmgxMTJjOC
          44NCwwIDE2LC03LjE2IDE2LC0xNnYtMTEyYzAsLTguODQgLTcuMTYsLTE2IC0xNiwtMTZ6
          TTEzNi40LDc2LjExMmMwLDAuNjg4IDAsMS4zNjggMCwyLjc0NGMwLDI2LjA1NiAtMTkuOD
          g4LDU2LjIzMiAtNTYuMjMyLDU2LjIzMmMtMTAuOTY4LDAgLTIxLjI1NiwtMy40MzIgLTMw
          LjE2OCwtOC45MTJjMS4zNjgsMCAzLjQzMiwwIDQuOCwwYzguOTEyLDAgMTcuODMyLC0zLj
          QzMiAyNC42ODgsLTguMjMyYy04LjkxMiwwIC0xNS43NjgsLTYuMTY4IC0xOC41MTIsLTEz
          LjcxMmMxLjM2OCwwIDIuNzQ0LDAuNjg4IDMuNDMyLDAuNjg4YzIuMDU2LDAgMy40MzIsMC
          A1LjQ4OCwtMC42ODhjLTguOTEyLC0yLjA1NiAtMTUuNzY4LC05LjYgLTE1Ljc2OCwtMTku
          MmMyLjc0NCwxLjM2OCA1LjQ4OCwyLjA1NiA4LjkxMiwyLjc0NGMtNS40ODgsLTQuOCAtOC
          45MTIsLTEwLjI4OCAtOC45MTIsLTE3LjE0NGMwLC0zLjQzMiAwLjY4OCwtNi44NTYgMi43
          NDQsLTkuNmM5LjYsMTEuNjU2IDI0LDE5Ljg4OCA0MC40NTYsMjAuNTY4YzAsLTEuMzY4IC
          0wLjY4OCwtMi43NDQgLTAuNjg4LC00LjhjMCwtMTAuOTY4IDguOTEyLC0xOS44ODggMTku
          ODg4LC0xOS44ODhjNS40ODgsMCAxMC45NjgsMi4wNTYgMTQuNCw2LjE2OGM0LjgsLTAuNj
          g4IDguOTEyLC0yLjc0NCAxMi4zNDQsLTQuOGMtMS4zNjgsNC44IC00LjgsOC4yMzIgLTgu
          OTEyLDEwLjk2OGM0LjExMiwtMC42ODggNy41NDQsLTEuMzY4IDExLjY1NiwtMy40MzJjLT
          IuNzYsNC4xMjggLTYuMTg0LDcuNTUyIC05LjYxNiwxMC4yOTZ6Ij48L3BhdGg+PC9nPjwv
          Zz48L3N2Zz4="
          alt="twitter"></img>
          </div>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  googleLogin: PropTypes.func,
};

export default withStyles(styles)(SignIn);