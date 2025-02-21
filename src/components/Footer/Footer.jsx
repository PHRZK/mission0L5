import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* ==============================================
            MAIN FOOTER GRID
            - Contains four columns of information
            - Responsive layout
            - Neon styled headings
        ============================================== */}
        <div className={styles.footerGrid}>
          {/* ==============================================
              ABOUT COLUMN
              - Company information links
              - Our Story, Team, Careers
          ============================================== */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>
              <span className={styles.neonText}>About</span>
            </h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Our Story</a>
              <a href="#" className={styles.footerLink}>Team</a>
              <a href="#" className={styles.footerLink}>Careers</a>
            </div>
          </div>

          {/* ==============================================
              SERVICES COLUMN
              - Main service offerings
              - Web Development, UI/UX, Mobile Apps
          ============================================== */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>
              <span className={styles.neonText}>Services</span>
            </h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Web Development</a>
              <a href="#" className={styles.footerLink}>UI/UX Design</a>
              <a href="#" className={styles.footerLink}>Mobile Apps</a>
            </div>
          </div>

          {/* ==============================================
              RESOURCES COLUMN
              - Additional resources and documentation
              - Blog, Documentation, Support
          ============================================== */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>
              <span className={styles.neonText}>Resources</span>
            </h3>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Blog</a>
              <a href="#" className={styles.footerLink}>Documentation</a>
              <a href="#" className={styles.footerLink}>Support</a>
            </div>
          </div>

          {/* ==============================================
              CONNECT COLUMN
              - Social media links
              - External platform links
              - Icons with neon effects
          ============================================== */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>
              <span className={styles.neonText}>Connect</span>
            </h3>
            <div className={styles.socialLinks}>
              {/* GitHub Link */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.neonSocialLink}
              >
                <i className="fab fa-github"></i>
              </a>
              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.neonSocialLink}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* Twitter Link */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.neonSocialLink}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ==============================================
            FOOTER BOTTOM
            - Copyright information
            - Separator line
            - Dynamic year display
        ============================================== */}
        <div className={styles.footerBottom}>
          <div className={styles.footerLine}></div>
          <p className={styles.neonCopyright}>
            © {new Date().getFullYear()} XenoDesignz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
