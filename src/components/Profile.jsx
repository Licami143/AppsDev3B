import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Button from './Button';

const Profile = () => (
  <div className="profile-card">
    <ProfilePicture />
    <AboutMe />
    <Skills />
    <Button />
  </div>
);

export default Profile;
