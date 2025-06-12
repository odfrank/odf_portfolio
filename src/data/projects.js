// Projects data - easily maintainable structure
export const projects = [
  {
    id: 1,
    title: "School Management System",
    description:
      "Modern upgraded version of legacy school management application used across majority of private and public schools in Alberta. Built with microservices architecture.",
    techStack: [
      "Blazor",
      ".NET 6",
      "GraphQL",
      "Ocelot",
      "RabbitMQ",
      "NextJS",
      "Keycloak",
      "Docker",
      "Kubernetes",
      "GCP",
    ],
    demoLink: "https://demo.schoolmgmt.ca",
    codeLink: "https://github.com/odfrank/school-management-system",
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Enterprise Insurance Platform",
    description:
      "Comprehensive insurance application upgrade with modern SPA frameworks and enterprise-grade architecture for enhanced user experience.",
    techStack: [
      "C#",
      ".NET Core",
      "Blazor",
      "JavaScript",
      "SQL Server",
      "Azure",
      "Azure DevOps",
    ],
    demoLink: "https://demo.insurance-platform.com",
    codeLink: "https://github.com/odfrank/enterprise-insurance",
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: "Multi-Location Inventory System",
    description:
      "High-performance inventory management system with real-time tracking across multiple company locations and comprehensive reporting.",
    techStack: [
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "React",
      "Redux",
      "Azure Web Apps",
      "Bootstrap",
      "MS Identity",
    ],
    demoLink: "https://demo.inventory-tracker.ca",
    codeLink: "https://github.com/odfrank/inventory-management",
    featured: false,
    image: null,
  },
  {
    id: 4,
    title: "Industrial Plant Monitoring",
    description:
      "Custom APIs connecting with industrial sensors and controllers for proactive maintenance. Includes WPF applications for PLC automation.",
    techStack: [
      "Blazor",
      "WPF",
      "C#",
      ".NET Core",
      "SQL Server",
      "SSRS",
      "Industrial IoT",
      "PLC Integration",
    ],
    demoLink: null,
    codeLink: "https://github.com/odfrank/industrial-monitoring",
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: "Tax Calculation Engine",
    description:
      "RESTful APIs and microservices for accurate tax calculations with comprehensive testing and validation algorithms.",
    techStack: [
      "ASP.NET Core",
      "C#",
      "React",
      "Microservices",
      "SQL Server",
      "Postman",
      "Unit Testing",
    ],
    demoLink: "https://demo.tax-engine.com",
    codeLink: "https://github.com/odfrank/tax-calculation-engine",
    featured: false,
    image: null,
  },
  {
    id: 6,
    title: "Financial Management Platform",
    description:
      "Scalable financial management system ensuring compliance with regulatory requirements and performance optimization.",
    techStack: [
      "C#",
      ".NET Framework",
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Financial Compliance",
    ],
    demoLink: null,
    codeLink: "https://github.com/odfrank/financial-platform",
    featured: false,
    image: null,
  },
  {
    id: 7,
    title: "Field Inspection Automation",
    description:
      "C# applications to automate field inspection processes, saving 25% in work-time with ASP.NET workflow management.",
    techStack: [
      "C#",
      "ASP.NET",
      "JavaScript",
      "Ajax",
      "Visual Basic",
      "SQL Server",
      "Workflow Automation",
    ],
    demoLink: null,
    codeLink: "https://github.com/odfrank/field-inspection-automation",
    featured: false,
    image: null,
  },
  {
    id: 8,
    title: "Project Order Tracking System",
    description:
      "Comprehensive C# application for managing vendor equipment orders and deliveries with advanced reporting capabilities.",
    techStack: [
      "C#",
      ".NET Framework",
      "SQL Server",
      "Crystal Reports",
      "Order Management",
      "Vendor Integration",
    ],
    demoLink: null,
    codeLink: "https://github.com/odfrank/order-tracking-system",
    featured: false,
    image: null,
  },
];

// Alternative data structure for different project categories
export const projectsByCategory = {
  enterprise: projects.filter((project) =>
    project.techStack.some((tech) =>
      ["Blazor", ".NET Core", "Enterprise", "Azure"].includes(tech)
    )
  ),
  fullStack: projects.filter((project) =>
    project.techStack.some((tech) =>
      ["React", "NextJS", "JavaScript"].includes(tech)
    )
  ),
  backend: projects.filter(
    (project) =>
      project.techStack.some((tech) =>
        ["C#", "ASP.NET", "SQL Server"].includes(tech)
      ) &&
      !project.techStack.some((tech) =>
        ["React", "NextJS", "JavaScript"].includes(tech)
      )
  ),
  industrial: projects.filter((project) =>
    project.techStack.some((tech) =>
      ["WPF", "PLC", "Industrial"].includes(tech)
    )
  ),
};

// Utility function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Utility function to get projects by technology
export const getProjectsByTech = (technology) => {
  return projects.filter((project) =>
    project.techStack.some((tech) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Utility function to get recent projects (first 6)
export const getRecentProjects = () => {
  return projects.slice(0, 6);
};
