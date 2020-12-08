import React from 'react';

interface ProjectLink {
  href: string;
  text: string;
}

interface ProjectProps {
  name: string;
  technologies: string;
  desc: string;
  links: ProjectLink[];
}

const Project = ({ name, technologies, desc, links }: ProjectProps) => {
  return (
    <section className={`project project--${name.toLowerCase()}`}>
      <h3 className='project__name'>{name}</h3>
      <p className='project__tech'>Built with {technologies}</p>
      <p className='project__desc'>{desc}</p>
      <ul className='project__links'>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
