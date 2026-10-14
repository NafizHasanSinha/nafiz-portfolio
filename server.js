const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup EJS Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files Folder
app.use(express.static(path.join(__dirname, 'public')));

// Portfolio Data Object
const portfolioData = {
  name: "Nafiz Hasan Sinha",
  title: "Full-Stack & Mobile App Developer",
  email: "nafizhasansinha@gmail.com",
  phone: "01826001380",
  whatsapp: "https://wa.me/8801826001380",
  github: "https://github.com/NafizHasanSinha",
  githubUsername: "NafizHasanSinha",
  linkedin: "https://www.linkedin.com/in/nafiz-hasan-318496307/",
  facebook: "https://www.facebook.com/",
  university: "Shanto-Mariam University of Creative Technology (SMUCT)",
  department: "Computer Science & Engineering (CSE)",
  graduation: "January 2027 (Final Semester)",
  skills: [
    { category: "Backend Technologies", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
    { category: "Frontend & Full Stack", items: ["MERN Stack", "React.js", "HTML5/CSS3", "JavaScript"] },
    { category: "Mobile App Development", items: ["Flutter", "Firebase"] },
    { category: "CMS & Others", items: ["WordPress", "Git & GitHub", "REST APIs"] }
  ]
};

// Route
app.get('/', (req, res) => {
  res.render('index', { data: portfolioData });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});