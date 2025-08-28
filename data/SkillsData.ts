interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  invert?: boolean;
}

export const skills: Skill[] = [
  { name: 'React.js', icon: '/icons/reactjs.svg', proficiency: 5 },
  { name: 'Next.js', icon: '/icons/nextjs.svg', invert: true, proficiency: 4 },
  { name: 'JavaScript', icon: '/icons/javascript.svg', proficiency: 5 },
  { name: 'TypeScript', icon: '/icons/typescript.svg', proficiency: 4 },
  { name: 'TailwindCSS', icon: '/icons/tailwind.svg', proficiency: 5 },
  { name: 'Material UI', icon: '/icons/mui.svg', proficiency: 3 },
  { name: 'Bootstrap', icon: '/icons/bootstrap.svg', invert:true, proficiency: 3 },
  { name: 'Zustand', icon: '/icons/zustand.svg', proficiency: 3 },
  { name: 'Redux', icon: '/icons/redux.svg', proficiency: 3 },
  { name: 'Node.js', icon: '/icons/nodejs.svg', proficiency: 5 },
  { name: 'Express.js', icon: '/icons/express.svg', invert: true, proficiency: 5 },
  { name: 'REST APIs', icon: '/icons/rest-api.svg', invert: true, proficiency: 5 },
  { name: 'Redis', icon: '/icons/redis.svg', proficiency: 3 },
  { name: 'Firebase', icon: '/icons/firebase.svg', proficiency: 4 },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', proficiency: 4 },
  { name: 'MySQL', icon: '/icons/mysql.svg', proficiency: 4 },
  { name: 'Postman', icon: '/icons/postman.svg', proficiency: 5 },
  { name: 'Vercel', icon: '/icons/vercel.svg', invert: true, proficiency: 5 },
  { name: 'Git', icon: '/icons/git.svg', proficiency: 3 },
  { name: 'Github', icon: '/icons/github.svg', invert: true, proficiency: 5 },
  { name: 'Python', icon: '/icons/python.svg', proficiency: 4 },
  { name: 'Streamlit', icon: '/icons/streamlit.svg', proficiency: 4 },
  { name: 'Scikit-learn', icon: '/icons/scikit-learn.svg', proficiency: 3 },
  { name: 'OpenAI', icon: '/icons/openai.svg', invert: true, proficiency: 3 },
  { name: 'Google Colab', icon: '/icons/google-colab.svg', proficiency: 4 },
];