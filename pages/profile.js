import React from 'react';
import ProfileInfo from "../Components/Profile Components/profile info/profileInfo.js";
import Security from "../Components/Profile Components/security/security.js";
import ManageItems from '../Components/Profile Components/manageItems/manageItems.js';
let profileArr = ["profile", "security", 'manage Items', "log out"];

function Profile(props) {
    return (
        <div>
            <div className="mappy container container-fluid">
                <div className="profile-options">
                    {profileArr.map((e,i)=>{
                        return <div key={i} className='linksContainer'><a href="#" className="profile-links">{e}</a></div>
                    })}
                </div>
                <div className="profile-content">
                    {/* <ProfileInfo /> */}
                    {/* <Security /> */}
                    <ManageItems />
                </div>
            </div>

        </div>
    );
}

export default Profile;