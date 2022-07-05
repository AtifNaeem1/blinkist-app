import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import CustomAvatar from '../../atoms/Avatars/Index';

interface PropsAvatarWithIcon {
  logClick: boolean;
  handleLogin: any;
}

const Index = (props: PropsAvatarWithIcon) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '62px',
        height: '40px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      data-testid="avatarLogin"
    >
      <Button disableRipple={true} onClick={props.handleLogin}>
        <CustomAvatar children="A" />

        {props.logClick ? (
          <KeyboardArrowDownIcon
            sx={{ color: '#042330', width: '24px', height: '22px' }}
          />
        ) : (
          <>
            <KeyboardArrowUpIcon
              sx={{ color: '#042330', width: '24px', height: '22px' }}
            />
            <Button
              disableRipple={true}
              variant="contained"
              sx={{
                position: 'absolute',
                top: '50px',
                right: '24%',
                background: 'white',
                textTransform: 'none',
              }}
              onClick={() => {
                props.handleLogin();
              }}
            >
              LogOut
            </Button>
          </>
        )}
      </Button>
    </div>
  );
};

export default Index;
