import {
  faReact,
  faNodeJs,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface ExpertiseData {
  key: string;
  icon: IconDefinition;
  title: string;
  description: string;
  techStack: string[];
}

export const expertiseData: ExpertiseData[] = [
  {
    key: "sk-01",
    icon: faReact,
    title: "Full Stack Web Development",
    description: `I have built frontend from scratch & maintain existing ones, using modern technologies such as React, VueJS & Angular. I have a keen eye for pixel perfect apps.`,
    techStack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SASS",
      "NodeJS",
      "NextJS",
      "VueJS",
      "AngularJS",
    ],
  },
  {
    key: "sk-02",
    icon: faNodeJs,
    title: "Backend Development",
    description: `I have built web applications from scratch & maintain existing ones, using modern technologies such as NodeJS, Java & C#. I tend to focus more on frontend development but I don't shy away from the backend development.`,
    techStack: [
      "NodeJS",
      "NestJS",
      "Java",
      "C#",
      "Python",
      "Go",
      "SQL",
      "PostgreSQL",
      "Postman",
    ],
  },
  {
    key: "sk-03",
    icon: faDocker,
    title: "DevOps & Automation",
    description: `Once the application is built, I have set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.`,
    techStack: ["Git", "GitHub Actions", "Docker", "AWS", "GCP", "Linux"],
  },
  {
    key: "sk-04",
    icon: faPython,
    title: "GenAI & LLM",
    description: `I'm currently learning more about AI & LLM to stay relevant in the market.`,
    techStack: [
      "OpenAI",
      "Groq",
      "LangChain",
      "Python",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Keras",
      "Sklearn",
    ],
  },
];
