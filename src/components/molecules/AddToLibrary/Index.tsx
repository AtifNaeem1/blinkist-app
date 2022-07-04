import Button from '../../atoms/Button/Index';
import AddIcon from '@mui/icons-material/Add';
import TypographyComponent from '../../atoms/Typography/Index';
import { customStyles } from '../../../theme/mainTheme';

const Index = (props: { handleClick: any }) => {
  const classes = customStyles();

  return (
    <Button
      variant="text"
      startIcon={<AddIcon />}
      className={classes.addToLib}
      onClick={props.handleClick}
      role="AddToLib"
    >
      <TypographyComponent
        variant="body1"
        children="Add to library"
      />
    </Button>
  );
};

export default Index;
