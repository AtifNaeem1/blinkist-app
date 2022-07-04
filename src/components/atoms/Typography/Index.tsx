import { Typography, TypographyProps } from '@mui/material';

const Index = (props: TypographyProps) => {
  return (
    <Typography
      variant={props.variant}
      className={props.className}
      width={props.width}
      noWrap={props.noWrap}
      role="Typography"
    >
      {props.children}
    </Typography>
  );
};

export default Index;
