import React from 'react';
import { 
    useSelector
} from 'react-redux';

function Profile() {
    const profile = useSelector(state => state.siteData?.profile);
    return profile ? (
        <div>
            <h2 class="profile-page__title">Profile</h2>
            <div className="profile-page">
                <div className="profile-page__img">
                    <img src={profile.avatarImage} alt="Profile Image"/>
                </div>
                <div className="profile-page__content">
                    <div className="profile-page__content-title">First name</div>
                    <div>{profile.firstName}</div>
                    <div className="profile-page__content-title">Last name</div>
                    <div>{profile.lastName}</div>
                    <div className="profile-page__content-title">Phone</div>
                    <div>{profile.phone}</div>
                    <div className="profile-page__content-title">Email</div>
                    <div><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                    <div className="profile-page__content-title">Bio</div>
                    <div>{profile.bio}</div>
                </div>
            </div>
        </div>
    ) : <div>Loading..</div>
}

export default Profile;