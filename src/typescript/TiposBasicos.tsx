const TiposBasicos = () => {
  const nombre: string = 'Kevin';
  const edad = 35;
  const estaActivo = true;

  const poderes: (string | number)[] = []; //['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <div>
      <h2>Tipos Basicos</h2>
      {nombre} {edad} {estaActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </div>
  );
};

export default TiposBasicos;
