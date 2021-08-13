// type, class, interface
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casa: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Kevin',
    edad: 28,
    direccion: {
      pais: 'Colombia',
      casa: 416,
    },
  };

  return (
    <div>
      <h3>Objetos literales</h3>
      {/* {JSON.stringify(persona)} */}
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
};

export default ObjetosLiterales;
