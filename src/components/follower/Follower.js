import React, { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import "./Follower.scss";
import { useSelector, useDispatch } from "react-redux";
import { followAndUnfollowUser } from "../../redux/slices/feedSlice";
// import { useNavigate } from "react-router";

function Follower({ user }) {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const feedData = useSelector((state) => state.feedDataReducer.feedData);
    const [isFollowing, setIsFollowing] = useState();

    useEffect(() => {
        setIsFollowing(
            feedData.followings.find((item) => item._id === user._id)
        );
    }, [feedData]);

    function handleUserFollow () {
        dispatch(followAndUnfollowUser({
            userIdToFollow: user._id
        }))
    }

    return (
        <div className="flex flex-row items-center justify-between ml-16 mr-16 mt-5">
            <div className="flex flex-row gap-5 shadow-2xl"
            //  onClick={() => navigate(`/profile/${user._id}`)}
              >
                <Avatar src={user?.avatar?.url} />
                <h4 className="name">{user?.name}</h4>
            </div>
           <div className="bg-rose-600 rounded-md m-1 p-1 shadow-xl hover:transition-all">
            <h5 onClick={handleUserFollow}
                className={
                    isFollowing ? "hover-link follow-link" : "btn-primary"
                }
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </h5>
            </div>
        </div>
    );
}

export default Follower;