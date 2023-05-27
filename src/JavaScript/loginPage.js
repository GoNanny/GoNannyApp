import React, { useState } from 'react';
import '../CSS/loginPage.css'

const LoginPage = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
    const [isAccountCreated, setIsAccountCreated] = useState(false);

    const toggleForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
        setIsAccountCreated(false);
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        // Add your account creation logic here
        setIsAccountCreated(true);
    };

    return (
        <div className="container">
            {!isAccountCreated ? (
                <>
                    {isLoginFormVisible ? (
                        <form className="form__hidden" id="login">
                            <h1 className="form__title"></h1>
                            <div className="form__message form__message--error"></div>
                            <div className="form__input-group">
                                <input
                                    type="text"
                                    id="signupUserName"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Username or email"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <div className="form__input-group">
                                <input
                                    type="password"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Password"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <button className="form__button" type="submit">
                                Continue
                            </button>
                            <p className="form__text">
                                <a href="#" className="form__link">
                                    Forgot your password?
                                </a>
                            </p>
                            <p className="form__text">
                                <a href="#" className="form__link" onClick={toggleForm}>
                                    Don't have an account? Create account
                                </a>
                            </p>
                        </form>
                    ) : (
                        <form className="form" id="createAccount" onSubmit={handleCreateAccount}>
                            <h1 className="form__title">Create Account</h1>
                            <div className="form__message form__message--error">
                                {isAccountCreated && (
                                    <p>Thank you for creating an account!</p>
                                )}
                            </div>
                            <div className="form__input-group">
                                <input
                                    type="text"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Username"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <div className="form__input-group">
                                <input
                                    type="text"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Email Address"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <div className="form__input-group">
                                <input
                                    type="password"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Password"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <div className="form__input-group">
                                <input
                                    type="password"
                                    className="form__input"
                                    autoFocus
                                    placeholder="Confirm Password"
                                />
                                <div className="form__input-error-message"></div>
                            </div>
                            <button className="form__button" type="submit">
                                Continue
                            </button>
                            <p className="form__text">
                                <a
                                    href="#"
                                    className="form__link"
                                    onClick={toggleForm}
                                    id="linkCreateAccount"
                                >
                                    Already have an account? Sign in
                                </a>
                            </p>
                        </form>
                    )}
                </>
            ) : (
                <div className="form__message form__message--success">
                    <p>Thank you for creating an account!</p>
                    <button className="form__button" onClick={toggleForm}>
                        LOGIN
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
