// Experience data - easily maintainable structure
export const experiences = [
  {
    id: 1,
    company: "Microsoft Corporation",
    role: "Senior Software Developer",
    duration: "Mar 2023 – Present",
    location: "Seattle, WA",
    contributions: [
      "Led development of enterprise-grade APIs using .NET 6 and Azure Functions, serving 10M+ daily requests",
      "Architected and implemented microservices architecture reducing system latency by 40%",
      "Integrated comprehensive CI/CD pipelines with GitHub Actions and Azure DevOps",
      "Mentored team of 5 junior developers in clean architecture patterns and best practices",
      "Collaborated with cross-functional teams to deliver high-impact features on schedule"
    ]
  },
  {
    id: 2,
    company: "TechStart Solutions",
    role: "Full Stack Developer",
    duration: "Jun 2021 – Feb 2023",
    location: "Austin, TX",
    contributions: [
      "Developed responsive web applications using React, TypeScript, and Node.js",
      "Built RESTful APIs with Express.js and MongoDB, handling 500K+ monthly users",
      "Implemented automated testing strategies achieving 90%+ code coverage",
      "Optimized application performance resulting in 50% faster load times",
      "Participated in agile development cycles and code review processes"
    ]
  },
  {
    id: 3,
    company: "InnovateCorp",
    role: "Junior Software Developer",
    duration: "Aug 2019 – May 2021",
    location: "Denver, CO",
    contributions: [
      "Contributed to legacy system modernization using .NET Core and Angular",
      "Implemented database optimization strategies improving query performance by 60%",
      "Collaborated on mobile-first responsive design implementations",
      "Participated in daily standups and sprint planning sessions",
      "Gained experience with cloud deployment using AWS and Docker"
    ]
  },
  {
    id: 4,
    company: "CodeCraft Academy",
    role: "Software Development Intern",
    duration: "May 2019 – Jul 2019",
    location: "Remote",
    contributions: [
      "Assisted in developing internal tools using Python and Django",
      "Learned version control best practices with Git and GitHub",
      "Participated in code reviews and debugging sessions",
      "Gained exposure to agile development methodologies"
    ]
  }
];

// Alternative data structure for different experience types
export const experiencesByCategory = {
  corporate: [
    // Company positions
  ],
  freelance: [
    // Freelance projects
  ],
  education: [
    // Educational roles, teaching, etc.
  ]
};

// Utility function to get experiences by date range
export const getExperiencesByDateRange = (startYear, endYear) => {
  return experiences.filter(exp => {
    const year = parseInt(exp.duration.split(' ')[2] || exp.duration.split(' ')[0]);
    return year >= startYear && year <= endYear;
  });
};

// Utility function to get current position
export const getCurrentPosition = () => {
  return experiences.find(exp => exp.duration.includes('Present'));
};
