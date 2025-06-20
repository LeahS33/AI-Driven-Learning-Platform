import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/thunks/userThunk';
import { Link } from 'react-router-dom';
import '../styles/Login-Signup.css'


const Login = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await dispatch(loginUser({ phone, name })).unwrap();
            navigate('/dashboard');
            //alert('Login successful!');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone"
                    />
                    <button type="submit">Login</button>
                    <Link to="/">to signup</Link>
                    {error && <div className="error" >{error}</div>}
                </form>
            </div>
        </div>
    )
}
export default Login;


//style={{ color: 'red' }}