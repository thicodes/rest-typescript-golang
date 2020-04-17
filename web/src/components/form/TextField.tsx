import React from 'react';
import { Input } from '@rebass/forms';

type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = (props: Props) => {
  const { name, value, onChange, ...rest } = props;
  return <Input name={name} onChange={onChange} value={value} {...rest} />;
};

export default React.memo(TextField);
