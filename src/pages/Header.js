import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Header() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include', // Added quotes around 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.userName);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:3000/logout', {
            credentials: 'include', // Added quotes around 'include'
            method: 'POST', // Changed 'Method' to 'method'
        });
        setUsername(null);
    }
    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}