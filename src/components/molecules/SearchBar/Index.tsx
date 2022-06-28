import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '../../../assets/Images/SearchIcon.png';
interface SearchProps {
  handleChange: any;
}

const SearchBar = (props: SearchProps) => {
  return (
    <Box
      sx={{
        marginBottom: '80px',
        marginLeft: '10px',
        width: '658px',
      }}
    >
      <TextField
        fullWidth
        placeholder="Search by title or author"
        inputProps={{
          sx: {
            '&::placeholder': {
              color: '#3A4649',
              fontSize: '24px',
              fontWeight: 700,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                component="img"
                src={SearchIcon}
                sx={{ width: '23.7px', height: '23.7px' }}
              />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={(event) => {
          props.handleChange(event.target.value);
        }}
      />
    </Box>
  );
};

export default SearchBar;
