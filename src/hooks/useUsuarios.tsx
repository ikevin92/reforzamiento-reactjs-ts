import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  //ref para el paginado
  const paginaRef = useRef(1);

  useEffect(() => {
    //llamando api
    cargarUsuarios();
  }, []);

  //funciones
  const cargarUsuarios = async () => {
    try {
      const resp = await reqResApi.get<ReqResListado>('/users', {
        params: {
          page: paginaRef.current,
        },
      });

      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
      } else {
        alert('no hay mas registros');
      }
    } catch (error) {
      paginaRef.current--;
      console.log(error);
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    }
  };

  return {
    usuarios,
    cargarUsuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};

export default useUsuarios;
