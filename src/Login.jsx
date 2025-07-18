function Login() {
    return (
        <form className="login">
            <h2>Login</h2>
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

export default Login;
