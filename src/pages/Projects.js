
import React, { useState } from 'react';


const Projects = ({items}) => {
  const [projectsMenu, setProjectMenu] = useState(items)

 const categories = ['js', 'react', 'all']

  const filterItems = (category) => {
    if (category === 'all') {
      setProjectMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setProjectMenu(newItems);
  };



  return (
    <div>
      <div className='filterBtn'>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      </div>
    <h2 className='projects-header'>My Projects!</h2>
    <div className='underline'></div>
    <div className='projects' >
      {projectsMenu.map((menuItem) => {
        const { id, title, img, desc,} = menuItem;
        return (

          <div key={id} className='project'>
            <img src={img} alt={title}  />
            <div className='project-info'>
                <h4 className='title'>{title}</h4>
              <p >{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Projects;
