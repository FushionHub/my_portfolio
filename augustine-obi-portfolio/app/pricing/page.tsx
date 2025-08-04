const PricingPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Consulting Packages
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the right package for your business needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Strategy Session</h3>
            <p className="text-5xl font-extrabold text-white mb-4">$500</p>
            <p className="text-gray-400 mb-6">One-time 90-minute session</p>
            <ul className="text-left space-y-2 text-gray-400">
              <li>- In-depth analysis of your business</li>
              <li>- Actionable recommendations</li>
              <li>- Follow-up email support</li>
            </ul>
            <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors w-full">
              Book Now
            </button>
          </div>
          <div className="border-2 border-primary rounded-lg p-8 text-center shadow-2xl scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">Monthly Retainer</h3>
            <p className="text-5xl font-extrabold text-white mb-4">$5,000</p>
            <p className="text-gray-400 mb-6">Per month</p>
            <ul className="text-left space-y-2 text-gray-400">
              <li>- Ongoing marketing & operations support</li>
              <li>- Weekly strategy calls</li>
              <li>- Priority email & chat support</li>
            </ul>
            <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors w-full">
              Get Started
            </button>
          </div>
          <div className="border border-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Project-Based</h3>
            <p className="text-5xl font-extrabold text-white mb-4">Custom</p>
            <p className="text-gray-400 mb-6">Based on project scope</p>
            <ul className="text-left space-y-2 text-gray-400">
              <li>- Tailored to your specific needs</li>
              <li>- Fixed price for the entire project</li>
              <li>- Dedicated project manager</li>
            </ul>
            <button className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors w-full">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
