const ContactSection = () => {
    return (
      <div className="flex flex-col items-start p-4 bg-black text-white space-y-4">
        <p className="text-lg text-left">
            We collaborate with all who <br />
            believes in the education of our next generation. <br />
            <span className="font-bold"> Let's transform the future of AI together. </span>
        </p>
        <a href="mailto:luminaibootcamps@gmail.com" className="flex items-center space-x-2 group">
            <span className="text-lg group-hover:scale=[102%] transition-transform duration-300">
                luminaibootcamps@gmail.com
            </span>
            <svg 
                className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </a>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white group-hover:bg-transparent transition-all duration-300"></div>
    </div>
    );
  };
  
  export default ContactSection;