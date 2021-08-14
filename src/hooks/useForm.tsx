import { useState } from 'react';

const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const handleOnChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    handleOnChange,
  };
};

export default useForm;
