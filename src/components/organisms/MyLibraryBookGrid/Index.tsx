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
        direction="row"
        rowSpacing={1}
        columnSpacing={1}
        justifyContent="center"
      >
        {props.status === 'reading' &&
          props.location === 'library' &&
          currentlyReadingBooks.map((book: any) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                finished={book.finished}
                inLibrary={book.inLibrary}
                imgsrc={book.imgsrc}
                bookName={book.bookName}
                authorName={book.authorName}
                time={book.title}
                nReads={book.nReads}
                isBookReadAvailable={book.isBookReadAvailable}
                category={book.category}
                subcategory={book.subcategory}
              />
            );
          })}

        {props.status === 'finished' &&
          props.location === 'library' &&
          finishedBooks.map((book: any) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                finished={book.finished}
                inLibrary={book.inLibrary}
                imgsrc={book.imgsrc}
                bookName={book.bookName}
                authorName={book.authorName}
                time={book.title}
                nReads={book.nReads}
                isBookReadAvailable={book.isBookReadAvailable}
                category={book.category}
                subcategory={book.subcategory}
              />
            );
          })}

        {props.location !== 'library' &&
          subcategoryBooks.map((book: any) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                finished={book.finished}
                inLibrary={book.inLibrary}
                imgsrc={book.imgsrc}
                bookName={book.bookName}
                authorName={book.authorName}
                time={book.title}
                nReads={book.nReads}
                isBookReadAvailable={book.isBookReadAvailable}
                category={book.category}
                subcategory={book.subcategory}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Index;
