const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-800 py-8">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Augustine Obi. All rights reserved.</p>
        <p className="mt-2">Designed to impress.</p>
      </div>
    </footer>
  );
};

export default Footer;
