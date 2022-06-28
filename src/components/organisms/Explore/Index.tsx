import { Grid, Divider, Button } from '@mui/material';
import TypographyComponent from '../../atoms/Typography/Index';
import { customStyles } from '../../../theme/mainTheme';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Buttons from '../../atoms/Button/Index';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';

const itemList = [
  {
    name: 'Politics',
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    name: 'Marketing & Sales',
    icon: <AutoGraphOutlinedIcon />,
  },
  {
    name: 'Science',
    icon: <ScienceOutlinedIcon />,
  },
  {
    name: 'Health & Nutrition',
    icon: <LocalHospitalOutlinedIcon />,
  },
  {
    name: 'Personal Development',
    icon: <SignalCellularAltOutlinedIcon />,
  },
  {
    name: 'Economics',
    icon: <AnimationOutlinedIcon />,
  },
  {
    name: 'History',
    icon: <PublicOutlinedIcon />,
  },
  {
    name: 'Communication Skills',
    icon: <CommentOutlinedIcon />,
  },
  {
    name: 'Corporate Culture',
    icon: <BusinessCenterOutlinedIcon />,
  },
  {
    name: 'Motivation & Inspiration',
    icon: <TipsAndUpdatesOutlinedIcon />,
  },
  {
    name: 'Money & Investments',
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    name: 'Psychology',
    icon: <PsychologyOutlinedIcon />,
  },
  {
    name: 'Productivity',
    icon: <HourglassBottomOutlinedIcon />,
  },
  {
    name: 'Sex & Relationship',
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    name: 'Nature & Environment',
    icon: <YardOutlinedIcon />,
  },
  {
    name: 'Career & Success',
    icon: <ModeStandbyOutlinedIcon />,
  },
  {
    name: 'Education',
    icon: <SchoolOutlinedIcon />,
  },
];

interface ExploreCardProps {
  handleChange: () => void;
}

const Index = (props: ExploreCardProps) => {
  const classes = customStyles();
  const ExploreItem = itemList.map((eItem) => {
    return (
      <Buttons
        key={eItem.name}
        startIcon={eItem.icon}
        className={classes.exploreHover}
      >
        <TypographyComponent variant="body2">
          {eItem.name}
        </TypographyComponent>
      </Buttons>
    );
  });

  return (
    <Grid
      container
      sx={{
        background: '#F1F6F4',
        justifyContent: 'center',
        width: '100%',
      }}
      role="Explore"
    >
      <Grid
        item
        container
        direction="column"
        sx={{
          alignItems: 'flex-start',
          width: '980px',
          height: '398px',
          justifyContent: 'center',
        }}
      >
        <Grid
          item
          container
          direction="row"
          columnGap={'140px'}
          mb={2}
        >
          <Grid item>
            <Button
              variant="text"
              disableRipple={true}
              sx={{ textTransform: 'none' }}
              className={classes.exploreTopFirst}
            >
              <TypographyComponent
                variant="body1"
                children="Explore by category"
                color="secondary"
              />
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="text"
              disableRipple={true}
              sx={{ textTransform: 'none' }}
            >
              <TypographyComponent
                variant="body1"
                children="See recently added titles"
                className={classes.exploreTop}
              />
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="text"
              disableRipple={true}
              sx={{ textTransform: 'none' }}
            >
              <TypographyComponent
                variant="body1"
                children="See popular titles"
                className={classes.exploreTop}
              />
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Divider
            sx={{
              width: '940px',
              border: '1px solid #042330',
              mb: '30px',
            }}
          />
        </Grid>

        <Grid item container spacing={1} sx={{ width: '950px' }}>
          <Grid item key={0} sm={4}>
            <Buttons
              key="Entrepreneurship"
              startIcon={<NotificationsNoneOutlinedIcon />}
              className={classes.exploreHover}
              onClick={props.handleChange}
            >
              <TypographyComponent variant="body2">
                Entrepreneurship
              </TypographyComponent>
            </Buttons>
          </Grid>

          {ExploreItem.map((Item, index) => {
            return (
              <Grid item key={index} sm={4}>
                {Item}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
