
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 md:pt-24 lg:pt-32 relative">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-up">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
              Welcome to my portfolio
            </span>
            <h1 className="max-w-3xl">
              Hi, I'm <span className="text-primary">John Doe</span>, <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-muted-foreground">
                Creative Developer & Designer
              </span>
            </h1>
            <p className="text-lg max-w-lg text-muted-foreground">
              I craft engaging digital experiences through creative development and thoughtful design. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full" onClick={() => window.location.href = '#projects'}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" onClick={() => window.location.href = '#contact'}>
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="w-full h-[350px] md:h-[450px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Hero Image" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-4">Passion for Creation</h2>
                    <p className="text-lg max-w-md">Building digital experiences that inspire and engage</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-300/20 backdrop-blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <a 
          href="#about" 
          className="animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
