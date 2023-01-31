import React from "react";
import addIcon from "../../images/add.png";
import cancelIcon from "../../images/cancel.png";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

function Orders() {
  return (
    <Card id="containerOrders">
      <Card.Body className="orderForm">
        <Card.Title className="titleOrders">Pedido</Card.Title>
        <Card.Text className="orderDetails">
          <label className="InputOrders">Número de la orden</label>
          <input type="text" name="numOrder" />
          <label className="InputOrders">Nombre del cliente</label>
          <input type="text" name="nameClientOrder" />
          <Table striped bordered hover className="tableHeaderSection"> 
            <table className="tableOrder">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody className="tableBodySection">
                <tr>
                  <td>Huevos rancheros</td>
                  <td>4</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
            </Table>
       <section className="tableOrderTotal">Total: $15</section>
        </Card.Text>
        <section className="buttonsOrder">
        <button type="submit">
          <img
            src={addIcon}
            alt="add"
            style={{ height: "20px", width: "20px" }}
          />
        </button>
        <button >
          <img
            src={cancelIcon}
            alt="cancel"
            style={{ height: "20px", width: "20px" }}
          />
        </button>
        </section>
      </Card.Body>
    </Card>

  );
}

export { Orders };
