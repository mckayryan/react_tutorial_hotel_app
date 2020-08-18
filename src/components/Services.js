import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
class Services extends Component {
  state = {
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free cocktails",
        info:"Some generic text designed to fill up space on the page!!! Turns out we needed a little more."
      },
      {
        icon:<FaHiking/>,
        title:"Explore nearby nature",
        info:"Some generic text designed to fill up space on the page!!! Turns out we needed a little more."
      },
      {
        icon:<FaShuttleVan/>,
        title:"Who likes to drive? Not me!",
        info:"Some generic text designed to fill up space on the page!!! Turns out we needed a little more."
      },
      {
        icon:<FaBeer/>,
        title:"Get so drunk you'll forget the service!",
        info:"Some generic text designed to fill up space on the page!!! Turns out we needed a little more."
      }
    ]
  };


  render() {
    return (
      <section className='services'>
        <Title title="services" />
        <div className='services-center'>
        {this.state.services.map((item, index) => {
          return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
        </div>
      </section>
    );
  }

}

export default Services;
