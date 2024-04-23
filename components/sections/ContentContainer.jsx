
import React from 'react';

import "./section.css";

const ContentContainer = ({ activeTab, tabContent }) => {
    // Get the content for the active tab
    const content = tabContent[activeTab];
  
    // Generate the list items with icons and values
    const listItems = Object.keys(content)
      .filter(key => key.startsWith('line'))
      .map(key => {
        const item = content[key];
        return (
          <li className='mt-3 mt-md-0'  key={key}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
            }} >
                {item?.icon} 
                <p>{item?.value}</p>
            </div>
          </li>
        );
      });
  
    return (
      <div className="content-container">
        {content?.heading && <h2>{content?.heading}</h2>}
        <ul>{listItems}</ul>
      </div>
    );
  };
  

export default ContentContainer;