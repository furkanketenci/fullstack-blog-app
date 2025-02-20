import { SignIn } from "@clerk/nextjs";
import React from "react";
import styles from "./index.module.css";

const LoginPage = () => {
    return (
        <div className={styles.loginPageContainer}>
            <SignIn signUpUrl="/register" />
        </div>
    )
}

export default LoginPage