import { Box, Grid } from '@mui/material';
import TypographyComponent from '../../atoms/Typography/Index';
import BookGrid from '../MyLibraryBookGrid/Index';

interface Props {
  title: string;
  subCategory: string;
}

const Index = (props: Props) => {
  return (
    <Grid
      item
      sx={{
        width: '100%',
        marginLeft: '10px',
      }}
    >
      <Box sx={{ marginLeft: '8px', marginBottom: '10px' }}>
        <TypographyComponent
          variant="heading3"
          children={props.title}
        />
      </Box>
      <Grid item sx={{ marginTop: '20px' }}>
        <BookGrid
          status="na"
          location="Enterpreneurship Page"
          subCategory={props.subCategory}
        />
      </Grid>
    </Grid>
  );
};

export default Index;
