import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';
// import { useNavigate } from 'react-router-dom'; //TODO: use this to redirect to home page after login

function RegisterForm() {
    const [inputError, setInputError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigateAfterLogin = useNavigate() //TODO: use this to redirect to home page after login

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                // navigateAfterLogin('/') //TODO: use this to redirect to home page after login
            })
            .catch((error) => {
                setInputError(true);
                console.log(error.message)
            });
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control"
                       id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email" onChange={e=> setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">This is a test project, please do not use your real data.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control"
                       id="exampleInputPassword1" placeholder="Password"
                       onChange={e=> setPassword(e.target.value)}/>
            </div>
            //TODO: add password confirmation
            <button type="submit" className="btn btn-primary">Submit</button>
            {inputError && <div className="alert alert-danger">Login details are incorrect</div>} //TODO: change massage to smth with details
        </form>
    );
}

export default RegisterForm;