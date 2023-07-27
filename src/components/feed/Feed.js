import React, { useEffect } from 'react'
import Follower from '../follower/Follower'
// import Post from '../post/Post'
import './Feed.scss'
import {useSelector, useDispatch} from 'react-redux';
import { AiFillHeart} from "react-icons/ai";
import { getFeedData } from '../../redux/slices/feedSlice';
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import shimla from "../../assets/shimla.jpg"
import manali from "../../assets/manali.jpg"
import delhi from "../../assets/delhi.jpg"
import goa from "../../assets/goa.jpg"
import family from "../../assets/joint.jpg"
import mother from "../../assets/mother.jpg"


function Feed() {

  const dispatch = useDispatch();
  const feedData = useSelector(state => state.feedDataReducer.feedData)

  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch])

  return (
    <div className="mt-5 items-center justify-center text-center">
             <h1 className='text-3xl font-bold bg-gradient-to-br text-rose-800 mb-3'>FEED</h1>
          <div className="w-[320px] flex flex-col m-auto bg-opacity-80 rounded-lg overflow-hidden items-center gap-4">
            <div className="relative font-bold p-2 shadow-2xl">
                <img
                    src={shimla}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover  md:w-[600px] lg:w-[700px] shadow-2xl"
                />
               <p className=''>Beauty of Shimla</p>
               <div className="flex flex-row items-center justify-center gap-3 mt-1">
                     <div className='text-2xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`120 likes`}</h4>
                    </div>
                </div>
            </div>

            <div className="relative p-2 shadow-2xl">
                <img
                    src={manali}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover md:w-[600px] lg:w-[700px] shadow-2xl"
                />
               
               <p className=''>Family Trip</p>
               <div className="flex flex-row items-center justify-center gap-5 mt-1">
                     <div className='text-xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`78 likes`}</h4>
                    </div>
                </div>


            </div>

            <div className="relative p-2 shadow-2xl">
                <img
                    src={family}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover md:w-[600px] lg:w-[700px] shadow-2xl"
                />
               
               <p className=''>Family</p>
               <div className="flex flex-row items-center justify-center gap-5 mt-1">
                     <div className='text-xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`130 likes`}</h4>
                    </div>
                </div>


            </div>

            <div className="relative p-2 shadow-2xl">
                <img
                    src={mother}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover md:w-[600px] lg:w-[700px] shadow-2xl"
                />
               
               <p className=''>Daughter</p>
               <div className="flex flex-row items-center justify-center gap-5 mt-1">
                     <div className='text-xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`50 likes`}</h4>
                    </div>
                </div>


            </div>

            <div className="relative p-2 shadow-2xl">
                <img
                    src={goa}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover md:w-[600px] lg:w-[700px] shadow-2xl"
                />
                <p className=''>Goa Trip</p>
               <div className="flex flex-row items-center justify-center gap-5 mt-1">
                     <div className='text-xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`25 likes`}</h4>
                    </div>
                </div>


            </div>

            <div className="relative p-2 shadow-2xl">
                <img
                    src={delhi}
                    alt = "shimla"
                    className="w-full min-h-[168px] object-cover md:w-[600px] lg:w-[700px] shadow-2xl"
                />
                <p className=''>Delhi</p>
               <div className="flex flex-row items-center justify-center gap-5 mt-1">
                     <div className='text-xl'>
                     <AiFillHeart style={{color: 'red'}} className="icon" />
                     </div>
                     <div>
                    <h4>{`30 likes`}</h4>
                    </div>
                </div>

             </div>
            </div>
            
          



            {/* {feedData?.posts?.map(post => <Post key={post._id} post={post} />)} */}
          
          <div className="mt-16"> 
             <div className="">
              <h3 className="title font-semibold">You Are Following</h3>
              {feedData?.followings?.map(user => <Follower key={user._id} user={user}/>)}
            </div>

             </div>



             <div className="mt-16 shadow-2xl font-semibold">
              <h3 className="title">Suggested For You</h3>
              {feedData?.suggestions?.map(user => <Follower key={user._id} user={user}/>)}
            </div> 
           </div>
        
    
  )
}

export default Feed