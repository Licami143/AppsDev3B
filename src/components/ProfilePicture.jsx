import { useState } from 'react';
import felix1 from '../assets/felix1.jpg';
import felix2 from '../assets/felix2.jpg';

const ProfilePicture = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? felix2 : felix1}
      alt="Profile"
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '5px solid #09f33c',
        objectFit: 'cover',
        marginBottom: '1rem',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ProfilePicture;
