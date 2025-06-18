import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { loginUser } from '../store/userSlice';
import { Link } from 'react-router-dom';


const Login = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await dispatch(loginUser({ phone, name })).unwrap();
            alert('Login successful!');
        } catch (err: any) {
            setError(err.message);
            // alert(`Login failed: ${err.message}`);
        }
    };

    return (
        <div>
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
                <Link to="/" style={{ marginLeft: '10px' }}>to signup</Link>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    )
}
export default Login;


