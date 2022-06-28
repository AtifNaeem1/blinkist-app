import { Grid } from '@mui/material';
import { customStyles } from '../../theme/mainTheme';
import Banner from '../../components/organisms/Entrepreneurship-Banner/Index';
import SearchBar from '../../components/molecules/SearchBar/Index';
import BookGrid from '../../components/organisms/EntrepreneurBookGrid/Index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/organisms/Cards/BookCard';

const Index = () => {
  const classes = customStyles();
  const [searchItem, setSearchItem] = useState('');
  const [books, setBooks] = useState([] as any);

  useEffect(() => {
    axios
      .get('http://localhost:8000/BookList')
      .then((res) => setBooks(res.data));
  }, []);

  const bookList = books.filter(
    // eslint-disable-next-line array-callback-return
    (book: { bookName: string; authorName: string }) => {
      if (
        book.bookName
          .toLowerCase()
          .includes(searchItem.toLowerCase()) ||
        book.authorName
          .toLowerCase()
          .includes(searchItem.toLowerCase())
      ) {
        return book;
      }
    }
  );

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
        className={classes.entrepreneur}
        role="main-grid"
      >
        <Grid item sx={{ marginLeft: '10px' }}>
          <Banner />
        </Grid>
        <Grid item className={classes.entrepreneurSearchBar}>
          <SearchBar handleChange={setSearchItem} />
        </Grid>

        {searchItem === '' && (
          <>
            <BookGrid
              title="Trending blinks"
              subCategory="Trending blinks"
            />
            <Grid item sx={{ marginTop: '70px' }}>
              <BookGrid title="Just added" subCategory="just added" />
            </Grid>
            <Grid item sx={{ marginTop: '70px' }}>
              <BookGrid
                title="Featured audio blinks"
                subCategory="Featured"
              />
            </Grid>
          </>
        )}
        {searchItem !== '' && (
          <Grid
            item
            container
            sx={{ width: '950px', alignItems: 'flex-start' }}
            direction="row"
          >
            <Grid
              item
              direction="row"
              rowSpacing={1}
              columnSpacing={1}
              justifyContent="center"
            >
              {' '}
              {bookList.map(
                (books: {
                  id: number;
                  finished: boolean;
                  inLibrary: boolean;
                  imgsrc: string;
                  bookName: string;
                  authorName: string;
                  title: string;
                  time: string;
                  nReads: string;
                  isBookReadAvailable: boolean;
                  category: string;
                  subcategory: string;
                }) => {
                  return (
                    <BookCard
                      book={books}
                      callingLocation="entrepreneurship"
                      onClickHandler={() => {}}
                    />
                  );
                }
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Index;
