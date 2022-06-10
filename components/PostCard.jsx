/* Imports */

import moment from "moment";

import { MdOutlineComment, MdAccessTime } from "react-icons/md";

/* Main Component */

const PostCard = ({ post }) => {
    return (
        <div className="w-[280px] min-w-[280px] border border-white shadow-shadow-1 rounded-2xl snap-center md:w-[340px] md:min-w-[340px]">
            <div className="relative rounded-tl-2xl rounded-tr-2xl">
                <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-auto rounded-tl-2xl rounded-tr-2xl"
                />

                <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-2xl bg-carolina-blue text-white text-sm">
                    {post.category}
                </span>
            </div>

            <div className="py-4 px-5">
                <h3 className="text-cadet text-xl mb-4">{post.title}</h3>

                <div className="flex justify-between items-center text-independence">
                    <p className="flex items-center gap-x-2 text-sm">
                        <span className="text-base">
                            <MdAccessTime />
                        </span>{" "}
                        <span>
                            {moment(post.publicationDate).format(
                                "MMMM DD,YYYY"
                            )}
                        </span>
                    </p>

                    <p className="flex items-center gap-x-2 text-sm">
                        <span className="text-base">
                            <MdOutlineComment />
                        </span>{" "}
                        <span>{post.numberOfComments}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

/* Exports */

export default PostCard;
