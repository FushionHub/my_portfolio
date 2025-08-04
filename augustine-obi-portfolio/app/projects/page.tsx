import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'AI-Powered Content Generation Platform',
    description: 'Led the development and launch of an AI-powered content generation platform that helps businesses create high-quality content at scale.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    projectUrl: 'https://fushionhubai.com.ng',
  },
  {
    title: 'Strategic Brand Repositioning',
    description: 'Executed a comprehensive brand repositioning strategy that resulted in a 40% increase in brand awareness and a 25% growth in market share.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
    projectUrl: '#',
  },
  {
    title: 'Operational Efficiency Overhaul',
    description: 'Streamlined internal operations by implementing new technologies and workflows, leading to a 30% reduction in operational costs.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
    projectUrl: '#',
  },
];

const ProjectsPage = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
