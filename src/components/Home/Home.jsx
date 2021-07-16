import './Home.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function Home(){

  const [Tipodoc, setTipodoc] = useState()
  const [Nmrdoc, setNmrdoc] = useState()
  const [Phone, setPhone] = useState()
  const [Plate, setPlate] = useState()
  const [Terms, setTerms] = useState()
  const [error, setError] = useState()

  let history = useHistory()

  function validarFormulario() {
    let error = {};
    let formularioValido = true;

    if (!Tipodoc) {
        formularioValido = false;
        error['Tipodoc'] = "Por favor, selecciona un tipo de documento.";
    }

    if (!Nmrdoc) {
        formularioValido = false;
        error["Nmrdoc"] = "Por favor, ingresa un numero de documento.";
    }

    if (!Phone) {
        formularioValido = false;
        error["Phone"] = "Por favor, ingresa un Celular.";
    }

    if (!Plate) {
        formularioValido = false;
        error["Placa"] = "Por favor, ingresa un numero de placa.";
    }
    setError({error:error})
  } 
  function handleSubmit (e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Tipodoc,
        Nmrdoc,
        Phone,
        Plate,
        Terms,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        history.push('/ArmaPlan/'+data.Plate)
      });
  }
  return (
    <div className="Home">
      <div className="Home_Content">
        <div className="Hero">
          <img src={'/images/homeImage.svg'} alt='homeimage'></img><br/>
          <p>¡NUEVO! <br></br>
          <h2>Seguro <b>Vehicular Tracking</b></h2><br/>
          <span>Cuentanos donde le haras seguimiento a tu seguro</span>
          </p>
          <span>@ 2021 RIMAC Seguros y Reaseguros</span>
        </div>

        <div className="Form">
          <form onSubmit={handleSubmit}> 
            <h2>Dejanos tus datos</h2>
            <select value={Tipodoc} onChange={(e)=> setTipodoc(e.target.value)}>
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
              <option value="passport">PASAPORTE</option>
            </select>
            <input type="text" value={Nmrdoc} onChange={(e)=> setNmrdoc(e.target.value)} placeholder="Nro. de doc"/><br/>
            <input type="text" value={Phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Celular"/><br/>
            <input type="text" value={Plate} onChange={(e)=> setPlate(e.target.value)} placeholder="Placa" /><br/>
            <input type="checkbox" onChange={(e)=> setTerms(e.target.value)}></input>
            <span>Acepto la <a href="/">Politica de Proteccion de Datos Personales</a> y los <a href="/">Terminos y Condiciones.</a> </span>
            <input type="submit" value="COTIZALO"/><br/>
          </form>
        </div>
      </div>
    </div>
  );
}
