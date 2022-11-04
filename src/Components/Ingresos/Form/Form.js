import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { crearIngreso } from '../../../Apis/Firebase';

function GridComplexExample() {

  //const [gasto, setGasto] = useContext([])

  const addIngreso = async () => {
    const email = await document.getElementById("email");
    const contraseña = await document.getElementById("contraseña");
    const ingreso = await document.getElementById("ingreso");
    const valor = await document.getElementById("valor");
    const mes = await document.getElementById("mes");
    const fecha = await document.getElementById("fecha");
    let formOk = true;
    //formOk = checkForm(email.value, contraseña.value, gasto.value, costo.value, mes.value, fecha.value)
    if(formOk){
      const Newingreso = {
        user: email.value,
        ingreso: ingreso.value,
        valor: parseInt(valor.value),
        fecha: fecha.value,
        mes: mes.value
      }
      //await setGasto(Newgasto)
      await crearIngreso(Newingreso).then(id => alert(id)).catch( error => alert(error) )
    }else{
      alert("sadasd");
    }
  }

  /*const checkForm = (mail1, mail2, nombre, telefono) => {
    if(!nombre){
      alert("No ingreso su nombre")
      return(false)
    }
    if(!telefono){
      alert("No ingreso su telefono")
      return(false)
    }
    if(!mail1){
      alert("No ingreso su mail")
      return(false)
    }
    if(!mail2){
      alert("No RE ingreso si mail")
      return(false)
    }
    if(mail1 != mail2){
      alert("No coinciden los mails")
      return(false)
    }
    return(true)
  }*/

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control id='email' type="email" placeholder="Tu mail salchicha" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control id='contraseña' type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Ingreso</Form.Label>
        <Form.Control id='ingreso' type='text' placeholder="De donde viene la plata" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valor</Form.Label>
        <Form.Control id='valor' type='number' placeholder="Cuanto sumamos" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Mes</Form.Label>
          <Form.Control id='mes' placeholder='Mes del ingreso....' />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Fecha</Form.Label>
          <Form.Control id='fecha' type='date' placeholder='Fecha exacta del ingreso' />
        </Form.Group>
      </Row>

      <Button onClick={addIngreso} variant="primary" >
        Agregar Ingreso
      </Button>
    </Form>
  );
}

export default GridComplexExample;