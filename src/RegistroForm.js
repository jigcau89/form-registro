import './App.css';

const RegistroForm = () => {
  return (
    <div className='login-box'>

      <div >
        <h2>Formulario de Registro</h2>
      </div>
      <form >
        <div className='user-box'>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>

        <div className='user-box'>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>

        <div className='user-box'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className='user-box'>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>

        <div className='user-box'>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className='user-box'>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        {/* <button type="submit">Registrarse</button> */}
        <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Registrarse
    </a>
      </form>
    </div>
  );
}

export default RegistroForm;
