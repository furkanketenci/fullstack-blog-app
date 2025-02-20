"use client"
import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { useIsMobile } from "@/app/hooks/useMediaQuery";

const menuLinks = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Trending",
        href: "/"
    },
    {
        id: 3,
        title: "Most Popular",
        href: "/"
    },
    {
        id: 4,
        title: "About",
        href: "/"
    },

]
const Navbar = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const isMobile = useIsMobile();

    const mobileMenuAreaTrigger = () => {
        setIsOpenMobileMenu(!isOpenMobileMenu)
    }

    return (
        <>
            <nav style={{ height: isMobile ? 25 : "" }} className={styles.navbarContainer}>
                <div className={styles.logoDesc}>furkanblog.</div>
                {
                    !isMobile && <ul className={styles.links}>
                        {
                            menuLinks.map((menu) => {
                                return (
                                    <Link href={menu.href} className={styles.link} key={menu.id}>{menu.title}</Link>
                                )
                            })
                        }
                        <button className={styles.loginBtn}>
                            Login
                        </button>
                    </ul>
                }
                {/* Mobile menü area start */}
                {
                    isMobile && (
                        <>
                            <div onClick={mobileMenuAreaTrigger} className={styles.mobileMenuIcon}>{isOpenMobileMenu ? "x" : "☰"}</div>
                        </>
                    )
                }

            </nav>
            {isOpenMobileMenu && (
                <div className={styles.mobileMenuLinks}>
                    {
                        menuLinks.map((menu) => {
                            return (
                                <Link href={menu.href} className={styles.mobileLink} key={menu.id}>{menu.title}</Link>
                            )
                        })
                    }
                    <button className={styles.mobileLoginBtn}>
                        Login
                    </button>
                </div>
            )}
            {/* Mobile menü area end */}
        </>
    )
}

export default Navbar