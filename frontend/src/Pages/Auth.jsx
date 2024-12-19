import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';
import { loginAPI } from '../services/allAPI';

function Auth({ register }) {

    const isRegisterForm = register ? true : false
    const navigate = useNavigate()
    const[userData,setUserData]=useState({
        username:"",email:"",password:""
    })

    const handleRegister= async(e)=>{
        e.preventDefault();

        const{username,email,password}=userData
        if(!username || !email || !password){
            toast.info("Please fill missing fields")
        }else{
            // api call
            const result = await registerAPI(userData)
            console.log(result);
            if(result.status==200){
                toast.success(`${result.data.username} has successfully registered`)
                setUserData({username:"",email:"",password:""})
                navigate('/login')
            }else{
                toast.error(result.response?.data || "Registration failed");
            }
        }
    }

    const handleLogin=async(e)=>{
        e.preventDefault()
        const{email,password}=userData
        if(!email || !password){
            toast.info("Please fill missing fields")
        }else{

            try {
                // proceed to api call
                const result = await loginAPI({email,password})
                if(result.status==200){
                    sessionStorage.setItem("username",result.data.existingUser.username)
                    sessionStorage.setItem("token",result.data.token)
                    setUserData({username:"",email:"",password:""})
                    navigate('/')
                }else{
                    toast.warning(result.response.data)
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <>

            <div className="d-flex justify-content-center align-items-center">
                <div className="w-75 container">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bolder' }}><i class='fa-solid fa-arrow-left me-2' ></i>Back to Home</Link>
                    <div className="card shadow p-5 bg-primary">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133864422/original/c9a1a1b77074e9b2d1b60943e0549eb24287b7f1/solve-your-every-problem-of-you-web.jpg" alt="" width={'100%'} className='rounded-start' />
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center flex-column">
                                    <h3 className="display-4 fw-bold text-light mt-3"><i className="fa-solid fa-list-check me-2"></i>Project-Fair</h3>
                                    <h5 className='text-light fw-bolder text-center'>
                                        {
                                            isRegisterForm ? 'Sign-Up to your Account' : 'Sign-In to your Account'
                                        }
                                    </h5>
                                    <Form className="text-light w-100">
                                        {
                                            isRegisterForm &&
                                            <Form.Group className="mb-3" controlId="ControlInputName">
                                                <Form.Control type="text" placeholder="Enter your name" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />
                                            </Form.Group>
                                        }
                                        <Form.Group className="mb-3" controlId="ControlInputEmail">
                                                <Form.Control type="email" placeholder="Enter your email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                                            </Form.Group>
                                        <Form.Group className="mb-3" controlId="ControlInputpswd">
                                                <Form.Control type="password" placeholder="Enter your Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                                            </Form.Group>
                                            {
                                                isRegisterForm ? <div>
                                                    <button className='btn btn-warning text-light' onClick={handleRegister}>Register</button>
                                                    <p>Already have an account ? Click here to <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login</Link></p>
                                                </div> : <div>
                                                    <button className='btn btn-success' onClick={handleLogin}>Login</button>
                                                    <p>New User ? Click here to <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>Register</Link></p>
                                                </div>
                                            }
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </>
    )
}

export default Auth