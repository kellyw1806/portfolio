export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a 3D website with Blender and Three.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Passionate about tech? Let's chat!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Uncoil - Physical Therapy Assistance App with AI",
    des: "Built a full-stack software app to help make physical therapy more accessible by leveraging the YOLOv11 model for real-time pose correction feedback and a self-trained custom deep neural network model for the creation of a personalized workout plan.",
    img: "/uncoil.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/kellyw1806/uncoil",
  },
  {
    id: 2,
    title: "Chess",
    des: " Developed a full chess game engine with a four-tiered difficulty system and score-tracking, employing modular design and encapsulation.",
    img: "/chess.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/kellyw1806/chessai",
  },
  {
    id: 3,
    title: "Dynamic Asset Allocation - AI powered",
    des: "Created a crypto-trading simulation with interactive UI by employing advanced Reinforcement Learning techniques, like N-step bootstrapping to accelerate the Q-learning model’s training.",
    img: "/crypto.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/alyshawang/asset_allocation_simulated_trading",
  },
  {
    id: 4,
    title: "Robo-Advisor - Stock Portfolio Generator",
    des: "Created a safe stock portfolio algorithm, resulting in a margin of error of 0.45% compared to the 3% change in the S&P 500, winning runner-up in the course competition. Used advanced strategies like Monte Carlo simulations and the Sharpe ratio optimization.",
    img: "/trading.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/kellyw1806/Robo-Advisor",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - RedIron Technologies (Sept 2024 - Dec 2024)",
    desc: ["Optimized RESTful and GraphQL APIs using ASP.NET, reducing retrieval time from 3 to 0.4 seconds and enabling flexible backend integration.",
    "Constructed a caching solution using Redis to handle frequently accessed transactional data, enabling sub-200ms response times for high-traffic endpoints.",  "Developed custom logic using C#/.NET Framework, Entity Framework and MySQL for snippet storing feature, improving operational efficiency for retail managers by 36%"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern - Lifestyle HP (Jan 2024 - Apr 2024)",
    desc: ["Engineered the backend for an inventory software with Django and PostgreSQL with real-time tracking capabilities, saving staff 10+ hours per week of manual inventory tasks.", 
    "Deployed a containerized backend with Docker and Kubernetes on AWS for dynamic scaling.",
    "Wrote dynamic Python automation scripts using Salesforce Bulk 2.0 API for efficient performance of CRUD operations for 10,000+ records."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer - Jasmine AI (Aug 2023 - Nov 2023)",
    desc: ["Used Express.js to architect a robust API layer for efficient data exchange and communication between client and server, reducing response time by 40%.","Leveraged OpenAI API to create a multi-language chatbot. Developed a function to automate Zoom meeting scheduling via emails through the chatbot with Amazon SES and Zoom API."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Front-End Developer Intern - Champagne Centre Ltd. (May 2023 - Aug 2023)",
    desc: ["Led the migration from the PHP infrastructure to React framework. Created and re-designed 20+ pages in Figma with reusable UI components, reducing code duplication by 40%."],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/kellyw1806"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kelly-wang-4981311b6/"
  },
];
