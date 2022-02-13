import { makeStyles } from '@mui/styles';
import Typography, { TypographyProps } from '@mui/material//Typography';
import dynamic from 'next/dynamic';

interface PropsColor {
  color: string;
}

const useStyles = makeStyles({
  root: {
    color: (props: PropsColor) => props.color,
  },
});

function MyTypography(props: PropsColor & Omit<TypographyProps, keyof PropsColor>) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Typography variant="h1" className={classes.root} {...other} />;
}

export default MyTypography;

export const MyTypographyWithNoSSR = dynamic(() => import('./MyTypography'), {
  ssr: false,
});
