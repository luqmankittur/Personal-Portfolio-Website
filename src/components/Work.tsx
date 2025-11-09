import { ExternalLink, ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Minimalistix Dark',
      description: 'A minimal looking dark & animated overlay for your streams.',
      image: '/work/minimal-dark.jpg',
      link: 'https://www.behance.net/gallery/128429155/Minimalistix-Dark-Stream-Overlay-FREE',
      technologies: ['After Effects', 'Photoshop']
    },
    {
      id: 2,
      title: 'Radon',
      description: 'A dark Red Matrix insipred animated overlay for your streams.',
      image: '/work/radon.jpg',
      link: 'https://www.behance.net/gallery/161510757/Radon-Stream-Overlay-FREE',
      technologies: ['After Effects', 'Photoshop']
    },
    {
      id: 3,
      title: 'Minimalistix Light',
      description: 'A minimal looking light & animated overlay for your streams.',
      image: '/work/minimal-light.jpg',
      link: 'https://www.behance.net/gallery/128030617/Minimalistix-Light-Stream-Overlay-FREE',
      technologies: ['After Effects', 'Photoshop']
    }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of my recent projects and creative solutions 
            I've delivered for clients across different industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center space-x-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Learn More</span>
                  <ArrowRight 
                    size={16} 
                    className="ml-1 group-hover/link:translate-x-1 transition-transform" 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.behance.net/luqmankittur"
            className="btn-hero inline-flex items-center space-x-2"
            target="_blank"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;