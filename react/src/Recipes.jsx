import React from 'react';
import RecipeSearch from './recipeSearch.jsx';
import VideoSearch from './VideoSearch.jsx';
import VideoCarousel from './VideoCarousel.jsx';

const Recipes = (props) => {
  console.log('looking at the props', props)
  return (
    <div className="container">
      {props.videos.length > 0 && 
        <VideoCarousel 
          videos={props.videos}
          defaultSelectedIndex={0}
          showThumbnails={true}
          slideshowActive={true}
          slideshowDelay={4000}
        />
      }
      <div className="results row">
        <ul>
          {props.recipes.map((element, index) => <RecipeSearch recipe={element.recipe} id={index} key={index}/>)}
        </ul>
      </div>
      <div className="row">
          {props.videos.length > 0 &&
            <h2>Recommended Videos</h2>
          }
        <ul>
          {props.videos.map((element, index) => <VideoSearch video={element} id={index} key={index} />)}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
