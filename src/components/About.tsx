const About = () => {
  const skills = [
    'Graphic Design',
    'Logo Design', 
    'Animation',
    'Stream Overlays',
    'Photo Editing',
    'Video Editing'
  ];

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
              
              {/* Main image */}
              <div className="relative glass-card p-6 rounded-2xl">
                <img
                  src='/images/aboutpic.png'
                  alt="Luqman's Portrait"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
                <p>
                  Hi! I'm <span className="text-primary font-semibold">Luqman</span>, 
                  a passionate graphic designer with over 3 years of experience creating 
                  stunning visual content that helps brands stand out in today's competitive market.
                </p>
                
                <p>
                  I specialize in creating modern, eye-catching designs that not only look 
                  amazing but also effectively communicate your message. From brand identities 
                  to digital artwork, I bring creativity and professionalism to every project.
                </p>
                
                <p>
                  When I'm not designing, you'll find me exploring new design trends, 
                  learning new techniques, or sharing free resources with the design community.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                What I Do Best
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="glass-card px-4 py-2 rounded-lg text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.fiverr.com/luqmankittur/design-an-animated-stream-overlay-pack-with-transitions"
                className="btn-hero text-center"
              >
                Let's Work Together
              </a>
              <a
                href="https://www.behance.net/luqmankittur"
                className="btn-secondary text-center"
                target="_blank"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;