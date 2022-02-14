import React, { useState } from "react";

const Auth = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("user");
    const [status, setStatus] = useState(isAuth);

    const onLogIn = () => {
        localStorage.setItem("user", true);
        setStatus(!status);
    };

    const onLogOut = () => {
        localStorage.getItem("user", false);
        setStatus(!status);
    };

    return (
        <>
            {status ? (
                <SimpleComponent {...props} onClick={onLogOut} name="LogOut" />
            ) : (
                <SimpleComponent {...props} onClick={onLogIn} name="LogIn" />
            )}
        </>
    );
};

export default Auth;
