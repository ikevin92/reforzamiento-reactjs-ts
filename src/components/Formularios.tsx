import useForm from '../hooks/useForm';

const Formularios = () => {
  const { handleOnChange, formulario, email, password } = useForm({
    email: 'ikevin1992@gmail.com',
    password: '12345',
  });

  return (
    <>
      <h2>Formularios</h2>
      <input
        type='text'
        placeholder='Email'
        className='form-control'
        value={email}
        onChange={({ target }) => handleOnChange(target.value, 'email')}
      />
      <input
        type='text'
        placeholder='Password'
        className='form-control mt-2 mb-2'
        value={password}
        onChange={({ target }) => handleOnChange(target.value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};

export default Formularios;
