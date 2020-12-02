import React from 'react'
import {Button, Card, CardBody} from 'reactstrap'
const CardComponent = (props) =>{

    return(
        <div>
            <Card >
                <div onClick={()=> props.upDateUser(props.userid)}>
                <h6>{props.name}</h6>
                <h6>{props.email}</h6>
                </div>
  
                <CardBody> 
                    <Button onClick={() =>props.deleteUser(props.userid)}>Delete</Button>
                    </CardBody>

            </Card>

        </div>
    )
}
export default CardComponent