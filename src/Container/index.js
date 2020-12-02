import React, { useEffect, useState } from "react";
import { Container, Row, Col ,Form ,FormGroup , Label ,Input, Button} from "reactstrap";
import CardComponent from "../Components/Card";
const HomePage = () => {
    const [formData , setFormData] = useState ({
      useremailid:'',
      username:'',
      userid:''
    })
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
      ...formData,useremailid:'', username:'', userid:''}))
   }
  
   const onSubmit = (event) =>{
    event.preventDefault();
    if(formData.userid === ''){
      const newuserid = usersList.length
      setFormData((formData) => ({...formData,userid:newuserid}));
      setUsersList((usersList) =>([...usersList,formData ]))
      clearForm()
    }
   }
   const upDateUser = (userid) =>{
    console.log("hy",userid)
    const ClickedUser = usersList.filter(user => user.userid === userid)
    setFormData((formData) => ({...formData,
      useremailid:ClickedUser[0].useremailid ,
      username:ClickedUser[0].username , 
      userid:ClickedUser[0].userid}));
      console.log(formData)
      console.log(ClickedUser[0])
   }
   const deleteUser = (userid) =>{
    setUsersList(usersList.filter((user) => user.userid !== userid))
  }
  return (
    <div className="home-page">
      <Container>
        <Row>
          <Col md={6}>
            <Form>
              <FormGroup>
                <Label for="name">Enter the Name</Label>
                <Input required
                  type="name"
                  name="username"
                  id="name"
                  onChange={handleChange}
                  value={formData.username}
                />
              </FormGroup>
              <FormGroup>
              <Label for="exampleEmail">Email Id</Label>
                <Input required
                  type="email"
                  name="useremailid"
                  id="Email"
                  onChange={handleChange}
                  value={formData.useremailid}
                />
              </FormGroup>
              <Button onClick={clearForm}>Clear</Button>
              <Button onClick={onSubmit}>Submit</Button>
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
