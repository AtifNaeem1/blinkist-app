import Button from '../../atoms/Button/Index';
import TypographyComponent from '../../atoms/Typography/Index';
import { customStyles } from '../../../theme/mainTheme';

const Index = (props: { handleClick: any; label: string }) => {
  const classes = customStyles();

  return (
    <Button
      variant="text"
      className={classes.finishedReadButton}
      onClick={props.handleClick}
    >
      <TypographyComponent variant="body1" children={props.label} />
    </Button>
  );
};

export default Index;
