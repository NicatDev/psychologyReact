import { useState, useEffect, useRef } from 'react';
import { User } from '../../types/user';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";

interface ProfileDropdownProps {
    user: User;
    onLogout: () => void;
}

export default function ProfileDropdown({ user, onLogout }: ProfileDropdownProps) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-full focus:outline-none"
            >
                {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full" />
                ) : (
                    <div className='flex gap-2 items-center'>
                        <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm uppercase">
                            {user.name[0]}
                        </div>
                        <span>{user.name}</span>
                    </div>
                )}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    <ul className="text-sm text-gray-600">
                        <li>
                            <Link
                                to="/profile"
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                            >
                                <FiUser />
                                Profil
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={onLogout}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center gap-2"
                            >
                                <FiLogOut />
                                Çıxış
                            </button>
                        </li>
                    </ul>

                </div>
            )}
        </div>
    );
}
