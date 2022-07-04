import { AppBar, Grid, Toolbar } from '@mui/material';
import React from 'react';
import Footer from '../organisms/Footer/Index';
import NavBar from '../organisms/Navbar/Index';
import Backdrop from '@mui/material/Backdrop';

const BlinkistTemplate = (props: { children: any }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ width: '100%' }}
        role="Template"
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
          role="TemplateHeader"
        >
          <AppBar
            component="nav"
            elevation={0}
            sx={{ background: 'white', border: 'none' }}
          >
            <NavBar handleToggle={handleToggle} clicked={false} />
          </AppBar>
          <Backdrop
            sx={{
              color: '#FFFFFF',
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
            onClick={handleClose}
          >
            <AppBar
              component="nav"
              elevation={0}
              sx={{ background: 'white', border: 'none' }}
            >
              <Toolbar>
                <NavBar handleToggle={handleToggle} clicked={true} />
              </Toolbar>
            </AppBar>
          </Backdrop>
        </Grid>
        <Grid item sx={{ marginTop: '80px' }} role="main-content">
          {props.children}
        </Grid>
      </Grid>{' '}
      <Grid role="footer">
        <Footer />
      </Grid>
    </>
  );
};

export default BlinkistTemplate;
