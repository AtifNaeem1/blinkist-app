import { Box, Grid } from '@mui/material';
import { customStyles } from '../../../theme/mainTheme';
import BannerImg from '../../../assets/Images/banner-img.png';
import TypographyComponent from '../../atoms/Typography/Index';

const Index = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      sx={{
        bgcolor: '#F1F6F4',
        height: '264px',
        width: '912px',
        mb: '60px',
      }}
      wrap="nowrap"
      role="EntrepreneurshipBanner"
    >
      <Grid item my={'45px'} mx={'45px'}>
        <Grid item container direction="column" rowSpacing={'15px'}>
          <Grid item>
            <TypographyComponent
              variant="heading"
              className={classes.exploretitle}
              children="Explore Books on entrepreneurship"
            />
          </Grid>

          <Grid item>
            <TypographyComponent
              variant="subtitle2"
              className={classes.explorecontent}
              children="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item mx={'45px'} role="BannerImage">
        <Box
          component="img"
          src={BannerImg}
          className={classes.bannerImage}
        />
      </Grid>
    </Grid>
  );
};

export default Index;
