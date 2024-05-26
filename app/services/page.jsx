"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using HTML, CSS, JavaScript, React, and Node.js.',
    href: '/services/web-development',
  },
  {
    num: '02',
    title: 'App Development',
    description: 'Creating mobile applications for Android and iOS using React Native and Flutter.',
    href: '/services/app-development',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and experiences using Figma, Sketch, and Adobe XD.',
    href: '/services/ui-ux-design',
  },
  {
    num: '04',
    title: 'Database Development',
    description: 'Designing and managing databases using MongoDB, PostgreSQL, and MySQL.',
    href: '/services/database-development',
  },
]

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: .4,
              ease: 'easeIn'
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          { services.map((service, index) => (
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover'>
                  {service.num}
                </div>
                <Link href={service.href}>
                  <BsArrowDownRight />
                </Link>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          )) }
        </motion.div>
      </div>
    </section>
  )
}

export default Services