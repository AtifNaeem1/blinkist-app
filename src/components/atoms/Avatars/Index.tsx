import { Avatar } from '@mui/material';

interface AvtProps {
  children: React.ReactNode;
}

const Index = (props: AvtProps) => {
  return (
    <Avatar
      sx={{ width: '40px', height: '40px', bgcolor: '#69A6E3' }}
    >
      {props.children}
    </Avatar>
  );
};

export default Index;
