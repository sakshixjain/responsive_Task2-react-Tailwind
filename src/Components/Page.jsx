import React from 'react'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const services = {
  Website: [
    {
      title: "Static Website",
      desc: "Simple, fast, and secure websites with minimal updates.",
    },
    {
      title: "HTML5 Development",
      desc: "Responsive and multimedia-rich websites using HTML5.",
    },
    {
      title: "Bootstrap Development",
      desc: "Responsive design with Bootstrap framework.",
    },
    {
      title: "WordPress Website",
      desc: "Customizable websites built on WordPress.",
    },
    {
      title: "Dynamic Website",
      desc: "Real-time, database-driven web applications.",
    },
    {
      title: "PHP Development",
      desc: "Server-side scripting using PHP.",
    },
  ],
  "Web Application": [
    {
      title: "Single Page Apps",
      desc: "Seamless user experience with React, Angular, Vue.",
    },
    {
      title: "Progressive Web Apps",
      desc: "Offline access and mobile-friendly features.",
    },
    {
      title: "Single Page Apps",
      desc: "Seamless user experience with React, Angular, Vue.",
    },
    {
      title: "Single Page Apps",
      desc: "Seamless user experience with React, Angular, Vue.",
    }
  ],
  "Custom Application": [
    {
      title: "Tailored Solutions",
      desc: "Apps built exactly to your business needs.",
    },
    {
      title: "Workflow Automation",
      desc: "Automate internal processes and reduce manual tasks.",
    },
  ],
  "Mobile Application": [
    {
      title: "Android Development",
      desc: "Native Android apps using Java/Kotlin.",
    },
    {
      title: "iOS Development",
      desc: "Native iOS apps using Swift.",
    },
    {
      title: "Flutter Development",
      desc: "Cross-platform apps with Flutter.",
    },
  ],
  "Digital Marketing": [
    {
      title: "SEO Services",
      desc: "Improve your visibility in search engines.",
    },
    {
      title: "Social Media Marketing",
      desc: "Engage your audience on social platforms.",
    },
  ],
  "Cloud | Domain": [
    {
      title: "Domain Registration",
      desc: "Get the perfect domain for your business.",
    },
    {
      title: "Cloud Hosting",
      desc: "Scalable cloud infrastructure for your apps.",
    },
  ],
  "Collaboration & Productivity": [
    {
      title: "CRM Integration",
      desc: "Manage customer relationships more effectively.",
    },
    {
      title: "Team Collaboration Tools",
      desc: "Empower teams to work efficiently together.",
    },
  ],
  Maintenance: [
    {
      title: "Bug Fixes & Updates",
      desc: "Keep your apps running smoothly with regular updates.",
    },
    {
      title: "Performance Monitoring",
      desc: "Track and optimize system performance.",
    },
  ],
  Integration: [
    {
      title: "API Integration",
      desc: "Connect your system with third-party services.",
    },
    {
      title: "ERP/CRM Integration",
      desc: "Synchronize business platforms efficiently.",
    },
  ],
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



const countries = [  "in", "us", "gb", "ca", "mx", "de", "fr", "it", "jp", "au",
  "nl", "es", "br", "cn", "za", "kr"
];
const techCategories = ["Frontend", "Backend", "eCommerce", "Framework", "Mobile", "Database", "Cloud"];

const techItems = {
  Frontend: [
    { name: "HTML 5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "jQuery", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg" },
    { name: "CSS 3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
    { name: "React JS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  ],
  Backend: [
    { name: "PhP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
    
  ],
  eCommerce: [
    { name: "Shopify", icon: "" },
    { name: "Woocommerce", icon: "/icons/javascript.png" },
  
  ],
  Framework: [
    { name: "Laravel", icon: "/icons/html5.png" },
    { name: "Cake Php", icon: "/icons/javascript.png" },
    
    { name: "Zend", icon: "/icons/react.png" },
    { name: "Yii", icon: "/icons/typescript.png" },
  ],
  Mobile: [
    { name: "ios", icon: "/icons/html5.png" },
    { name: "Android", icon: "/icons/javascript.png" },  
    { name: "React-native", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },

  ],
  Database: [
    { name: "Mysql", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Monogodb", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "MsSql", icon: "/" },
 
   
  ]
  // Add other categories similarly...
};

function Page() {
  const [techOpen, setTechOpen] = useState(false);
const [activeTech, setActiveTech] = useState("Frontend");
  const categories = Object.keys(services);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(categories[0]);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const Section = ({ title, items, id }) => (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={() => window.innerWidth < 768 && toggleSection(id)}
      >
        <h3 className="text-2xl font-bold mb-2 border-b-4 border-[#00B9F1] inline-block">
          {title}
        </h3>
        <span className="text-xl md:hidden">
          {openSection === id ? <i class="fa-solid fa-chevron-up"></i>: <i class="fa-solid fa-chevron-down"></i>}
        </span>
      </div>
      <ul
        className={`ul mt-2 text-lg text-[#B8B9DA] space-y-2 ${
          openSection === id ? "block" : "hidden"
        } md:block`}
      >
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>

    <header className="bg-[#031136] text-white text-lg">
      {/* Top Contact Bar */}
      <div className="header-nbr flex flex-wrap justify-between items-center px-24 py-2 border-b border-blue-900">
        <div className=" flex gap-4 flex-wrap">
          <span className="flex items-center ml-5 gap-1 hover:text-blue-400">
            <img src="flag.png" alt="" className='h-4 w-6 ' /> <strong className='text-white'>Sales:</strong> +91 997-139-2828
          </span>
          <span className="flex items-center ml-5 gap-1 hover:text-blue-400">
          <img src="flag.png" alt="" className='h-4 w-6' />  <strong className='text-white' >Support:</strong> +91 997-188-8346
          </span>
          <span className="flex items-center ml-5 gap-1 hover:text-blue-400">
          <img src="flag.png" alt="" className='h-4 w-6' />  +52-984-278-8753
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 ml-5 cursor-pointer hover:text-blue-400">
          <i className="fa-solid fa-envelope text-white"></i> Support
          </span>
          <span className="flex items-center gap-1 ml-5 cursor-pointer hover:text-blue-400">
          <i className="fa-solid fa-envelope text-white"></i>  Client Login
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className=" logo flex justify-between ml-5 items-center px-24 py-3 bg-[#031136]">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <span className="italic"><img src="logo.png" alt="" /></span>
        </div>

        {/* Navigation Links */}
        <ul className="header-heading flex gap-6 font-medium text-white">
          <li>Home</li>
          <li className="relative group z-50">
  <div className="cursor-pointer flex items-center gap-1">
    About Us <i className="fa-solid fa-chevron-down"></i>
  </div>
  <ul className="absolute left-0 hidden group-hover:block bg-gradient-to-b bg-gray-900 text-xl text-white mt-2 py-2 w-80 rounded shadow-lg z-50">
    <li className="bg-cyan-500 font-semibold px-4 py-2">Who We Are</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Our History</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Testimonials</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Clients</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">We Work In</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Mission/Vision</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Engagement Module</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Project Methodology</li>
  </ul>
</li>

          <div className="relative group">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="px-1 hover:text-blue-400 transition"
      >
        Services <i className="fa-solid fa-chevron-down"></i>
      </button>

      {open && (
  <div
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className="absolute z-50 top-full left-1/2 -translate-x-1/2 w-[90vw] bg-white shadow-xl text-black flex border-t-2 border-blue-600 transition-all duration-300"
  >
    {/* Left Category List */}
    <div className="w-1/4 bg-[#031136] text-white p-4 space-y-2">
      {categories.map((cat) => (
        <div
          key={cat}
          onMouseEnter={() => setActive(cat)}
          className={`p-2 rounded cursor-pointer ${
            active === cat ? "bg-blue-500" : "hover:bg-blue-800"
          }`}
        >
          {cat}
        </div>
      ))}
    </div>

    {/* Right Dynamic Cards */}
    <div className="w-3/4 p-4 grid grid-cols-3 gap-4 bg-gray-100">
      {services[active].map((item) => (
        <div
          key={item.title}
          className="bg-[#1a1f2e] text-white p-4 rounded shadow hover:shadow-md transition"
        >
          <h4 className="font-semibold mb-2">{item.title}</h4>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)}

    </div>

    <div className="relative group">
  <button
    onMouseEnter={() => setTechOpen(true)}
    onMouseLeave={() => setTechOpen(false)}
    className="px-1 hover:text-blue-400 transition"
  >
    Technology <i className="fa-solid fa-chevron-down"></i>
  </button>

  {techOpen && (
    <div
      onMouseEnter={() => setTechOpen(true)}
      onMouseLeave={() => setTechOpen(false)}
      className="absolute z-50 top-full left-1/2 -translate-x-1/2 w-[90vw] bg-white shadow-xl text-black flex border-t-2 border-blue-600 transition-all duration-300"
    >
      {/* Left Categories */}
      <div className="w-1/4 bg-[#031136] text-white p-4 space-y-2">
        {techCategories.map((cat) => (
          <div
            key={cat}
            onMouseEnter={() => setActiveTech(cat)}
            className={`p-2 rounded cursor-pointer ${
              activeTech === cat ? "bg-blue-500" : "hover:bg-blue-800"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Right Tech Items */}
      <div className="w-3/4 p-4 grid grid-cols-3 gap-4 bg-gray-100">
        {techItems[activeTech]?.map((item, idx) => (
          <div key={idx} className=" items-center gap-4 p-2 bg-white rounded shadow hover:shadow-md transition">
            <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

<li className="relative group z-50">
  <div className="cursor-pointer flex items-center gap-1">
  Industry <i className="fa-solid fa-chevron-down"></i>
  </div>
  <ul className="absolute left-0 hidden group-hover:block bg-gradient-to-b bg-gray-900 text-xl text-white mt-2 py-2 w-80 rounded shadow-lg z-50">
    <li className="bg-cyan-500 font-semibold px-4 py-2">Education</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Retail</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Food, Travel & hotel</li>
    <li className="hover:bg-cyan-600 px-4 py-2 cursor-pointer">Media & Entertainment</li>
    
    
  </ul>
</li>
          <li>Career</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
        <i className="fa-solid fa-bars bar text-gray-300 "></i>
      </nav>
    </header>


    <div className='w-3/4 m-auto '>
      <div className="mt-20 m-16">
      <Slider {...settings}>
        <div>
          <img src="s1.webp" className='w-full rounded-4xl' alt="" />
        </div>
        <div>
          <img src="s2.webp" className='w-full rounded-4xl'  alt="" />
        </div>
        <div>
          <img src="s3.png" className='w-full rounded-4xl'  alt="" />
        </div>
        <div>
          <img src="s4.webp" className='w-full rounded-4xl'  alt="" />
        </div>
      </Slider>
      </div>
      
    </div>


    <footer className="bg-[#0C0C46] text-white text-sm pt-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Xpecto<sup>®</sup> IT Solutions Pvt Ltd
        </h2>
        <p className="text-[#00B9F1] text-2xl mt-2">A Reference Based Company</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-20 pb-10">
        <Section
          title="Expertise"
          id="expertise"
          items={[
            "Website Development",
            "Web Applications",
            "Custom Applications",
            "Mobile Applications",
            "Digital Marketing",
            "Cloud / Hosting",
            "Email Solutions",
            "Web / Mobile Maintenance"
          ]}
        />

        <Section
          title="Consulting"
          id="consulting"
          items={[
            "Blockchain",
            "Artificial Intelligence",
            "Information of Technology (IOT)",
            "NFT",
            "Digital Transformation",
            "ChatBot",
            "Web 3.0"
          ]}
        />

        <Section
          title="Hire"
          id="hire"
          items={[
            "Full Stack Developers",
            "Web Developers",
            "MERN Stack Developers",
            "UI/UX Designers",
            "Others"
          ]}
        />

        <Section
          title="Informations"
          id="informations"
          items={["Who We Are", "Clients", "We Work In", "Contact Us"]}
        />
      </div>

      <div className="award flex justify-between">
        <div className="border-rad flex flex-wrap w-[650px] gap-8 bg-white rounded-r-full py-6 px-4">
          <img src="public/f1.webp" alt="DUNS" className="h-24" />
          <img src="public/f2.png" alt="Clutch" className="h-24" />
          <img src="public/f3.png" alt="Top Software" className="h-24" />
          <img src="public/f4.svg" alt="Custom Development" className="h-24" />
        </div>

        <div className="icon flex-col md:flex-row text-lg justify-around -mt-6 items-center px-4 md:px-20 py-3 gap-6">
          <div className="text-[#B8B9DA] text-end md:text-right">
            <p className="mb-2 font-bold text-xl">Follow Us On:</p>
            <div className="flex gap-4 text-2xl text-[#B8B9DA]">
              <i className="fa-brands fa-facebook-f p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
              <i className="fa-brands fa-twitter p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
              <i className="fa-brands fa-instagram p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
              <i className="fa-brands fa-pinterest-p p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
              <i className="fa-brands fa-youtube p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
              <i className="fa-brands fa-google p-3 w-12 h-12 rounded-full bg-[#232563] flex items-center justify-center hover:bg-[#00B9F1] transition duration-300"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flag-div flex-col md:flex-row flex-wrap text-lg justify-around items-center px-4 -mt-16 md:px-20 py-8 gap-6">
        <div className="flag text-[#B8B9DA] text-end md:text-right">
          <p className="mb-2 font-bold text-xl">We Work in:</p>
          <div className="flex gap-3 flex-wrap-reverse justify-end text-[#B8B9DA]">
            {countries.map((code) => (
              <img
                key={code}
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={code}
                className="flag-icon w-8 flex-wrap h-6 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="foot border-t border-[#444] text-end py-4 px-4 text-xs flex-col md:flex-row justify-end items-end gap-2">
        <div className="img-foot flex justify-between m-7">
          <img src="public/logo.png" alt="" className="px-16" />
          <div className="foot-section flex flex-wrap gap-4 justify-end md:justify-start text-[#B8B9DA] text-xl">
            <a href="#">Privacy Policy |</a>
            <a href="#">Terms & Conditions |</a>
            <a href="#">Trademark Policy |</a>
            <a href="#">GDPR Policy |</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div className="foot-copy text-gray-500 -mt-12 text-lg justify-end items-end ">
          Copyright © 2013-2024 Xpecto<sup>®</sup> IT Solutions Pvt Ltd. All rights reserved
        </div>
        <div className="foot-end flex justify-end items-end">
          <img src="public/d2.png" alt="" />
          <img src="public/d3.png" alt="" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Page
