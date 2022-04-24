import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import highrise3 from '../Assets/Images/highrise3.jpg';
import pdeulogo from '../Assets/Images/pdeulogo.jpg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const i = await fetch('http://localhost:5000/login', 
    {method: "POST",
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const res = await i.json()  //.json() is an async operation

  if(i.status === 201){
    navigate(`/${res.role}`)
  }
  else{
    alert(res.error)
  }

  };

  const stylelogo = {
    width: "100%",
    marginBottom: 20,
    borderRadius: 7
  }
  const fontstyle = {
    fontWeight: 600,
    fontFamily: "poppins",
    fontSize: 40,
    color: "#191970"
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          rowSpacing={10}
          xs={"false"}
          sm={4}
          md={7}
          sx={{
            
            backgroundImage: `url(${highrise3})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={pdeulogo} alt="pdeulogo" style={stylelogo} />
            <Typography style={fontstyle}>
              Highrise Hostel Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={onLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

