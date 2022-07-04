import { Button, ButtonProps } from '@mui/material';

const Index = ({ children, ...rest }: ButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default Index;
