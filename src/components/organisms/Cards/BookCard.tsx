import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import TypographyComponent from '../../atoms/Typography/Index';
import BookReadTime, {
  TotalReads,
} from '../../molecules/BookReadTime/BookReadTime';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { customStyles } from '../../../theme/mainTheme';

import { Box, CardActionArea, Grid, Stack } from '@mui/material';
import AddToLibrary from '../../molecules/AddToLibrary/Index';
import { NavLink, useNavigate } from 'react-router-dom';
import FinishedReadButton from '../../molecules/FinishedReadAgainButton/Index';
import axios from 'axios';

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

export default function BookCard(props: {
  book: BookCardProps;
  callingLocation: string;
  onClickHandler: any;
}) {
  const classes = customStyles();
  const navigate = useNavigate();
  let link = '/bookDetails/' + props.book.id;

  const handleReadButton = async () => {
    await axios.patch(
      `http://localhost:8000/BookList/${props.book.id}`,
      {
        finished: false,
        inLibrary: true,
      }
    );
    navigate(`/BookDetails/${props.book.id}`);
  };

  const handleFinishButton = async () => {
    await axios.patch(
      `http://localhost:8000/BookList/${props.book.id}`,
      {
        finished: true,
        inLibrary: true,
      }
    );

    navigate(`/BookDetails/${props.book.id}`);
  };

  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <NavLink to={link}>
          <CardMedia
            component="img"
            height="262"
            width="292"
            image={require(`../../../assets/Images/${props.book.imgsrc}`)}
            alt="green iguana"
          />
        </NavLink>

        <CardContent>
          <TypographyComponent
            noWrap={true}
            variant="subtitle1"
            children={props.book.bookName}
            className={classes.bookTitle}
          />
          <TypographyComponent
            variant="body1"
            children={props.book.authorName}
            className={classes.authorName}
          />
          <Stack direction="row" className={classes.bookReads}>
            <BookReadTime readTime="15-minute read" />
            {props.book.isBookReadAvailable && <TotalReads />}
          </Stack>
        </CardContent>

        {props.book.finished === false &&
          props.book.inLibrary === true && (
            <div>
              <CardActions
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {props.callingLocation === 'library' ? (
                  <FinishedReadButton
                    handleClick={handleFinishButton}
                    label="Finished"
                  />
                ) : (
                  <IconButton aria-label="hamburger">
                    <MoreHorizIcon />
                  </IconButton>
                )}
              </CardActions>
              <div>
                <Grid container direction="row">
                  <Grid
                    item
                    xs={4}
                    sx={{ backgroundColor: '#E1ECFC', mt: 0 }}
                  />
                  <Grid
                    item
                    xs={8}
                    sx={{
                      background: '#F1F6F4',
                      border: '1px solid #E1ECFC',
                      height: '17px',
                    }}
                  />
                </Grid>
              </div>
            </div>
          )}
        {props.book.finished === true &&
          props.book.inLibrary === true && (
            <>
              <CardActions
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {props.callingLocation === 'library' ? (
                  <FinishedReadButton
                    handleClick={handleReadButton}
                    label="Read again"
                  />
                ) : (
                  <IconButton aria-label="hamburger">
                    <MoreHorizIcon />
                  </IconButton>
                )}
              </CardActions>
              <div>
                <Box
                  sx={{
                    backgroundColor: '#E1ECFC',
                    border: '1px solid #E1ECFC',
                    height: '17px',
                  }}
                />
              </div>
            </>
          )}
        {props.book.inLibrary === false &&
          props.book.category === 'entrepreneurship' && (
            <AddToLibrary
              handleClick={() =>
                navigate(`/bookDetails/${props.book.id}`)
              }
            />
          )}
      </CardActionArea>
    </Card>
  );
}
