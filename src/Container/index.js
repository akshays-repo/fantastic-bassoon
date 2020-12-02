import React, { useState } from "react";
import { Container, Row, Col ,Form ,FormGroup , Label ,Input, Button} from "reactstrap";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import CardComponent from "./Card";
import "./style.scss"
const HomePage = () => {
    const [formData , setFormData] = useState ({
      useremailid:'',
      username:'',
      userid:''
    })
    const [errorMsg,  setErrorMsg] = useState(false)
  const [usersList, setUsersList] = useState([])

    // fuction for handle change
   const handleChange = (event) =>{
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value
    }))}

    // function for clear form
   const clearForm = () =>{
    setFormData((formData) => ({
      ...formData,useremailid:'', username:'', userid:usersList.length}))
   }

   const deleteUser = (userid) =>{
    setUsersList(usersList.filter((user) => user.userid !== userid))
  }

   const onSubmit = (event) =>{
    event.preventDefault();
    if (formData.useremailid==='' ||	 formData.username === ''){
      setErrorMsg(true)
    }else{
      setUsersList((usersList) =>([...usersList,formData ]))
      clearForm()
    }
      
    }

   const upDateUser = (userid) =>{
    const ClickedUser = usersList.filter(user => user.userid === userid)
    setFormData((formData) => ({...formData,
      useremailid:ClickedUser[0].useremailid ,
      username:ClickedUser[0].username , 
      userid:ClickedUser[0].userid}));
      deleteUser(userid)
   }
  const DisplayErrorMsg =() =>{
    if (errorMsg) {
      return(
        <div>
          <p style={{color:"red"}}> error , please check the input </p>
        </div>
      )
      
    }
  }

  return (
    <div className="home-page section-padding">
      <Container style={{paddingTop:"100px" , paddingBottom:"100px"}}>
        <Row>
          <Col md={6}>
            {DisplayErrorMsg()}
            <Form>
              <FormGroup>
                <Label for="name">Enter the Name</Label>
                <Input 
                  type="name"
                  name="username"
                  id="name"
                  required
                  onChange={handleChange}
                  value={formData.username}
                />
              </FormGroup>
              <FormGroup>
              <Label for="exampleEmail">Email Id</Label>
                <Input 
                  type="email"
                  name="useremailid"
                  id="Email"
                  onChange={handleChange}
                  value={formData.useremailid}
                />
              </FormGroup>
              <div>
              <Button  className="button" onClick={onSubmit}>Submit</Button>

              </div>
              <div>
              <Button className="button" onClick={clearForm}>Clear</Button>

              </div>


            </Form>
          </Col>
          <Col md={6}>
          {usersList && (usersList.map((user) => (
                    <div key={user.userid} className='p-3'>
                      <CardComponent 
                      name={user.username} 
                      email={user.useremailid} 
                      userid={user.userid} 
                      upDateUser={upDateUser}
                      deleteUser={deleteUser}/>
                      </div> 
            )))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;

