import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Go-to-Market Strategy for AI SaaS Launch',
    description: 'Developed and executed a multi-channel go-to-market strategy for a new AI SaaS product, resulting in 10,000+ signups in the first 3 months.',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop',
    projectUrl: '#',
  },
  {
    title: 'Global Expansion & Market Penetration',
    description: 'Led the successful expansion into three new international markets, achieving a 50% year-over-year growth in revenue from these regions.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    projectUrl: '#',
  },
  {
    title: 'Sales & Marketing Funnel Optimization',
    description: 'Overhauled the sales and marketing funnel, implementing a data-driven approach that increased conversion rates by 35%.',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop',
    projectUrl: '#',
  },
];

const PortfolioPage = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
