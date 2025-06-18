import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { SignupUser } from '../store/userSlice';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await dispatch(SignupUser({ name, phone, })).unwrap();
            alert('Signup successful!');
        } catch (err: any) {
            setError(err.message);
            // alert(`Signup failed: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
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
                <button type="submit">Signup</button>
                <Link to="/login" style={{ marginLeft: '10px' }}>to login</Link>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    )
}
export default Signup;


