import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TypographyComponent from '../../atoms/Typography/Index';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { customStyles } from '../../../theme/mainTheme';
import Blinkist from '../../../assets/Images/Blinkist.png';
import SearchIcon from '../../../assets/Images/SearchIcon.png';
import { useState } from 'react';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';
import AvatarWithIcon from '../../molecules/AvatarWithIcon/Index';
import Explore from '../Explore/Index';
import { useNavigate } from 'react-router-dom';

export default function Index(props: {
  clicked: boolean;
  handleToggle: any;
}) {
  const [clicked, handler] = useState(props.clicked);

  const [logClick, handleLogin] = useState(true);
  const classes = customStyles();
  const navigate = useNavigate();
  console.log(clicked);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: '100%' }}
      role="Header"
    >
      <Grid
        item
        container
        direction="row"
        columnGap={'36px'}
        wrap="nowrap"
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: '#FFFFFF',
          width: '1000px',
        }}
      >
        <Box sx={{ flexGrow: 1, mt: 0, mb: 0, ml: 0, mr: 0 }}>
          <AppBar
            position="static"
            elevation={0}
            className={classes.AppBar}
            role="AppBar"
          >
            <Toolbar>
              <Button
                disableRipple
                onClick={() => {
                  navigate('/');
                  handler(false);
                }}
              >
                <Box
                  component="img"
                  src={Blinkist}
                  className={classes.logo}
                  role="logo"
                ></Box>
              </Button>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={{ my: 2, color: '#03314B', display: 'block' }}
                  disableRipple={true}
                >
                  <Box
                    component="img"
                    src={SearchIcon}
                    sx={{ mt: 1, ml: 4 }}
                    role="search"
                  />
                </Button>
                <Grid item>
                  <Button
                    variant="text"
                    endIcon={
                      props.clicked ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )
                    }
                    onClick={() => {
                      props.handleToggle();
                    }}
                    sx={{
                      width: '79px',
                      height: '20px',
                      textTransform: 'none',
                      color: '#03314B',
                      fontSize: '16px',
                      ml: 5,
                    }}
                  >
                    <TypographyComponent variant="body1">
                      Explore
                    </TypographyComponent>
                  </Button>
                  {props.clicked && (
                    <div
                      style={{
                        width: '75px',

                        border: '1px solid #2CE080',
                        marginLeft: '39px',
                        marginTop: '4px',
                      }}
                    ></div>
                  )}
                </Grid>

                <Button
                  variant="text"
                  sx={{
                    my: 2,
                    color: '#03314B',
                    fontSize: '16px',
                    textTransform: 'none',
                    ml: 5,
                  }}
                  onClick={() => {
                    navigate('/');
                    handler(false);
                  }}
                >
                  <TypographyComponent
                    variant="body1"
                    children="My Library"
                  />
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <AvatarWithIcon
                  logClick={logClick}
                  handleLogin={() => handleLogin(!logClick)}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid
        item
        sx={{ width: '100%', marginTop: '22px', border: 'none' }}
        className={props.clicked ? classes.visible : classes.hidden}
        data-testid="Explore-Popup"
      >
        <Explore
          handleChange={() => {
            navigate('/entrepreneurship-page');
            handler(false);
          }}
        />
      </Grid>
    </Grid>
  );
}
