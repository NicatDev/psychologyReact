import React from "react";

interface UserProfileProps {
  name: string | undefined;
  email: string | undefined;
  avatarUrl?: string | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatarUrl }) => {
    return (
        <div className="flex items-center gap-6 p-6 border-b border-gray-200">
            {avatarUrl && <img
                src={avatarUrl}
                alt="Profil şəkli"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />}
            <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-600">{email}</p>
            </div>
        </div>
    );
};

export default UserProfile;
