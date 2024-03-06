import React, { Component } from 'react'
import { Button , Form , FormGroup , Label , Input } from 'reactstrap'
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {

    state = {name:"" , email:"" , password:"" , city:"" , description:""}

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.name +" added to db!");
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                            type='name' 
                            name='name' 
                            id='name' 
                            placeholder='What Is Your Name' 
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type='email' 
                            name='email' 
                            id='email' 
                            placeholder='Enter email' 
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            type='password' 
                            name='password' 
                            id='password' 
                            placeholder='Enter password' 
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input 
                            type='textarea' 
                            name='description' 
                            id='description' 
                            placeholder='Enter description' 
                            onChange={this.handleChange}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input 
                            type="select" 
                            name='city' 
                            id='city' 
                            onChange={this.handleChange}>
                                <option>Ankara</option>
                                <option>Konya</option>
                                <option>İstanbul</option>
                                <option>Antalya</option>
                                <option>İzmir</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">KAYDET</Button>
                </Form>
            </div>
        )
    }
}
