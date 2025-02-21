import React from 'react';
import styles from './about-us.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.neonTitle}>About XenoGlyph</h1>
          <p className={styles.neonSubtitle}>Crafting Digital Excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.aboutGrid}>
          {/* Vision Section */}
          <div className={styles.neonCard}>
            <div className={styles.cardIcon}>
              <i className="fas fa-eye"></i>
            </div>
            <h2 className={styles.neonCardTitle}>Our Vision</h2>
            <p className={styles.neonCardText}>
              Pioneering the future of digital design through innovative solutions
              and cutting-edge technology. We strive to push boundaries and redefine
              what's possible in the digital realm.
            </p>
          </div>

          {/* Mission Section */}
          <div className={styles.neonCard}>
            <div className={styles.cardIcon}>
              <i className="fas fa-rocket"></i>
            </div>
            <h2 className={styles.neonCardTitle}>Our Mission</h2>
            <p className={styles.neonCardText}>
              To deliver exceptional digital experiences that empower businesses
              and inspire users, while maintaining the highest standards of
              creativity and technical excellence.
            </p>
          </div>

          {/* Values Section */}
          <div className={styles.neonCard}>
            <div className={styles.cardIcon}>
              <i className="fas fa-star"></i>
            </div>
            <h2 className={styles.neonCardTitle}>Our Values</h2>
            <p className={styles.neonCardText}>
              Innovation, integrity, and excellence form the cornerstone of our
              work. We believe in creating lasting partnerships and delivering
              results that exceed expectations.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <h2 className={styles.neonSectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {/* Team Member Cards */}
            <div className={styles.teamCard}>
              <div className={styles.memberImage}>
                <img src="/MikeJohnson.png" alt="Team Member" />
              </div>
              <h3 className={styles.memberName}>Vegeta</h3>
              <p className={styles.memberRole}>Founder & CEO</p>
              <div className={styles.memberSocial}>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.memberImage}>
                <img src="/JaneSmith.jpg" alt="Team Member" />
              </div>
              <h3 className={styles.memberName}>Kakarot</h3>
              <p className={styles.memberRole}>Creative Director</p>
              <div className={styles.memberSocial}>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.memberImage}>
                <img src="JohnDoe.png" alt="Team Member" />
              </div>
              <h3 className={styles.memberName}>Android 17
              </h3>
              <p className={styles.memberRole}>Tech Lead</p>
              <div className={styles.memberSocial}>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>100+</h3>
              <p className={styles.statLabel}>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>50+</h3>
              <p className={styles.statLabel}>Happy Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>5+</h3>
              <p className={styles.statLabel}>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
