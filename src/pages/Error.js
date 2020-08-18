import React from 'react';
import Hero from "../components/Hero"
import Banner from "../components/Banner"

import {Link} from "react-router-dom"

const Error = () => {
  return (
    <Hero>
      <Banner title="404 Error" subtitle="Page not found">
        <Link to='/' className="btn-primary">
          Return to Beach Resort
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
