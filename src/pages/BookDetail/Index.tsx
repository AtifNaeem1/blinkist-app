import { Box, Grid, Stack, Tab } from '@mui/material';
import { customStyles } from '../../theme/mainTheme';
import TypographyComponent from '../../components/atoms/Typography/Index';
import BookReadTime from '../../components/molecules/BookReadTime/BookReadTime';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Buttons from '../../components/atoms/Button/Index';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { withStyles } from '@mui/styles';
import data from '../../data/data.json';

interface BookCardProps {
  id: number;
  finished: boolean;
  inLibrary: boolean;
  imgsrc: string;
  bookName: string;
  authorName: string;
  time: string;
  nReads: string;
  isBookReadAvailable: boolean;
  category: string;
  subcategory: string;
}

const CustomTab = withStyles({
  selected: {
    color: '#03314B !important',
  },
})(Tab);

const Index = () => {
  const classes = customStyles();
  const [value, setValue] = useState('1');
  const navigate = useNavigate();

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setValue(newValue);
  };

  const { id } = useParams();

  const [books, setBooks] = useState([] as any);

  useEffect(() => {
    axios.get(`http://localhost:8000/BookList/${id}`).then((res) => {
      setBooks(res.data);
    });
  }, [id]);

  const handleReadButton = async () => {
    await axios.patch(`http://localhost:8000/BookList/${id}`, {
      finished: false,
      inLibrary: true,
    });
    await axios
      .get(`http://localhost:8000/BookList/${id}`)
      .then((res) => {
        setBooks(res.data);
      });
    navigate('/');
  };

  const handleFinishButton = async () => {
    await axios.patch(`http://localhost:8000/BookList/${id}`, {
      finished: true,
      inLibrary: true,
    });
    await axios
      .get(`http://localhost:8000/BookList/${id}`)
      .then((res) => {
        setBooks(res.data);
      });
    navigate('/');
  };

  const nameImg = data.BookList.filter(
    (book) => book.id === Number(id)
  )[0].imgsrc;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: '100%' }}
      role="main-grid"
    >
      <Grid
        item
        container
        direction="row"
        className={classes.bookDetailPage}
      >
        <Grid item direction="column">
          <Box>
            <TypographyComponent variant="body2">
              Get the key ideas from
            </TypographyComponent>
          </Box>

          <Box sx={{ marginTop: '20px' }}>
            <TypographyComponent variant="heading">
              {books?.bookName}
            </TypographyComponent>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <TypographyComponent variant="subtitle5">
              Turning Your Business into an Enduring great Company
            </TypographyComponent>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <TypographyComponent variant="body2">
              By {books?.authorName}
            </TypographyComponent>
          </Box>
          <Box sx={{ marginTop: '12px' }}>
            <BookReadTime readTime={books?.time as string} />
          </Box>
          <Grid
            item
            direction="row"
            sx={{
              marginTop: '80px',
              width: '600px',
            }}
          >
            <Stack direction="row">
              <Box sx={{ marginLeft: '2px' }}>
                <Buttons
                  variant={
                    books?.finished === false &&
                    books?.inLibrary === true
                      ? 'contained'
                      : 'outlined'
                  }
                  sx={{
                    textTransform: 'none',
                    border: '0.5px solid #6D787E',
                  }}
                  onClick={handleReadButton}
                >
                  <TypographyComponent
                    children="Read now"
                    variant="body2"
                  />
                </Buttons>
              </Box>

              <Box sx={{ marginLeft: '20px' }}>
                <Buttons
                  variant={
                    books?.finished === false ||
                    books?.inLibrary === false
                      ? 'outlined'
                      : 'contained'
                  }
                  disableElevation
                  sx={{
                    textTransform: 'none',
                    border: '0.5px solid #6D787E',
                  }}
                  onClick={handleFinishButton}
                >
                  <TypographyComponent
                    children="Finished Reading"
                    variant="body2"
                  />
                </Buttons>
              </Box>

              <Box sx={{ marginLeft: '30px' }}>
                <Buttons
                  variant="text"
                  color="info"
                  disableElevation
                  sx={{ textTransform: 'none' }}
                >
                  <TypographyComponent
                    children="Send to Kindle ->"
                    variant="body2"
                  />
                </Buttons>
              </Box>
            </Stack>

            <Box
              sx={{
                width: '100%',
                typography: 'body1',
                marginTop: '15%',
                marginBottom: '15%',
              }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs "
                  >
                    <CustomTab
                      label="Synopsis"
                      value="1"
                      className={classes.tab}
                    />
                    <CustomTab
                      label="Who is it for?"
                      value="2"
                      className={classes.tab}
                    />
                    <CustomTab
                      label="About the author"
                      value="3"
                      className={classes.tab}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" className={classes.tab}>
                  <TypographyComponent variant="body2">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since galley
                    of type and scrambled it to make a type specimen
                    book.
                  </TypographyComponent>
                </TabPanel>
                <TabPanel value="2" className={classes.tab}>
                  <TypographyComponent variant="body2">
                    Lorem of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a
                    type specimen book.
                  </TypographyComponent>
                </TabPanel>
                <TabPanel value="3" className={classes.tab}>
                  <TypographyComponent variant="body2">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen
                    book.
                  </TypographyComponent>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            height: '304px',
            width: '304px',
            marginTop: '40px',
          }}
        >
          {/* <Box
            component="img"
            // src={require(`../../components/atoms/images/beyondentrepreneurship.png`)}
            src={require(`../../components/atoms/images/${books?.imgsrc}`)}
            alt="Book cover"
          /> */}

          <div>
            <img
              src={require(`../../assets/Images/${nameImg}`)}
              alt="Book cover"
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
