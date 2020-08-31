import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Room from '../components/Room';
import Loading from '../components/Loading';
import Title from '../components/Title';

import {Link} from "react-router-dom";

// import { FaAlignRight } from 'react-icons/fa';
import {RoomContext} from '../Context';

class Rooms extends Component {
  static contextType = RoomContext;

  render () {
    let {loading, rooms} = this.context;
    const displayRooms = rooms.map(room => {
      return <Room key={room.id} room={room}/>
    });

    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Our luxurious rooms">
            <Link to='/' className="btn-primary">
              Return home
            </Link>
          </Banner>
        </Hero>
        <section className='featured-rooms'>
          <div className='roomslist-center'>
            {loading ? <Loading /> : displayRooms}
          </div>
        </section>
      </>
    );
  }
}

export default Rooms;
