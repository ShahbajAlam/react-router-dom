function Register() {
    return (
        <form className="register">
            <h2>Register</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
