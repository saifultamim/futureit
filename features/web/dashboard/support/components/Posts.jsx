"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { fetchPostList } from "../../actions/post";
import { TPostCount, TSupportPost, TSupportPostWithComment } from "../../types/support";
import { useSession } from "next-auth/react";
import { Filter } from "./filter";
import { Icons } from "@/components/Icon";
import { ProfileImagePost } from "./profileImagePost";
import { POST_STATUS } from "@/lib/constant";
import { FaComment } from "react-icons/fa";
import { Comment } from "./comment/comment";

type TFetchPostList = {
    result: {
        posts: TSupportPost[];
        counts: TPostCount[];
    };
};

export const Posts = ({ setIsAction, isAction }: { setIsAction: (isAction: boolean) => void; isAction: boolean }) => {
    const session = useSession();
    const [posts, setPosts] = useState<TSupportPost[] | null>(null);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState("All");
    const [counts, setCounts] = useState<TPostCount[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef<IntersectionObserver>();
    const lastPostRef = useRef<HTMLDivElement>(null);
    const [showComments, setShowComments] = useState<boolean | number | null>(false);
    const [commentIndex, setCommentIndex] = useState<number | null>(null);
    const [expendedPosts, setExpendedPosts] = useState<{ [key: string]: boolean }>({});
    const [showCommentsLoading, setShowCommentsLoading] = useState<boolean>(false);

    // Handle filter change
    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setPage(1); // Reset to first page when filter changes
        setPosts(null); // Clear existing posts
    };

    const fetchPostL = useCallback(async () => {
        try {
            setFetchLoading(true);
            const res = await fetchPostList<TFetchPostList>({
                queryParams: `userId=${session?.data?.user?.id}&page=${page}&limit=${limit}&filter=${filter}`,
            });
            setFetchLoading(false);
            setCounts(res?.result?.counts);

            // Append new posts or set initial posts
            setPosts((prevPosts) => (page === 1 ? (res?.result?.posts as TSupportPostWithComment[]) : [...(prevPosts || []), ...(res?.result?.posts as TSupportPostWithComment[])]));

            // Check if there are more posts
            setHasMore(res?.result?.posts?.length === limit);
        } catch (error) {
            console.error((error as Error).message);
            setFetchLoading(false);
        }
    }, [session?.data?.user?.id, page, limit, filter]);

    // Intersection Observer callback
    const loadMore = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasMore && !fetchLoading) {
                setPage((prevPage) => prevPage + 1);
            }
        },
        [hasMore, fetchLoading],
    );

    // Setup Intersection Observer
    useEffect(() => {
        observer.current = new IntersectionObserver(loadMore, {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        });

        if (lastPostRef.current) {
            observer.current.observe(lastPostRef.current);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [loadMore]);

    // Fetch posts when page, filter, or limit changes
    useEffect(() => {
        if (isAction && session?.data?.user.id) fetchPostL();
    }, [fetchPostL, isAction, session?.data?.user.id]);

    const toggleShowMore = (postId: string | number) => {
        setExpendedPosts((prevState) => ({
            ...prevState,
            [postId]: !prevState[postId],
        }));
    };

    const fetchComments = async (postId: string) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 700));
        } catch (error) {
            console.error("Failed to fetch comments:", error);
        }
    };

    const handleClickComment = (_post: any, _index: number) => {
        if (_post?.xstatus === "Pending") return;

        if (commentIndex === _index) {
            setCommentIndex(null);
            setShowComments(null);
            setShowCommentsLoading(false);
        } else {
            setCommentIndex(_index);
            setShowComments(_index);
            setShowCommentsLoading(true);
            fetchComments(_post?.xsl).then(() => {
                setShowCommentsLoading(false);
            });
        }
    };



    const postsRender = (_posts: TSupportPostWithComment[] = []) => {
        if (fetchLoading) return <SkeletonCard />;
        if (_posts?.length === 0) return <NoPostsFound />;
        return _posts?.map((post: any, index) => (
            <div key={post.xsl} ref={index === _posts.length - 1 ? lastPostRef : null}>
                <div key={index} className={`bg-slate-50 relative border-2 border-gray-300 rounded-xl mb-4 shadow-[0_2px_10px_3px_rgba(0,0,0,0.1)]`}>
                    {/* Question status */}
                    {post?.xstatus == "Solved" && (
                        <div className='absolute top-3 flex flex-col items-center justify-center rounded-full p-1 right-4 bg-[#38b34a]'>
                            <Icons.check className='text-white' />
                        </div>
                    )}
                    {post?.xstatus == "Pending" && (
                        <div className='absolute top-4 flex items-center justify-center rounded shadow-sm px-3 py-[2px] right-4 text-gray-600 text-[12px]'>
                            Pending
                            <span className='animate-pulse delay-100 text-red-300'>.</span>
                            <span className='animate-bounce delay-200 text-red-500'>.</span>
                            <span className='animate-ping delay-300 text-red-700'>.</span>
                        </div>
                    )}

                    {/* User info */}
                    <div className='flex px-4'>
                        <div className='absolute top-[-15px] left-[6%]'>
                            <div className='w-[80px] h-[80px] rounded-full bg-slate-100'>
                                <ProfileImagePost question={post} />
                            </div>
                        </div>

                        <div className='ml-[23%] max-sm:ml-[30%] mt-2'>
                            <h4 className='text-lg font-bold text-[#050506] max-sm:text-[12px]'>{post?.edustudent?.xstuname}</h4>
                            <p className='text-[12px] text-gray-900 max-sm:text-[9px]'> {"Student, Mentors IT"}</p>
                            <p className='text-[12px] text-gray-900 max-sm:text-[9px]'>Student ID: {post?.xstudent}</p>
                        </div>
                    </div>
                    {/* content  */}
                    <div className='px-4 py-5'>
                        {post?.xmessage?.length > 300 ? (
                            <div>
                                <div id='quilljs-editor' dangerouslySetInnerHTML={{ __html: expendedPosts[post.xsl || ""] ? post.xmessage : post.xmessage.slice(0, 300) + "..." }} />
                                <button onClick={() => toggleShowMore(post?.xsl as number)} className='text-blue-500 text-[12px] md:text-[14px] hover:underline'>
                                    {expendedPosts[post.xsl || ""] ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        ) : (
                            <div id='quilljs-editor' dangerouslySetInnerHTML={{ __html: post.xmessage }} />
                        )}
                    </div>
                    {/* action section  */}
                    <div className={`${post?.xstatus == POST_STATUS.PENDING ? "bg-red-400/40" : "bg-red-400"} text-sm max-sm:text-[10px] py-2 px-6  text-white flex justify-between items-center rounded-xl`}>
                        <div className={`${post?.xstatus == POST_STATUS.PENDING ? "" : "cursor-pointer"} w-fit flex items-center gap-1`} onClick={() => handleClickComment(post, index)}>


                            <div className='flex items-center gap-2'>
                                <button className='h-5 w-5 flex justify-center items-center rounded-full'>
                                    <FaComment className='text-white text-[18px]' />
                                </button>
                                <div className='flex items-center gap-1 text-sm'>
                                    <span>Comments</span> <span className='ml-1'>({post?.support_post_comment?.length || 0})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* comment section  */}
                    {commentIndex === index && showComments !== null && <Comment setIsAction={setIsAction} isAction={isAction} post={post} showCommentsLoading={showCommentsLoading} />}
                </div>
            </div>
        ));
    };

    return (
        <div>
            <div>
                <Filter filter={filter} setFilter={handleFilterChange} counts={counts} />
            </div>
            <div className='max-w-[600px] mx-auto mt-14 flex flex-col gap-6'>{postsRender(posts as TSupportPostWithComment[])}</div>
        </div>
    );
};

