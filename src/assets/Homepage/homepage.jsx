import React from 'react';
import styles from './Homepage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
  /* Feature cards data array*/
  const featureCards = [
    {
      icon: "💻",  // Using emoji component
      title: "Web Development",
      description: "Cutting-edge web solutions with modern technologies",
      link: "https://www.digitalanimal.online/?gad_source=5&gclid=EAIaIQobChMIhsmmnfzRiwMV76lmAh070whXEAAYASAAEgK33_D_BwE",
    },
    {
      icon: "📱",  // Using emoji component
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      link: "https://www.flutterflow.io/?gad_source=5&gclid=EAIaIQobChMIwdKXhoPSiwMVuSCDAx1FLDbtEAAYASAAEgLEsfD_BwE",
    },
    {
      icon: "🎨",  // Using emoji component
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences",
      link: "https://www.missionreadyhq.com/accelerator/user-experience-design",
    },
  ];

  return (
    <div className={styles.homepageContainer}>
      <Navbar />
            {/* Hero Section
          - Contains main title, subtitle, and animated PC screen */}
      <section className={styles.pcHeroSection}>
        <div className={styles.pcHeroContent}>
          <div className={styles.pcTextContent}>
            <h1 className={styles.neonTitle}>Welcome to XenoGlyph</h1>
            <p className={styles.neonSubtitle}>Future-Forward Creativity, Beyond Limits.</p>
  {/* Search Bar Container */}
  <div className={styles.searchContainer}>
    <input 
      type="text" 
      placeholder="Search our projects..." 
      className={styles.searchInput}
    />
    <button className={styles.searchButton}>
      🔍
    </button>
  </div>
          </div>
          {/* Right side animated PC graphic
              - Contains monitor frame and animated code */}
          <div className={styles.pcGraphicContent}>
            <div className={styles.pcFrame}>
              <div className={styles.pcScreen}>
          {/* Animated code lines with typing effect */}
                <div className={styles.codeAnimation}>
                  <span className={styles.codeLine}>&lt;code&gt;</span>
                  <span className={styles.codeLine}>🔥Future-Forward Creativity🔥;</span>
                  <span className={styles.codeLine}>🔥Beyond Limits🔥;</span>
                  <span className={styles.codeLine}>&lt;/code&gt;</span>
                </div>
              </div>
              <div className={styles.pcBase}></div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section
          - Grid of interactive feature cards
          - Each card links to specific service */}
      <section className={styles.features}>
        <h2 className={styles.neonSectionTitle}>Our Services</h2>
        <div className={styles.featuresGrid}>
         {/* Map through features array to create cards */}
          {featureCards.map((card, index) => (
            <a 
              key={index} 
              href={card.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.featureCardLink}
            >
          {/* Individual feature card with hover effects */}
              <div className={styles.neonCard}>
                <div className={styles.cardIcon}>
                  {card.icon} {/* Directly render the emoji */}
                </div>
                <h3 className={styles.neonCardTitle}>{card.title}</h3>
                <p className={styles.neonCardText}>
                  {card.description}
                </p>
                {/* Animated arrow indicator */}
                <div className={styles.cardArrow}>
                  ➜ {/* Using emoji for arrow */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
