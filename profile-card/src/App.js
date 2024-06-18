import pic from "./test.jpg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={pic} alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>Full - stack web develpper and teacher at Udemy</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
      {/* <Skill title="HTML+CSS" backgroundColor="blue" />
      <Skill title="JavaScript" backgroundColor="yellow" />
      <Skill title="Web Design" backgroundColor="green" />
      <Skill title="Git and Github" backgroundColor="red" />
      <Skill title="React" backgroundColor="pink" />
      <Skill title="Svelte" backgroundColor="red" /> */}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" && "👶"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
