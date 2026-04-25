import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link
            className={`${pathname.startsWith(href) && "bg-amber-400 p-4"}`}
            href={href}
        >
            {children}
        </Link>
    );
};

export default Navlink;