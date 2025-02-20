import { SignUp } from "@clerk/nextjs";
import React from "react";
import styles from "./index.module.css";

const RegisterPage = () => {
    return (
        <div className={styles.registerPageContainer}>
            <SignUp signInUrl="/login" />
        </div>
    )
}

export default RegisterPage