import React, { useEffect, useState } from "react";
// import Avatar from "../avatar/Avatar";
// import Post from "../post/Post";
// import "./Profile.scss";
// import userImg from "../../assets/user.png";
import { useNavigate, useParams } from "react-router";
// import CreatePost from "../createPost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/slices/postsSlice";
import { followAndUnfollowUser } from "../../redux/slices/feedSlice";
// import profilepic from "../../assets/profile.jpg"

function Profile() {
    const navigate = useNavigate();
    const params = useParams();
    const userProfile = useSelector((state) => state.postsReducer.userProfile);
    const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
    const feedData = useSelector((state) => state.feedDataReducer.feedData);
    const dispatch = useDispatch();
    const [isMyProfile, setIsMyProfile] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        dispatch(
            getUserProfile({
                userId: params.userId,
            })
        );
        setIsMyProfile(myProfile?._id === params.userId);
        setIsFollowing(
            feedData?.followings?.find((item) => item._id === params.userId)
        );
    }, [myProfile, params.userId, feedData]);

    function handleUserFollow() {
        dispatch(followAndUnfollowUser({
            userIdToFollow: params.userId
        }))
    }

    return (
        <div className="Profile">
            <div className="flex flex-col md:flex-row lg:flex-row">
                <div className="left-part rounded-md lg:w-50%">
                    {/* {isMyProfile && <CreatePost />}
                    {userProfile?.posts?.map((post) => (
                        <Post key={post._id} post={post} />
                    ))} */}
                    {/* <img src={profilepic} alt="profilepic" className="rounded-md h-8/12"/> */}
                    
                    <img src={myProfile?.avatar?.url}alt="abc" className="w-50% ml-2 mt-10 items-center justify-center lg:w-50% md:w-50% m-auto lg:ml-2 rounded-lg shadow-2xl" style={{ width: 500, height: 450 }}/>
                </div>
                <div className="right-part text-center items-center justify-center lg:w-50% lg:h-40">
                    <div className="profile-card text-center mt-6 lg:mt-40 md:mt-32 lg:ml-44">
                        {/* <img
                            className="user-img"
                            src={userProfile?.avatar?.url}
                            alt="abcd"
                        /> */}
                        <h3 className="user-name text-teal-800 text-2xl">{userProfile?.name}</h3>
                        <p className="bio text-md">{userProfile?.bio}</p>
                        <div className="follower-info flex flex-row gap-7 mt-4 items-center justify-center">
                            <h4>{`${userProfile?.followers?.length} Followers`}</h4>
                            <h4>{`${userProfile?.followings?.length} Followings`}</h4>
                        </div>
                        {!isMyProfile && (
                            <h5
                                style={{marginTop:'10px'}}
                                onClick={handleUserFollow}
                                className={
                                    isFollowing
                                        ? "hover-link follow-link"
                                        : "btn-primary"
                                }
                            >
                                {isFollowing ? "Unfollow" : "Follow"}
                            </h5>
                        )}
                        {isMyProfile && (
                            <div className="bg-rose-600 rounded-md mt-4 items-center justify-center text-center mb-6 w-6/12 mx-auto">
                            <button
                                className="update-profile"
                                onClick={() => {
                                    navigate("/updateProfile");
                                }}
                            >
                                Update Profile

                            </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;