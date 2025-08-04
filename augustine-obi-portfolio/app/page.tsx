import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative text-white overflow-hidden">
      <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
        <p className="text-primary font-semibold text-lg">Hey, I’m Augustine Obi</p>
        <h1 className="text-5xl md:text-7xl font-bold mt-2">
          I'm a <span className="text-primary">CMO & COO</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl">
          With expertise in cutting-edge technologies and a passion for driving growth, I build innovative and robust marketing strategies and operational frameworks. I specialize in scalable business solutions and leveraging AI for market advantage.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/portfolio" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors">
            My Work
          </Link>
          <Link href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors">
            Hire Me
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        {/* Placeholder for background image or animation */}
        <div className="absolute inset-0 bg-background opacity-90"></div>
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
    </div>
  );
}
