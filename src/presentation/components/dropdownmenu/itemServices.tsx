import {Link} from "react-router-dom"
import { useState } from "react"
import { ROUTES } from "../../../shared"
import type { ItemService } from "../../../shared"

export default function ItemServices({className = "", onServiceClick, activeItem, onServiceSelect}:ItemService) {
    const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [services] = useState([
        { name: "Consulting", path: ROUTES.SERVICES.CONSULTING },
        { name: "Development", path: ROUTES.SERVICES.DEVELOPMENT },
        { name: "Design", path: ROUTES.SERVICES.DESIGN },
    ]);
    const getDisplayText = () => {
        if (activeItem === "Consulting") return "Consulting";
        if (activeItem === "Development") return "Development";
        if (activeItem === "Design") return "Design";
        return "Services";
    };
    
    return (
        <div className={`relative ${className}`}>
            <button 
            className="flex items-center hover:text-white "
            onClick={toggleDropdown}
  
            > 
                {getDisplayText()}
                <svg className="w-4 h-4 ml-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div 
                className="bg-white/50 text-black absolute top-full left-0 mt-4 w-48  border border-gray-300 rounded-lg shadow-lg z-10"
                onClick={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                >
                    {services.map((service) => (
                        <Link 
                            key={service.name} 
                            to={service.path} 
                            className="block px-4 py-2 hover:bg-white rounded-lg"
                            onClick={() => {
                                onServiceClick?.();
                                onServiceSelect?.(service.name);
                                setIsOpen(false);

                            }}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}