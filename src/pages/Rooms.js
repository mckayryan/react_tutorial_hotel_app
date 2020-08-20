import React from 'react';
import Hero from "../components/Hero"
import Banner from "../components/Banner"

import {Link} from "react-router-dom"

// import { FaAlignRight } from 'react-icons/fa';

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our luxurious rooms">
        <Link to='/' className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Rooms;
