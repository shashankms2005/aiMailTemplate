import React from 'react';

const SocialIconsComponent = ({ outerStyle, socialIcons, style }) => {
  return (
    <div style={outerStyle}>
      {socialIcons.map((iconData, index) => (
        <a key={index} href={iconData.url} target="_blank" rel="noopener noreferrer">
          <img src={iconData.icon} alt="social-icon" style={style} />
        </a>
      ))}
    </div>
  );
};

export default SocialIconsComponent;
