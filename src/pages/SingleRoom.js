import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Title from '../components/Title';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug)
    // Error for room does not exist
    if (!room) {
      return <div className="error">
        <h3>No such room exists...</h3>
        <Link to="/rooms" className='btn-primary'>
          Return to Rooms
        </Link>
      </div>
    }
    // decompose all room items to display on page
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    const carouselImages = images.map(image => {
      return (<div><img src={image} /></div>)
    });

    console.log({room});
    return (
      <>
      <Carousel>{carouselImages}</Carousel>
      <Title title={`${name} room`} />
        <Link to='/rooms' className='btn-primary'>
          Return to Rooms
        </Link>
      </>
    );
  }

}

export default SingleRoom;
