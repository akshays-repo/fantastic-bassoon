import React from 'react'
import {Button, Card, CardBody , Row ,Col} from 'reactstrap'
import './style.scss'
const CardComponent = (props) =>{

    return(
        <div className="cards">
            <Row>
                <Col >
                <Card className="card-propery" >
                <div onClick={()=> props.upDateUser(props.userid)}>

                <h6 style={{color:'#b917ff'}}>{props.name}</h6>
                <h6 style={{color:"#ff30dd"}}>{props.email}</h6>
                </div>
  
                <CardBody> 
                    <Button className="button"  onClick={() =>props.deleteUser(props.userid)}>Delete</Button>
                </CardBody>

            </Card>
                </Col>
            </Row>
            

        </div>
    )
}
export default CardComponent