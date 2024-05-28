"use client";

import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'About me',
  description: "I am Aviral Malik, a software developer with diverse experience spanning over 3 years in the field of computer science. I have worked on various projects, utilizing my skills in front-end and back-end development to create dynamic and responsive web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aviral Malik"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 952 841 0057"
    },
    {
      fieldName: "Experince",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "India"
    },
    {
      fieldName: "Crio.do",
      fieldValue: "avimalik02"
    },
    {
      fieldName: "Github",
      fieldValue: "aviral000"
    },
    {
      fieldName: "Linkedin",
      fieldValue: "Aviral Malik"
    },
    {
      fieldName: "Email",
      fieldValue: "avimalik02@gmail.com"
    },
    {
      fieldName: "Freelancing",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Spanish(Beginer)"
    },
  ]
}

const experience = {
  icon: '/assets/assets/resume/badge.svg',
  title: 'My Experince',
  description: "Throughout my career, I have had the opportunity to work with various organizations, contributing to their projects as a product designer and frontend developer. My experience spans across freelance projects and contract-based positions, where I have honed my skills and delivered exceptional results.",
  items: [
    {
      company: "FreeLancer.co",
      position: "Product Designer",
      duration: "2021 - Present",
    },
    {
      company: "UNSO Real Estate",
      position: "Product Designer",
      duration: "May 2022 - Dec 2022",
    },
    {
      company: "LoyLuxury",
      position: "Frontend Developer",
      duration: "April 2023 - June 2024",
    },
  ]
}

const education = {
  icon: '/assets/assets/resume/cap.svg',
  title: 'My Education',
  description: "I have a solid educational background in computer science and engineering, complemented by specialized training programs that have equipped me with the latest skills and knowledge in software development.",
  items: [
    {
      institution: "CCS University",
      degree: "B.Tech/BS",
      duration: "2020 - 2024",
    },
    {
      institution: "Crio.do Learning Program",
      degree: "Full-Stack Engineer Program",
      duration: "2023 - 2024",
    },
    {
      institution: "Apna College Bootcamp",
      degree: "DSA from beginner to professional",
      duration: "2024",
    },
    {
      institution: "Web-Tech Bootcamp",
      degree: "Postgre training and certification",
      duration: "2022",
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "I possess a diverse set of skills in various programming languages, frameworks, and tools that enable me to deliver high-quality software solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      description: "Expertise in HTML5 for structuring and presenting content on the web."
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      description: "Proficient in CSS3 for designing visually appealing and responsive web pages."
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description: "Skilled in JavaScript for creating dynamic and interactive web applications."
    },
    {
      icon: <FaJava />,
      name: "Java",
      description: "Experienced in Java for building robust and scalable backend systems."
    },
    {
      icon: <FaPython />,
      name: "Python",
      description: "Knowledgeable in Python for scripting, automation, and web development."
    },
    {
      icon: <FaReact />,
      name: "React",
      description: "Proficient in React for building modern and efficient front-end applications."
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "Experienced in Tailwind CSS for rapid and custom styling of web applications."
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      description: "Skilled in Next.js for server-side rendering and building static websites."
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      description: "Proficient in Figma for designing and prototyping user interfaces."
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "Experienced in Node.js for building scalable server-side applications."
    }
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          deplay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((items, index) => (
                      <li key={index} className='bg-[#34343d] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-teal-400'>{items.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {items.position}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-teal-400'></span>
                          <p className='text-white/60'>{items.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((items, index) => (
                      <li key={index} className='bg-[#34343d] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-teal-400'>{items.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                          {items.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-teal-400'></span>
                          <p className='text-white/60'>{items.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-teal-400 transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index) => (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume