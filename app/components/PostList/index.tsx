import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";


const postList = [
    {
        imgSrc: "/assets/images/big.avif",
        topic: "Web Design",
        publishedDate: "2 days ago",
        author: "John Doe",
        href: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgSrc: "/assets/images/big.avif",
        topic: "Web Design",
        publishedDate: "2 days ago",
        author: "John Doe",
        href: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgSrc: "/assets/images/big.avif",
        topic: "Web Design",
        publishedDate: "2 days ago",
        author: "John Doe",
        href: "/",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const PostList = () => {

    return (
        <div className={styles.postListContainer}>
            <div className={styles.generalTitle}>RECENT POSTS</div>
            <div>
                {
                    postList.map((post) => {
                        return (
                            <Link href={"/posts/test"} >
                                <div className={styles.postListWrapper}>
                                    <Image
                                        className={styles.postImage}
                                        src={post.imgSrc}
                                        width={200}
                                        height={200}
                                        alt="post-image" />
                                    <div>
                                        <div className={styles.desc}>{post.desc}</div>
                                        <div className={styles.subDesc}>Written by <span className={styles.spesificPart}>{post.author}</span> on <span className={styles.spesificPart}>{post.topic}</span> <span>{post.publishedDate}</span></div>
                                        <div className={styles.content}>{post.desc}</div>
                                        <div className={styles.readMore}>Read More</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostList