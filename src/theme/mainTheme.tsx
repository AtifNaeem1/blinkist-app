import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle5: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    heading3?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading: true;
    heading3: true;
    subtitle5: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2CE080',
      light: '#E2F2E9',
      dark: '#22C870',
    },
    secondary: {
      main: '#116BE9',
    },
    info: {
      main: '#6D787E',
    },
  },
  typography: {
    fontFamily: 'Cera Pro',
    heading: {
      fontSize: '36px',
      lineHeight: '45px',
      fontWeight: 700,
    },
    heading3: {
      fontSize: '24px',
      lineHeight: '30.17px',
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '23px',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '22.63px',
    },
    body1: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    caption: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17.6px',
    },
    subtitle5: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '25.14px',
    },
  },
});
export default customTheme;

var customStyles = makeStyles({
  time: {
    display: 'flex',
    justifyContent: 'flex-start',
    columnGap: '6px',
  },
  bannerImage: {
    height: '230px',
    width: '249px',
    margin: '17px',
  },
  explorecontent: {
    width: '461px',
    height: '69px',
    color: '#6D787E',
  },
  exploretitle: {
    color: '#03314B',
    width: '319px',
  },
  timeIcon: {
    width: '16.67px',
    height: '16.67px',
  },
  personIcon: {
    width: '13.33px',
    height: '17.7px',
  },
  iconText: {
    color: '#6D787E',
  },
  bookTitle: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '22.63px',
    color: '#03314B',
    marginBottom: '14px',
    marginTop: '6px',
    noWrap: true,
  },
  authorName: {
    fontWeight: 500,
    color: '#6D787E',
    lineHeight: '20.11px',
    marginBottom: '14px',
    fontSize: '16px',
  },
  buttonstyle: {
    textTransform: 'none',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20.11px',
  },
  readNowButton: {
    color: '#22C870',
    border: '1px solid #042330',
    borderRadius: '4px',
    width: '122px',
    height: '44px',
  },
  finishedReading: {
    background: '#2CE080;',
    borderRadius: '4px',
    width: '170px',
    height: '44px',
    color: '#03314B',
    '&:hover': {
      background: '#00C263',
    },
  },
  sendToKindle: {
    color: '#6D787E;',
    borderRadius: '4px',
    width: '151px',
    fontWeight: 400,
    height: '44px',
  },
  addToLib: {
    background: '#FFF',
    color: '#0365F2',
    border: '1px solid #E1ECFC',
    borderRadius: '0px 0px 8px 8px',
    textTransform: 'none',
    width: '100%',
    fontWeight: 500,
    height: '52px',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#0365F2',
      color: '#FFFFFF',
    },
  },
  Card: {
    background: '#FFF',
    border: '1px solid #E1ECFC',
    borderRadius: '8px',
    width: '300px',
    maxWidth: 284,
    height: 455,
    display: 'inline-block',
    marginLeft: '5px',
    marginBottom: '25px',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: '#F1F6F4',
    },
  },
  bookInfo: {
    color: '#03314B',
  },
  footerRight: {
    width: '585px',
    height: '224px',
  },
  footerLeft: {
    color: '#0365F2',
    width: '378px',
    height: '150px',
  },
  Footer: {
    height: '370px',
    width: '100%',
    background: '#F1F6F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardReadagain: {
    color: '#0365F2',
    fontWeight: 500,
    textTransform: 'none',
    width: '100px',
    height: '20px',
  },
  finished: {
    color: '#0365F2',
    fontWeight: 500,
    textTransform: 'none',
    width: '62px',
    height: '20px',
  },
  timerIcon: {
    width: '125px',
    height: '20px',
  },
  personIcons: {
    width: '88px',
    height: '20px',
  },
  IconGrid: {
    display: 'flex',
    columnGap: '44px',
  },
  myLibrary: {
    color: '#03314B',
    marginBottom: '50px',
    marginTop: '50px',
    width: '950px',
  },
  myLibraryHeader: {
    width: '200px',
    height: '50px',
    marginLeft: '5px',
  },
  myLibraryCards: {
    width: '950px',
    marginTop: '40px',
  },

  exploreHover: {
    color: '#6D787E',
    textTransform: 'none',
    '& .MuiButton-startIcon': {
      color: '#042330',
      '&:hover': {
        color: '#0365F2',
      },
    },
    '&:hover': {
      color: '#0365F2',
    },
  },
  exploreTopFirst: {
    color: '#116BE9',
    '&:hover': {
      color: '#116BE9',
    },
  },
  exploreTop: {
    color: '#6D787E',
    '&:hover': {
      color: '#116BE9',
    },
  },
  hidden: {
    display: 'none',
  },
  visible: {
    zIndex: 1,
    position: 'absolute',
    height: '398px',
    top: '60px',
    background: '#F1F6F4',
  },
  trendingBooks: {
    color: '#03314B',
    marginBottom: '25px',
  },
  AppBar: {
    padding: '0px !important',
    border: 'none',
    position: 'sticky',
    background: '#FFFFFF',
  },
  logo: {
    width: '124.09px',
    height: '26px',
  },
  bottom: {
    marginTop: '36px',
    marginBottom: '0px',
  },
  bottomLogo: {
    width: '99px',
    height: '24px',
  },
  bookReads: {
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
  },
  TabHeading: {
    fontSize: '18px',
    fontWeight: 400,
  },
  entrepreneur: {
    color: '#03314B',
    marginBottom: '50px',
    marginTop: '30px',
    width: '950px',
  },
  entrepreneurSearchBar: {
    marginBottom: '10px',
    marginLeft: '10px',
    width: '658px',
  },
  bookDetailPage: {
    color: '#03314B',
    marginBottom: '50px',
    marginTop: '60px',
    width: '950px',
    marginLeft: '30px',
  },
  tab: {
    paddingLeft: '0px !important',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
  },
});
export { customStyles };
