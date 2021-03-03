import React from 'react';
import PropTypes from 'prop-types';


function Food({ name, picture, rating }) {
  return (<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

const foodILike = [
  { id:1,
    name: "kimchi",
    image: 
    "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating: 5
  },
  { id:2,
    name: "kimcbap",
    image: 
    "https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Easy-Kimbap.jpg",
    rating: 4.9
  },
  { id:3,
    name: "Doncasu",
    image: 
    "https://pds.joins.com/news/component/htmlphoto_mmdata/201508/05/htm_20150805071153241.jpg",
    rating: 4.3
  },
  { id:4,
    name: "Samgyepsal",
    image: 
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F9942B3395A3501C304B135",
    rating: 3.2
  },
  { id:5,
    name: "Bibimbap",
    image: 
    "https://img.taste.com.au/89rfrNZj/w720-h480-cfill-q80/taste/2016/11/bibimbap-92850-1.jpeg",
    rating: 3.1
  }
];


export default App;


