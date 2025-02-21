import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {

        imgSrc: "/assets/images/big.avif",
        order: 1,
        topic: "Web Design",
        publishedDate: "2 days ago",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "/a"
    },
    {
        imgSrc: "/assets/images/big.jpg",
        order: 2,
        topic: "Web Design",
        publishedDate: "2 days ago",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "/b"
    },
    {
        imgSrc: "/assets/images/one.avif",
        order: 3,
        topic: "Web Design",
        publishedDate: "2 days ago",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        href: "/"
    },
    {
        imgSrc: "/assets/images/two.avif",
        order: 4,
        topic: "Web Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        publishedDate: "2 days ago",
        href: "/"
    },
]

const FeaturedPosts = () => {
    const mainPost = posts.find((post) => post.order === 1);
    const otherPosts = posts.filter((post) => post.order !== 1);
    return (
        <div className={styles.featuredPostsContainer}>
            {
                mainPost && (
                    <Link href={mainPost.href} >
                        <div className={styles.mainPostWrapper}>
                            <Image className={styles.mainImg} src={mainPost.imgSrc} width={450} height={450} alt="blog-photo" />
                            <div className={styles.blogDescArea}>
                                <span className={styles.orderText}>0{mainPost.order}.</span>
                                <span className={styles.topicText}>{mainPost.topic}</span>
                                <span className={styles.dateText}>{mainPost.publishedDate}</span>
                            </div>
                            <p className={styles.desc}>{mainPost.desc}</p>
                        </div>
                    </Link>

                )
            }
            <div className={styles.otherPostsWrapper}>
                {
                    otherPosts && otherPosts.map((post) => (
                        <Link href={post.href}>
                            <div className={styles.otherPostsArea}>
                                <Image className={styles.otherImg} src={post.imgSrc} width={125} height={125} alt="blog-photo" />
                                <div className={styles.otherDescArea}>
                                    <span className={styles.orderText}>0{post.order}.</span>
                                    <span className={styles.topicText}>{post.topic}</span>
                                    <span className={styles.dateText}>{post.publishedDate}</span>
                                    <p className={styles.otherDesc}>{post.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </div>
    )
}
export default FeaturedPosts