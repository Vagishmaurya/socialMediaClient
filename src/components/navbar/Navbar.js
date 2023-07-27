// import React, { useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router";
import Avatar from "../avatar/Avatar";
import "./Navbar.scss";
import { useSelector} from 'react-redux';
// import { setLoading } from "../../redux/slices/appConfigSlice";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";


function Navbar() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);

    async function handleLogoutClicked() {
        try {
			await axiosClient.post('/auth/logout');
			removeItem(KEY_ACCESS_TOKEN);
			navigate('/login')
		} catch (e) {
			
		}
    }

    return (
        <div className="Navbar bg-rose-600 flex flex-row  h-16 w-100%">
            <div className="container flex flex-row items-center justify-between ml-3">
                <h2 className="banner hover-link text-2xl font-mono font-bold" onClick={() => navigate("/")}>
                    Social Media
                </h2>
                <div className="justify-end flex flex-row gap-10">
                    <div
                        className="profile hover-link"
                        onClick={() => navigate(`/profile/${myProfile?._id}`)}
                    >
                        <Avatar src={myProfile?.avatar?.url}/>
                    </div>
                    <div className="logout mr-2 text-3xl" onClick={handleLogoutClicked}>
                        <AiOutlineLogout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;