const SkeletonCard = () => {
    return (
        <div className="flex flex-col gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={`bg-slate-50 relative border-2 border-gray-300 rounded-xl mb-4 shadow-[0_2px_10px_3px_rgba(0,0,0,0.1)] animate-pulse`}>

                    {/* Question status */}
                    <div className="absolute top-3 right-4 flex flex-col items-center justify-center rounded-full p-1 bg-slate-200">
                        <div className="w-6 h-6 bg-slate-100 rounded-full"></div>
                    </div>

                    {/* User info */}
                    <div className="flex px-4">
                        <div className="absolute top-[-15px] left-[6%]">
                            <div className="w-[80px] h-[80px] rounded-full bg-slate-100 animate-pulse"></div> 
                        </div>

                        <div className="ml-[23%] max-sm:ml-[30%] mt-2">
                            <div className="w-24 h-5 bg-slate-100 animate-pulse mb-2"></div>
                            <div className="w-32 h-4 bg-slate-100 animate-pulse mb-1"></div>
                            <div className="w-40 h-4 bg-slate-100 animate-pulse"></div> 
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 py-5">
                        <div className="w-full h-5 bg-slate-100 animate-pulse mb-2"></div> 
                        <div className="w-20 h-5 bg-slate-100 animate-pulse"></div> 
                    </div>

                    {/* Action section */}
                    <div className="bg-red-400/40 text-sm max-sm:text-[10px] py-2 px-6 text-white flex justify-between items-center rounded-xl">
                        <div className="w-24 h-5 bg-slate-100/50 animate-pulse"></div> 
                        <div className="w-12 h-5 bg-slate-100/50 animate-pulse"></div> 
                    </div>

                </div>
            ))}
        </div>
    );
};

const NoPostsFound = () => {
    return (
        <div className='flex justify-center items-center min-h-[50vh]'>
            <div className='flex flex-col items-center gap-2 border border-red-200/85 rounded-xl px-4 py-6 min-w-[300px] mx-auto'>
                <div className=''>
                    <Icons.alert2 className='text-yellow-500 text-4xl' />
                </div>

                <h4 className='text-center text-gray-500 text-lg'>No Posts Found</h4>
            </div>
        </div>
    );
};

Posts.displayName = "Posts";
