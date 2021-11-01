import Link from 'next/link'

function NavLink({children, active}) {
    return (
        <div className='text-md font-bold uppercase font-orbitron cursor-pointer relative group text-shadow-lg tracking-widest'>
        <Link href="/">
            {children}
        </Link>
            <div className={`absolute rounded-full h-1 ${active ? 'w-full' : 'w-0'} group-hover:w-full mt-2 bg-purple-500 bottom-50 transition-all duration-200`}></div>
        </div>
    )
}

export default NavLink
