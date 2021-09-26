import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <article className="Login">
            <div className="login-grid">
                <div className="desktop sketch"></div>
                <div className="login-card">
                    <h1>Log In</h1>
                    <div>
                        <label>Phone Number : </label>
                        <div><input type="number" name="number"/></div>
                    </div>
                    <div style={{paddingTop: '24px'}}>
                        <p>Don't have an account? <Link to="/signup"><u className="link-hover">Create New Account</u></Link></p>
                    </div>
                    <div className="btn-container">
                        <a href="/home" className="btn primary-btn">Log In</a>
                    </div>
                    <div className="btn-container">
                        <a href="/home" className="btn google-btn"><i style={{marginRight: '16px'}} className="fa fa-google" aria-hidden="true"></i> Login with Google</a>
                    </div>
                </div>
            </div>
        </article>
    );
}
 
export default Login;