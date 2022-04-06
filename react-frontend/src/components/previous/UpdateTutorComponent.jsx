// import React, { Component } from 'react';
// import TutorService from '../services/TutorService';

//     function componentDidMount(){
//         TutorService.getTutorById(this.state.id).then((res) => {
//             let tutor = res.data;
//             this.setState({firstName: tutor.firstName, lastName: tutor.lastName, emailId: tutor.emailId})
//             console.log(`firstName: ${this.state.firstName}`)
//         });
//     }
//     function changeFirstNameHandler = (event) => {
//         this.setState({firstName: event.target.value});
//     }

//     function changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value});
//     }

//     function changeEmailHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     function updateTutor = (e) => {
//         e.preventDefault();
//         let tutor = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, id: this.state.id };
//         console.log('tutor => '+ JSON.stringify(tutor));
//         console.log(`id is: ${this.state.id}`)
//         TutorService.getTutorById(tutor.id, tutor).then((res) => {
//             this.props.history.push('/tutors');
//         });
//     }
//     function cancel(){
//         this.props.history.push('/tutors')
//     }

//     const UpdateTutorComponent = () => {
//         return (
//                 <div >
//                     <div className='container col-lg-8' style={{marginTop:10, border:"1px solid"}}>
//                         <h3 className='text-center'>Edit Tutor</h3>
//                         <form role="form" className='col-lg-6 offset-lg-3'>
//                             <div className='row'>
//                                 <div className='form-group col-xs-4'>
//                                     <label className=''>First Name:</label>                            
//                                     <input placeholder={this.state.firstName} name="firstName" className='form-control'
//                                     value={this.state.firstName} onChange={this.changeFirstNameHandler} />
//                                 </div>
//                             </div>
//                             <div className='row' >
//                                 <div className='form-group col-xs-4'>
//                                 <label className=''>Last Name:</label>
//                                 <input placeholder={this.state.lastName} name="lastName" className='form-control'
//                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                 </div>
//                             </div>
//                             <div className='row' >
//                                 <div className='form-group col-xs-4'>
//                                 <label className=''>Email Address:</label>
//                                 <input placeholder={this.state.emailId} name="emailId" className='form-control'
//                                 value={this.state.emailId} onChange={this.changeEmailHandler}/>
//                                 </div>
//                             </div>
//                                 <br></br>
//                                 <button className='btn btn-success' style={{marginBottom:10}} onClick={this.updateTutor} >Save</button>
//                                 <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}} onClick={this.cancel.bind(this)} >Cancel</button>
                                
//                         </form>                
//                     </div>
//                 </div>
                  
//         );
//     }


// export default UpdateTutorComponent;