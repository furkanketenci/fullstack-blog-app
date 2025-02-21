import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";

const categories = [
    {
        title: "All Posts",
        href: "/a",
        id: 1,
        active: true
    },
    {
        title: "Web Design",
        href: "/b",
        id: 2
    },
    {
        title: "Development",
        href: "/c",
        id: 3
    },
    {
        title: "Databases",
        href: "/",
        id: 4
    },
    {
        title: "Search Engines",
        href: "/",
        id: 5
    },
    {
        title: "Marketing",
        href: "/",
        id: 6
    },
    {
        title: "Search Engines",
        href: "/",
        id: 7
    },
    {
        title: "Web Design",
        href: "/",
        id: 8
    },
    {
        title: "Databases",
        href: "/",
        id: 9
    },
    {
        title: "Marketing",
        href: "/",
        id: 10
    },
    {
        title: "All Posts",
        href: "/",
        id: 11
    },
    {
        title: "Marketing",
        href: "/",
        id: 12
    },
    {
        title: "Marketing",
        href: "/",
        id: 13
    },
    {
        title: "Marketing",
        href: "/",
        id: 14,
    },

]

const MainCategories = () => {
    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.categoriesWrapper}>
                <div className={styles.categories}>
                    {
                        categories.map((ctg) => {
                            return (
                                <Link href={ctg.href}>
                                    <div className={cn(styles.ctgTitle, { [styles.activeCtg]: ctg.active === true })} key={ctg.id}>{ctg.title}</div>
                                </Link>
                            )
                        })
                    }

                </div>
                <span>|</span>
                <input className={styles.searchInput} placeholder="search a post..." />
            </div>
        </div>
    )
}

export default MainCategories