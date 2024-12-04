import { LuBadge, LuGlobe2, LuLightbulb } from "react-icons/lu";
import "../Css/about-page.css";
import StoryImage from "../assets/albertowatchemaker.webp";
import JohnAlberto from "../assets/john.webp";
import IssacMary from "../assets/mary.webp";

const Hero = () => (
  <section className="hero">
    <h1>About Us</h1>
    <p>Empowering People with Premium, <span style={{color:"var(--accent-color)"}}>High-Quality Watches</span></p>
    <p>
      Your ultimate destination for luxury and technology-driven Watches that
      combine elegance with innovation.
    </p>
  </section>
);

const Mission = () => (
  <section className="mission">
    <h2>Our Mission</h2>
    <p>
      Our mission is to offer premium Watches that are not just functional but
      also enhance your lifestyle. We strive to deliver a seamless experience
      with top-notch quality and unmatched customer service, making your
      everyday moments extraordinary.
    </p>
  </section>
);

const OurStory = () => (
  <section className="our-story">
    <div className="our-story-intro">
      <h2>Our Story</h2>
      <p>
        Founded in 1985, Alberto Watch began with a simple vision: to bring
        luxury and technology closer to consumers. From our humble beginnings to
        becoming a household name, we&apos;ve always focused on combining style,
        innovation, and excellence. Our dedication to quality and customer
        satisfaction has driven us to where we are today.
      </p>
    </div>

    <img className="story-image" src={StoryImage} alt="Our Story" />
  </section>
);

const CoreValues = () => (
  <section className="core-values">
    <h2>Our Core Values</h2>
    <div className="core-value-card-flex">
      {CoreValueCardData.map((card) => (
        <CoreValuesCard
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  </section>
);

const CoreValueCardData = [
  {
    id: "001",
    title: "Integrity",
    description:
      "We believe in doing the right thing, even when no one is watching.",
  },
  {
    id: "002",
    title: "Innovation",
    description:
      "We strive to push boundaries and bring cutting-edge solutions to our customers.",
  },
  {
    id: "003",
    title: "Quality",
    description:
      "We never compromise on quality, ensuring that every watch we sell is top-tier.",
  },
  {
    id: "004",
    title: "Customer Satisfaction",
    description:
      "Our customers are at the heart of everything we do, and we’re dedicated to meeting their needs.",
  },
];

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({ title, description }) => (
  <div className="core-values-card">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const Team = () => (
  <section className="team">
    <h2>Meet Our Team</h2>
    <div className="team-member-cards">
    <div className="team-member">
      
      <img src={JohnAlberto} alt="John Alberto" />

      <div className="team-memeber-text">
      <h3>John Alberto</h3>
      <p className="p-head">Founder & CEO</p>
      <p>
        John Alberto is the visionary behind Alberto Watch Company. A master
        watchmaker who blends traditional craftsmanship with modern design,
        John’s passion for horology drives the creation of timeless,
        high-quality timepieces. His dedication to precision and innovation
        ensures every watch is a piece of art, built to last for generations.
      </p>
      </div>
    
    </div>
    <div className="team-member">
      <img src={IssacMary} alt="Issac Mary" />
      <div className="team-memeber-text">
      <h3>Issac Mary</h3>
      <p className="p-head">COO</p>
      <p>
        Jane is responsible for day-to-day operations, ensuring everything runs
        smoothly and efficiently.
      </p>
      </div>
     
    </div>
    </div>
  </section>
);

const Achievements = () => (
  <section className="achievements">
    <h2>Our Achievements</h2>
    <ul>
      <li>
        <LuBadge className="achievement-icon" />
       <h2> 2022</h2>
       <p> Awarded Best Luxury Product of the Year</p>
      </li>
      <li>
        <LuLightbulb className="achievement-icon"/>
       <h2> 2021</h2>
       <p> Recognized as a top innovator in technology</p>
      </li>
      <li>
        <LuGlobe2 className="achievement-icon"/>
       <h2> 2020</h2>
       <p> Reached 1 million happy customers worldwide</p> 
      </li>
    </ul>
  </section>
);

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


// Testimonial Data
const testimonials = [
  {
    id: 1,
    quote: "You change the way I see luxury Watches now. The quality is unmatched!",
    name: "Mark Johnson"
  },
  {
    id: 2,
    quote: "The customer service is excellent. I highly recommend them!",
    name: "Sarah Smith"
  },
  {
    id: 3,
    quote: "I love the craftsmanship and attention to detail. Worth every penny!",
    name: "Gary Vee"
  },
  {
    id: 4,
    quote: "A truly remarkable experience. I am in awe of the design and functionality.",
    name: "Alex Hormonzi"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); 

      return () => clearInterval(interval); 
    }
  }, [hovered]);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <motion.div
        className="testimonial-carousel"
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.div
          className="carousel-inner"
          initial={{ x: "100%" }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p>&quot;{testimonial.quote}&quot;</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};



const CallToAction = () => (
  <section className="about-cta">
    <h2>Start Your Journey with Us</h2>
    <p>
      Explore our range of Watches and experience the luxury and innovation we
      offer. Join thousands of happy customers today!
    </p>
    <a href="/products" className="about-cta-btn">
      Browse Our Products
    </a>
  </section>
);

const About = () => {
  return (
    <div className="about-us">
      <Hero />
      <Mission />
      <OurStory />
      <CoreValues />
      <Team />
      <Achievements />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default About;
