import {Link} from "react-router-dom"
import { useState } from "react"

interface ItemService {
    className?: string;
}

export default function ItemServices({className = ""}:ItemService) {
    const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [services] = useState([
        { name: "Consulting", path: "/services/consulting" },
        { name: "Development", path: "/services/development" },
        { name: "Design", path: "/services/design" },
    ]);
    
    return (
        <div className={`relative ${className}`}>
            <button 
            className="flex items-center hover:text-blue-500"
            onClick={toggleDropdown}
  
            > 
                Services
                <svg className="w-4 h-4 ml-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div 
                className="absolute top-full left-0 mt-4 w-48  border border-gray-300 rounded-lg shadow-lg z-10"
                onClick={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                >
                    {services.map((service) => (
                        <Link key={service.name} to={service.path} className="block px-4 py-2 hover:bg-blue-400 rounded-lg">
                            {service.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}