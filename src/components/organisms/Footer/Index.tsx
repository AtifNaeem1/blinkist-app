import { Grid } from '@mui/material';
import { customStyles } from '../../../theme/mainTheme';
import TypographyComponent from '../../atoms/Typography/Index';
import Blinkist from '../../../assets/Images/Blinkist.png';
import FooterText from '../../../assets/Images/FooterText.png';

const index = () => {
  const classes = customStyles();

  const Editorial = [
    'Book lists',
    'What is Nonfiction?',
    'What to read next?',
    'Benefits of reading',
  ];

  const usefulLinks = [
    'Pricing',
    'Blinkist business',
    'Gift cards',
    'Blinkist magaine',
    'Contact & help',
  ];

  const Company = ['About', 'Careers', 'partners', 'Code of Conduct'];

  return (
    <Grid container className={classes.Footer} role="Footer">
      <Grid
        item
        container
        direction="column"
        sx={{
          alignItems: 'flex-start',
          width: '980px',
          height: '310px',
        }}
      >
        <Grid
          item
          container
          direction="row"
          sx={{
            alignItems: 'flex-start',
            width: '980px',
            height: '250px',
          }}
        >
          <Grid
            container
            direction="column"
            className={classes.footerLeft}
            rowGap={'22px'}
            role="footer-left"
          >
            <Grid item sx={{ height: '24px', width: '100px' }}>
              <img src={Blinkist} alt="Blinkist logo" />
            </Grid>

            <Grid item sx={{ height: '60px', width: '370px' }}>
              <img src={FooterText} alt="Footer Text" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            columnGap={4}
            wrap="nowrap"
            className={classes.footerRight}
          >
            <Grid
              item
              container
              direction="column"
              rowGap={2}
              sx={{ width: '200px', height: '224px' }}
            >
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  children="Editorial"
                  className={classes.bookInfo}
                />
              </Grid>
              {Editorial.map((item) => {
                return (
                  <Grid item key={Editorial.indexOf(item)}>
                    <TypographyComponent
                      variant="body2"
                      children={item}
                      className={classes.iconText}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              item
              container
              direction="column"
              rowGap={2}
              sx={{ width: '152px', height: '224px' }}
            >
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  children="Useful links"
                  className={classes.bookInfo}
                />
              </Grid>
              {usefulLinks.map((item) => {
                return (
                  <Grid item key={usefulLinks.indexOf(item)}>
                    <TypographyComponent
                      variant="body2"
                      children={item}
                      className={classes.iconText}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              item
              container
              direction="column"
              rowGap={2}
              sx={{ width: '132px', height: '224px' }}
            >
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  children="Company"
                  className={classes.bookInfo}
                />
              </Grid>
              {Company.map((item) => {
                return (
                  <Grid item key={Company.indexOf(item)}>
                    <TypographyComponent
                      variant="body2"
                      children={item}
                      className={classes.iconText}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          sx={{
            alignItems: 'flex-start',
            width: '980px',
            height: '20px',
          }}
          className={classes.bottom}
          role="footer-bottom"
        >
          <TypographyComponent
            variant="caption"
            children="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
            className={classes.iconText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
