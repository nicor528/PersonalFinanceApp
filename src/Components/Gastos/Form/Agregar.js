import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { crearGasto } from '../../../Apis/Firebase';

function GridComplexExample() {

  //const [gasto, setGasto] = useContext([])

  const addGasto = async () => {
    const email = await document.getElementById("email");
    const contraseña = await document.getElementById("contraseña");
    const gasto = await document.getElementById("gasto");
    const costo = await document.getElementById("costo");
    const mes = await document.getElementById("mes");
    const fecha = await document.getElementById("fecha");
    let formOk = true;
    //formOk = checkForm(email.value, contraseña.value, gasto.value, costo.value, mes.value, fecha.value)
    if(formOk){
      const Newgasto = {
        user: email.value,
        gasto: gasto.value,
        costo: parseInt(costo.value),
        fecha: fecha.value,
        mes: mes.value
      }
      //await setGasto(Newgasto)
      await crearGasto(Newgasto).then(id => alert(id)).catch( error => alert(error) )
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
        <Form.Label>Gasto</Form.Label>
        <Form.Control id='gasto' type='text' placeholder="En que gastaste" />
      </Form.Group>

      <div className="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>Costo</Form.Label>
        <Form.Control id='costo' type='number' placeholder="Cuanto gastasteeeeeeee" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Mes</Form.Label>
          <Form.Control id='mes' placeholder='Mes del gasto....' />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Fecha</Form.Label>
          <Form.Control id='fecha' type='date' placeholder='Fecha exacta del gasto' />
        </Form.Group>
      </Row>

      <Button onClick={addGasto} variant="primary" >
        Agregar Gasto
      </Button>
    </Form>
  );
}

export default GridComplexExample;