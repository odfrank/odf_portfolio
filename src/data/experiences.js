// Experience data - easily maintainable structure
export const experiences = [
  {
    id: 1,
    company: "IntelliMedia LP",
    role: "Senior Full Stack Developer",
    duration: "Jan 2025 – Apr 2025",
    location: "Edmonton, Canada",
    contributions: [
      "Leading development team to redesign modern upgraded version of legacy school management app used across majority of private and public schools all across Alberta",
      "Mentoring junior developers in the adoption of N-tier/Microservices over old Monolithic version",
      "Developed PoC Demo Product with Blazor, .Net Rest/GraphQL API services, Ocelot, RabbitMQ",
      "Ongoing development of dockerized MVP with NextJs, .Net API, Keycloak, Docker/K8s, GCP, Gitlab",
    ],
  },
  {
    id: 2,
    company: "SEH Computer Systems",
    role: "Senior C#/.Net Developer",
    duration: "Jan 2024 – Dec 2024",
    location: "Canada",
    contributions: [
      "Contributing to the development of enterprise insurance application upgrade with core focus on JavaScript, SPA frameworks, C#, .Net, Blazor, SQL Server, Azure, and Azure DevOps",
      "Participation in Agile practices including Sprint Planning, DSM, Retrospectives, Feature Reviews",
      "Great Problem-solving, troubleshooting, and root-cause analysis for enterprise application tickets",
      "Applying SOLID Principles and Design Patterns (Interfaces, Data Repository) and OOP concepts",
      "Writing Unit Tests, BDD Tests with Specflow/Playwright, and Integration tests across platforms",
    ],
  },
  {
    id: 3,
    company: "HF Energy",
    role: "Full Stack Developer (Contract)",
    duration: "Aug 2023 – Dec 2023",
    location: "Canada",
    contributions: [
      "Single-handedly built high-performance multi-location Inventory Management System using C#, SQL Server, MVC, APIs, Azure Web Apps, Azure Database",
      "Designed and implemented responsive web interfaces using CSS, Bootstrap, JavaScript, ensuring user-friendly experience across all devices",
      "Utilized React and Redux for centralized application state management and real-time updates",
      "Successful implementation of user authentication, authorization roles (MS Identity), product catalog management, and real-time inventory tracking across all company locations",
      "Cloud deployment with Azure Web Apps and Azure SQL Database",
    ],
  },
  {
    id: 4,
    company: "EVRAZ North America",
    role: "Senior Software Analyst",
    duration: "Dec 2022 – July 2023",
    location: "Canada",
    contributions: [
      "Contributed to the development of custom APIs to connect with industrial plant sensors and controllers, enabling proactive maintenance and reducing downtime by 30%",
      "Development of optimized data-driven Blazor solutions, WPF Desktop Applications that work with PLCs for automation of plant operations",
      "Conducted regular optimization of SQL Queries and SSRS Reports, saving over 24% delay time through efficient Query performance analysis",
      "Enhanced and supported custom HMI applications for steel production operations (metal furnacing, castling, coiling) and plant process monitoring systems",
    ],
  },
  {
    id: 5,
    company: "Revenue Solutions Inc",
    role: "Backend Developer",
    duration: "Sept 2020 – June 2022",
    location: "USA/Canada",
    contributions: [
      "Contributed to comprehensive testing and validation of tax calculation algorithms, reducing calculation errors by 25% and improving overall system accuracy",
      "Utilized React for the front end, ensuring seamless user experience for taxpayers and agency personnel",
      "Implemented RESTful APIs and microservices using ASP.NET and Postman, achieving 40% improvement in data retrieval speed",
      "Developed and maintained C#/.NET applications, integrating with SQL databases",
      "Reviewed assigned bug reports in RPE Tax system, and amended backend logic (C#, SQL) to user needs",
    ],
  },
  {
    id: 6,
    company: "eKnow Consult",
    role: "Backend Developer",
    duration: "May 2018 – Apr 2020",
    location: "Nigeria",
    contributions: [
      "Collaborated closely with financial analysts and stakeholders to identify and address performance bottlenecks, resulting in 15% reduction in system response times",
      "Spearheaded the development of custom and scalable financial management system, ensuring compliance with identified requirements",
      "Engaged in complex SQL Query analysis, TSQL Scripting, and enhancement of Stored Procedures",
      "Worked on financial compliance and regulatory requirements implementation",
    ],
  },
  {
    id: 7,
    company: "Kentech Global Services (BP & Enka SCPX Project)",
    role: "Support Developer",
    duration: "Nov 2016 – Jan 2018",
    location: "Georgia",
    contributions: [
      "Conducted business requirements gathering with department leads and translated to technical design",
      "Performed advanced data analysis, SQL querying, and BI reporting for team leads and top management",
      "Developed in-house C# applications to automate field inspection which saved over 25% in work-time",
      "Designed ASP.Net Web Applications for Workflow Management among teams of technicians",
      "Contributed to code reviews in business logic changes (JavaScript, Ajax, Visual Basic)",
    ],
  },
  {
    id: 8,
    company: "Intech Process Automation Ltd (Chevron CDB Project)",
    role: "Intermediate Backend Developer",
    duration: "Nov 2014 – Jun 2016",
    location: "China",
    contributions: [
      "Evaluated stated business requirements with team leads and translated them into technical designs",
      "Tagged 'Most Proactive' several times and promoted as Assistant Team Lead",
      "Designed a C# Project Order Tracking application for managing vendor equipment orders and deliveries",
      "Conducted several project presentations to managers, team collaboration, and user training for workers",
      "Commended severally for efficient multi-tasking capacity leading team to excellent daily progress",
    ],
  },
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
  ],
};

// Utility function to get experiences by date range
export const getExperiencesByDateRange = (startYear, endYear) => {
  return experiences.filter((exp) => {
    const year = parseInt(
      exp.duration.split(" ")[2] || exp.duration.split(" ")[0]
    );
    return year >= startYear && year <= endYear;
  });
};

// Utility function to get current position
export const getCurrentPosition = () => {
  return experiences.find((exp) => exp.duration.includes("Present"));
};
