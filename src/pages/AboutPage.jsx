import React from 'react';
import {
  CodeOutlined,
  RocketOutlined,
  HeartOutlined,
  TrophyOutlined,
  BookOutlined,
  BulbOutlined,
  StarOutlined,
  FireOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const AboutPage = () => {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'Python & Django', level: 85 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Database Design', level: 88 },
    { name: 'UI/UX Design', level: 82 },
  ];

  const achievements = [
    {
      icon: <TrophyOutlined />,
      title: 'Computer Science Degree',
      description:
        'Recent graduate with strong foundation in software engineering',
    },
    {
      icon: <CodeOutlined />,
      title: 'Full-Stack Expert',
      description: 'Proficient in both frontend and backend technologies',
    },
    {
      icon: <RocketOutlined />,
      title: 'Project Diversity',
      description: 'Created web apps, mobile apps, and complex systems',
    },
    {
      icon: <StarOutlined />,
      title: 'Client Satisfaction',
      description: 'Delivered quality solutions that exceed expectations',
    },
  ];

  return (
    <div className="page-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <div className="hero-text">
            <h1>Hi, I'm a Full-Stack Developer</h1>
            <p className="hero-subtitle">
              <HeartOutlined className="heart-icon" />
              Passionate about coding and creating innovative digital solutions
            </p>
            <p className="hero-description">
              I'm a recent Computer Science graduate who has turned my love for
              creating into my career. Every day, I get to solve complex
              problems, build amazing projects, and help businesses bring their
              digital dreams to life.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>

            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Availability</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-story">
        <div className="story-section">
          <div className="story-content">
            <BulbOutlined className="story-icon" />
            <h2>My Journey</h2>
            <p>
              What started as curiosity about how websites work has evolved into
              a full-time freelance business with 3+ employees where I get to
              create everything from simple websites to complex full-stack
              applications.
            </p>
            <p>
              I love the challenge of taking an idea from concept to reality,
              solving problems along the way, and seeing the excitement on my
              clients' faces when their vision comes to life.
            </p>
          </div>
        </div>

        <div className="story-section">
          <div className="story-content">
            <RocketOutlined className="story-icon" />
            <h2>The Big Dream</h2>
            <p>
              While I'm currently freelancing and loving every minute of it, I
              have bigger aspirations. My goal is to grow Lollipop Digital
              Solutions from a small team operation into a thriving tech company
              that makes a real impact in the digital world.
            </p>
            <p>
              I believe in starting small, delivering exceptional results, and
              building something meaningful one project at a time. Every client
              I work with is a step toward that bigger vision.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>
          <CodeOutlined className="section-icon" />
          Technical Expertise
        </h2>
        <p>
          I specialize in full-stack development with expertise across the
          entire technology stack:
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievements-section">
        <h2>
          <FireOutlined className="section-icon" />
          What Sets Me Apart
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section-about">
        <div className="cta-content">
          <h2>Ready to Work Together?</h2>
          <p>
            I'm always excited to take on new challenges and help bring
            innovative ideas to life. Whether you need a simple website or a
            complex full-stack application, let's discuss how we can make your
            vision a reality.
          </p>
          <div className="cta-buttons">
            <button
              className="cta-btn primary"
              onClick={() => (window.location.href = '/get-started')}
            >
              Start Your Project
            </button>
            <button
              className="cta-btn secondary"
              onClick={() => (window.location.href = '/free-consultation')}
            >
              Schedule a Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
