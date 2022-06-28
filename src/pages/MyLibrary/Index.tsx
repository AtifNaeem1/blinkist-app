import { Grid } from '@mui/material';
import { customStyles } from '../../theme/mainTheme';
import TypographyComponent from '../../components/atoms/Typography/Index';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MyLibraryBookGrid from '../../components/organisms/MyLibraryBookGrid/Index';

const Index = () => {
  const classes = customStyles();
  const [value, setValue] = useState('1');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Grid
        item
        container
        direction="column"
        className={classes.myLibrary}
        role="main-grid"
      >
        <Grid item className={classes.myLibraryHeader}>
          <TypographyComponent
            variant="heading"
            children="My Library"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.myLibraryCards}
          sx={{ alignItems: 'flex-start' }}
        >
          <TabContext value={value}>
            <Grid
              item
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                width: '100%',
                height: '48px',
              }}
            >
              <TabList onChange={handleChange}>
                <Tab
                  disableRipple
                  label="Currently reading"
                  value="1"
                  sx={{
                    width: '304px',
                    textTransform: 'none',
                    alignItems: 'flex-start',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                />
                <Tab
                  disableRipple
                  label="Finished"
                  value="2"
                  sx={{
                    width: '304px',
                    textTransform: 'none',
                    alignItems: 'flex-start',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                />
              </TabList>
            </Grid>
            <Grid
              item
              direction="row"
              alignItems="flex-start"
              sx={{
                width: '100%',
                marginTop: '20px',
              }}
            >
              <TabPanel value="1" sx={{ mt: '25px', p: '0' }}>
                <MyLibraryBookGrid
                  status="reading"
                  location="library"
                  subCategory="any"
                />
              </TabPanel>
              <TabPanel value="2" sx={{ mt: '25px', p: '0' }}>
                <MyLibraryBookGrid
                  status="finished"
                  location="library"
                  subCategory="any"
                />
              </TabPanel>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
