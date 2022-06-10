/* Imports */

import { PostCard } from "../components";

/* Dummy Data */

const posts = [
    {
        id: 1,
        title: "Opening of new offices of the company",
        cover: "/images/blog/blog-1.jpg",
        category: "Company",
        publicationDate: "2022-01-14",
        numberOfComments: "114",
    },

    {
        id: 2,
        title: "What cars are most vulnerable",
        cover: "/images/blog/blog-2.jpg",
        category: "Repair",
        publicationDate: "2022-01-09",
        numberOfComments: "209",
    },

    {
        id: 3,
        title: "What´s required when renting a car?",
        cover: "/images/blog/blog-3.jpg",
        category: "Cars",
        publicationDate: "2022-01-02",
        numberOfComments: "143",
    },

    {
        id: 4,
        title: "New rules for handling our cars",
        cover: "/images/blog/blog-4.jpg",
        category: "Cars",
        publicationDate: "2021-12-03",
        numberOfComments: "75",
    },
];

/* Main Component */

const Blog = () => {
    return (
        <div className="pt-12 px-8">
            <div>
                <h3 className="text-cadet text-3xl mb-12">Our Blog</h3>
            </div>

            <div
                id="blog"
                className="flex gap-10 mb-12 pb-8 overflow-x-auto snap-x snap-mandatory"
            >
                {posts.map((post) => (
                    <PostCard key={post.id + post.title} post={post} />
                ))}
            </div>
        </div>
    );
};

/* Exports */

export default Blog;
