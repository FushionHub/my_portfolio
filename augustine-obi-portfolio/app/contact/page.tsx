const ContactPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Let's connect</h1>
        <p className="text-lg text-gray-400 mb-12">
          Contact me to discuss business opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left">
            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Subject" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg p-3 text-white focus:outline-none focus:border-primary" />
              <textarea placeholder="Message" rows={5} className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg p-3 text-white focus:outline-none focus:border-primary"></textarea>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary">Phone</h3>
              <p className="text-gray-400">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">Email</h3>
              <p className="text-gray-400">augustine.obi@fushionhubai.com.ng</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">Address</h3>
              <p className="text-gray-400">Owerri North, Imo State, Nigeria</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">Social Links</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
