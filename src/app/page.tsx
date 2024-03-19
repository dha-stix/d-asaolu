import Link from "next/link";
import Image from "next/image";
import portfolio from "../../public/portfolio.jpeg";

export default function Home() {
  return (
    <main className="w-full">
      <nav className="w-full flex min-h-[10vh] items-center justify-between px-8 py-4 ">
        <h2 className="text-2xl text-[#40A2D8]">David</h2>
        <Link href="https://drive.google.com/file/d/1w0DzCh97VukgHjEC1CLbJC_fOActceqb/view" target="_blank" className="bg-[#31363F] px-8 py-4 rounded-md">RESUME </Link>
      </nav>
      <main className="w-full px-8 min-h-[90vh] flex items-center justify-between">
        <section className="md:w-2/3 w-full md:px-6">
          <h2 className="text-3xl text-gray-400 mb-4">Hello, I am David 👋🏻</h2>
          <h3 className="text-3xl mb-6 text-[#40A2D8]">Technical Writer, Frontend Mobile & Web Engineer </h3>
          <p className="md:text-lg text-md">When I&apos;m not busy writing technical how-to guides for software products, you&apos;ll find me immersed in my side projects. I love creating blog posts and crafting clear how-to guides detailing the process behind bringing those projects to life.</p>
          <div className="flex space-x-4 items-center my-8">
            <Link href="https://www.linkedin.com/in/david-asaolu234/" target="_blank" className="md:text-lg text-md text-[#40A2D8] hover:underline">LinkedIn</Link>
            <Link href="https://dev.to/arshadayvid" target="_blank" className="md:text-lg text-md text-[#40A2D8] hover:underline">Blog</Link>
            <Link href="https://github.com/dha-stix" target="_blank" className="md:text-lg text-md text-[#40A2D8] hover:underline">GitHub</Link>
          </div>

          <p className="mt-10 text-sm text-pink-300">Copyright &copy; {new Date().getFullYear()}</p>
          
        </section>
        <div className="w-1/3 md:block hidden">
          <Image src={portfolio} alt="David Asaolu" width={500} className="rounded-md "/>
        </div>
      </main>
    </main>
  );
}
