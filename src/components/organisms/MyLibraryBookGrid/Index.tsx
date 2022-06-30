import { Grid } from '@mui/material';
import axios from 'axios';
import BookCard from '../Cards/BookCard';
import { useEffect, useState } from 'react';

interface Props {
  status: string;
  location: string;
  subCategory: string;
}

const Index = (props: Props) => {
  const [books, setBooks] = useState([] as any);

  useEffect(() => {
    axios
      .get('http://localhost:8000/BookList')
      .then((res) => setBooks(res.data));
  }, []);
  // console.log(books);

  const handleReadButton = async (id: number) => {
    await axios.patch(`http://localhost:8000/BookList/${id}`, {
      finished: false,
      inLibrary: true,
    });
    await axios.get(`http://localhost:8000/BookList`).then((res) => {
      setBooks(res.data);
    });
  };

  const handleFinishButton = async (id: number) => {
    await axios.patch(`http://localhost:8000/BookList/${id}`, {
      finished: true,
      inLibrary: true,
    });
    await axios.get(`http://localhost:8000/BookList`).then((res) => {
      setBooks(res.data);
    });
  };

  const currentlyReadingBooks = books.filter((book: any) => {
    return book.finished === false && book.inLibrary === true;
  });

  const finishedBooks = books.filter((book: any) => {
    return book.finished === true && book.inLibrary === true;
  });

  const subcategoryBooks = books.filter((book: any) => {
    return book.subCategory === props.subCategory;
  });

  return (
    <Grid
      container
      sx={{ width: '950px', alignItems: 'flex-start' }}
      direction="row"
    >
      <Grid
        item
        rowSpacing={1}
        columnSpacing={1}
        justifyContent="center"
      >
        {props.status === 'reading' &&
          props.location === 'library' &&
          currentlyReadingBooks.map((book: any) => {
            return (
              <BookCard
                book={book}
                callingLocation={props.location}
                onClickHandler={handleFinishButton}
              />
            );
          })}

        {props.status === 'finished' &&
          props.location === 'library' &&
          finishedBooks.map((book: any) => {
            return (
              <BookCard
                book={book}
                callingLocation={props.location}
                onClickHandler={handleReadButton}
              />
            );
          })}

        {props.location !== 'library' &&
          subcategoryBooks.map((book: any) => {
            return (
              <BookCard
                book={book}
                callingLocation={props.location}
                onClickHandler={handleReadButton}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Index;
