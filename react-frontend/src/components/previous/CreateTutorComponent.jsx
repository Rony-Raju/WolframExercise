// import React, { Component } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TutorService from '../services/TutorService';

// class CreateTutorComponent extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: '',
//             lastName: '',
//             emailId: ''
//         }

//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.changePasswordHandler = this.changePasswordHandler.bind(this);
//         this.saveTutor = this.saveTutor.bind(this);
//     }

//     changeFirstNameHandler= (event) => {
//         this.setState({firstName: event.target.value});
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value});
//     }

//     changeEmailHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     changePasswordHandler= (event) => {
//         this.setState({password: event.target.value});
//     }
//     saveTutor = (e) => {
//         e.preventDefault();
//         let tutor = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
//         console.log('tutor => '+ JSON.stringify(tutor));
//         TutorService.createTutor(tutor).then(res => {
//         });
//     }
    
//     render() {
//         return (
            
//                 <div >
//                     <div className='container col-lg-8' style={{marginTop:10, border:"1px solid"}}>
//                         <h3 className='text-center'>Add Tutor</h3>
//                         <form role="form" className='col-lg-6 offset-lg-3'>
//                             <div className='row'>
//                                 <div className='form-group col-xs-4'>
//                                     <label className=''>First Name:</label>                            
//                                     <input placeholder="First Name" name="firstName" className='form-control'
//                                     value={this.state.firstName} onChange={this.changeFirstNameHandler} />
//                                 </div>
//                             </div>
//                             <div className='row' >
//                                 <div className='form-group col-xs-4'>
//                                 <label className=''>Last Name:</label>
//                                 <input placeholder="Last Name" name="lastName" className='form-control'
//                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                 </div>
//                             </div>
//                             <div className='row' >
//                                 <div className='form-group col-xs-4'>
//                                 <label className=''>Email Address:</label>
//                                 <input placeholder="Email Address" name="emailId" className='form-control'
//                                 value={this.state.emailId} onChange={this.changeEmailHandler}/>
//                                 </div>
//                             </div>
//                             <div className='row' >
//                                 <div className='form-group col-xs-4'>
//                                 <label className=''>Password:</label>
//                                 <input placeholder="Password" name="password" className='form-control'
//                                 value={this.state.password} onChange={this.changePasswordHandler}/>
//                                 </div>
//                             </div>
//                                 <br></br>
//                                 <Link to="/tutors">
//                                     <button className='btn btn-success' style={{marginBottom:10}} onClick={this.saveTutor} >Save</button>
//                                 </Link>
//                                 <Link to="/tutors">
//                                     <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}} >Cancel</button>
//                                 </Link>
                                
                                
//                         </form>                
//                     </div>
//                 </div>
                  
//         );
//     }
// }

// export default CreateTutorComponent;