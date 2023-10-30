import { useState } from 'react';
import Alert from './Alert';

const Formulario = ({tipoAlerta, mensajeAlerta}) => {

//Estados del formulario
const [nombre, setNombre] = useState('');
const [mail, setMail] = useState('');
const [password1, setPass1] = useState('');
const [password2, setPass2] = useState('');
const [alerta, setAlerta] = useState('');
const [mensaje, setMensaje] = useState('');
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//Estado para los errores
const [error, setError] = useState(false);

//Función antes de enviar el formulario
const validarDatos = (e) => {

    e.preventDefault();
//Validación;
    if (nombre === '' || mail === '' || password1 === '' || password2 === '')
    {
         setError(true);
         setAlerta("alert alert-danger");
         setMensaje("Error: debe completar todos los datos!!");
         
     return;
    } 
// verificar si las Password son distintas
        else if (password1 != password2) {
                    setError(false);
                    setAlerta("alert alert-danger");
                    setMensaje("Error: Las password deben ser iguales");
                    return
                 }
// verificar formato de email
                else if (!regex.test(mail)) {
                setAlerta("alert alert-danger");
                    setMensaje("Error: El e-mail ingresado no es valido");
            } 
else {
    setError(false);
    setAlerta("alert alert-success");
    setMensaje("Los datos se Ingresaron correctamente");}

// Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setNombre('');
    setMail('');
    setPass1('');
    setPass2('');

};

return (
        <>
            <div>
                <form className="formulario" onSubmit={validarDatos}>
                    
                        <div className="form-group">
                            <input type="text" name="nombre" className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </div> <br />
                        <div className="form-group">
                            <input type="mail" name="mail" className="form-control" placeholder="tumail@ejemplo.com" onChange={(e) => setMail(e.target.value)} value={mail}/>
                        </div><br />
                        <div className="form-group">
                        
                            <input type="password" name="password1" className="form-control" placeholder="Contraseña" onChange={(e) => setPass1(e.target.value)} value={password1}/>
                        </div><br />
                        <div className="form-group">
                    
                            <input type="password" name="password2" className="form-control" placeholder="Confirma tu contraseña" onChange={(e) => setPass2(e.target.value)} value={password2}/>
                        </div><br />
                        <button type="submit" className="btn btn-primary"> Enviar </button>
                </form>
            </div>            
                <br />
                <div><Alert 
                    tipoAlerta={alerta}
                    mensajeAlerta={mensaje}
                            ></Alert></div>
        </>
        );
    };
export default Formulario;