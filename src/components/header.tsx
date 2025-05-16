import Link from "next/link"

const Header = () => {
  return (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <Link href="/recipes" className="text-2xl font-bold">
      recipes
    </Link>
       <Link href="/" className="text-2xl font-bold">
      home
    </Link>
       <Link 
    href="/projects" className="text-2xl font-bold">
        projects
    </Link>
    </header>
  )
}

export default Header