import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom website solutions tailored to your needs, from simple landing pages to complex web applications.",
      icon: "💻",
      path: "https://www.digitalanimal.online/?gad_source=5&gclid=EAIaIQobChMIhsmmnfzRiwMV76lmAh070whXEAAYASAAEgK33_D_BwE"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱",
      path: "https://kwdapps.co.nz/?gad_source=5&gclid=EAIaIQobChMIuZnLoePTiwMV2M08Ah30ETBHEAAYAiAAEgL2FPD_BwE"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for optimal user engagement.",
      icon: "🎨",
      path: "https://www.missionreadyhq.com/accelerator/user-experience-design"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services using cutting-edge technologies.",
      icon: "☁️",
      path: "https://apiconnects.co.nz/cloud-on-premise-system-integration/?gad_source=5&gclid=EAIaIQobChMIpoaNy-PTiwMVi6hmAh1IqSefEAAYASAAEgKwdfD_BwE"
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>Our Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <a 
            href={service.path}
            key={index} 
            className={styles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
