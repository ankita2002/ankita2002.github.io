const LearningProfileCard = ({ icon, label, title, text, link }) => (
  <a
    className="learning-profile-card"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <img src={icon} alt="" />
    <div>
      <span>{label}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>View verified badges</strong>
    </div>
  </a>
);

export const LearningProfiles = () => (
  <section className="learning-profiles">
    <h2>Badges and continuous learning</h2>
    <p>Explore my verified technical learning profiles.</p>

    <div className="learning-profile-grid">
      <LearningProfileCard
        icon="/assets/images/follow-and-contact-me/microsoft-learn.jfif"
        label="Microsoft Learn"
        title="Microsoft Learn Profile"
        text="Technical badges, developer learning paths, and cloud skills."
        link="https://learn.microsoft.com/en-us/users/ankitaupadhyay-7873/"
      />

      <LearningProfileCard
        icon="/assets/images/follow-and-contact-me/qwicklabs.jfif"
        label="Google Skills"
        title="Google Skills Profile"
        text="Cloud labs, hands on learning, and technical skill badges."
        link="https://www.skills.google/public_profiles/d3e47297-e1df-46d4-a2b3-7643419a16e1"
      />
    </div>
  </section>
);