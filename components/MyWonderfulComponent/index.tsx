import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { MyTypographyWithNoSSR } from '../MyTypography';
import Paper from 'material-ui/Paper';

interface ComponentProps {
  id: number;
  options: any;
  count: number;
  color: string;
  text: string;
}

export const Page: FC<ComponentProps> = ({ id, options, count, color, text }) => {
  return <MyWonderfulComponent id={id} options={options} count={count} color={color} text={text} />;
};

const MyWonderfulComponent: FC<ComponentProps> = ({ id, options, count, color, text }) => {
  const [summ, setSumm] = React.useState(count);

  React.useEffect(() => {
    if (
      id &&
      options &&
      options.params &&
      options.params.fields &&
      options.params.fields.isDynamic
    ) {
      setSumm(summ + 1);
    }
  }, [options, id]);

  return (
    <>
      <MyTypographyWithNoSSR color={color}>Hello World!</MyTypographyWithNoSSR>
      <Grid>
        <Grid item xs={12}>
          {text}
        </Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  );
};
