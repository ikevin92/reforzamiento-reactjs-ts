import { useEffect, useReducer } from 'react';
import { setTimeout } from 'timers';

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
};

type LoginPayload = {
  username: string;
  nombre: string;
};

// types
type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

//reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        ...state,
        validando: false,
        token: null,
        username: '',
        nombre: '',
      };
    case 'login':
      const { nombre, username } = action.payload;
      return {
        ...state,
        validando: false,
        token: 'ABC123',
        username,
        nombre,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { validando, token, nombre } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  // funciones
  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        username: 'koecheverri',
        nombre: 'Kevin',
      },
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  return (
    <>
      <h3>Login</h3>
      {validando && <div className='alert alert-info'>Validando...</div>}

      {token && !validando ? (
        <>
          <div className='alert alert-success'>Autenticado como: {nombre}</div>
          <button className='btn btn-danger' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className='alert alert-danger'>No autenticado...</div>
          <button className='btn btn-primary' onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
