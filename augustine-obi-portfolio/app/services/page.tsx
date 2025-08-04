const ServicesPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What I Can Do For You
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            I offer a range of services to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Strategic Marketing</h3>
              <p className="text-gray-400">
                I craft and execute data-driven marketing strategies that build brand equity, generate high-quality leads, and capture market share.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Operations Management</h3>
              <p className="text-gray-400">
                I streamline and scale business operations, implementing efficient workflows and systems to reduce costs and enhance product delivery.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Brand Development</h3>
              <p className="text-gray-400">
                I create and nurture powerful brands that connect with audiences, build loyalty, and provide a sustainable competitive edge.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">AI Integration</h3>
              <p className="text-gray-400">
                Leveraging the power of AI to automate processes, gain insights from data, and create innovative new products and services.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Business Development</h3>
              <p className="text-gray-400">
                Identifying and pursuing new business opportunities, forming strategic partnerships, and driving revenue growth.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-400">
                Guiding organizations through the process of digital transformation, from strategy to execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
