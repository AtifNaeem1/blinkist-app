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
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

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

export default function BookCard(props: BookCardProps) {
  const classes = customStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.Card}>
      <CardActionArea
        href={`http://localhost:3000/bookDetails/${props.id}`}
      >
        <CardMedia
          component="img"
          height="262"
          width="292"
          image={require(`../../../assets/Images/${props.imgsrc}`)}
          alt="green iguana"
        />
        <CardContent>
          <TypographyComponent
            noWrap={true}
            variant="subtitle1"
            children={props.bookName}
            className={classes.bookTitle}
          />
          <TypographyComponent
            variant="body1"
            children={props.authorName}
            className={classes.authorName}
          />
          <Stack direction="row" className={classes.bookReads}>
            <BookReadTime readTime="15-minute read" />
            {props.isBookReadAvailable && <TotalReads />}
          </Stack>
        </CardContent>
        {props.finished === false && props.inLibrary === true && (
          <div>
            <CardActions
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <IconButton aria-label="hamburger">
                <MoreHorizIcon />
              </IconButton>
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
        {props.finished === true && props.inLibrary === true && (
          <div>
            <CardActions
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <IconButton aria-label="hamburger">
                <MoreHorizIcon />
              </IconButton>
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
          </div>
        )}
        {props.inLibrary === false &&
          props.category === 'entrepreneurship' && (
            <AddToLibrary
              handleClick={() => navigate(`/bookDetails/${props.id}`)}
            />
          )}
      </CardActionArea>
    </Card>
  );
}
