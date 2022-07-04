import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TypographyComponent from '../../atoms/Typography/Index';
import { customStyles } from '../../../theme/mainTheme';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface BookReadTimeProps {
  readTime: string;
  children?: string;
  variant?: 'header' | 'title' | 'subtitle' | 'body' | 'caption';
}

const BookReadTime = (props: BookReadTimeProps) => {
  const classes = customStyles();
  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      data-testid="BookReadTime"
    >
      <AccessTimeIcon
        fontSize="small"
        color="action"
        className={classes.timeIcon}
      />
      <TypographyComponent
        variant="caption"
        color="grey"
        className={classes.iconText}
        children={props.readTime}
      />
    </div>
  );
};

export const TotalReads = () => (
  <div
    style={{ display: 'flex', alignItems: 'center' }}
    data-testid="totalReads"
  >
    <PersonOutlineIcon fontSize="small" color="action" />
    <TypographyComponent variant="caption" color="gray">
      1.9k reads
    </TypographyComponent>
  </div>
);

export default BookReadTime;
