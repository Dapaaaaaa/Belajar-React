import { useProfile } from "../hooks/useProfile";

const ProfilePage = () => {
  const { username, email, handleLogout } = useProfile();

  // Ambil huruf pertama untuk avatar
  const initial = username ? username.charAt(0).toUpperCase() : "?";

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Bagian Atas / Cover */}
        <div className="bg-blue-600 h-32 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-white flex items-center justify-center text-4xl font-black text-blue-600 shadow-md translate-y-16">
            {initial}
          </div>
        </div>

        {/* Bagian Info */}
        <div className="pt-20 pb-10 px-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {username || "Loading..."}
          </h2>
          <p className="text-gray-500 mb-8">{email}</p>

          <div className="space-y-3">
            <div className="flex justify-between p-4 bg-gray-50 rounded-2xl">
              <span className="text-gray-400">Role</span>
              <span className="font-semibold text-blue-600">Developer</span>
            </div>
            <div className="flex justify-between p-4 bg-gray-50 rounded-2xl">
              <span className="text-gray-400">Status</span>
              <span className="font-semibold text-green-500">Online</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-10 w-full bg-red-100 hover:bg-red-500 text-red-600 hover:text-white font-bold py-4 rounded-2xl transition-all duration-300 active:scale-95"
          >
            Logout Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;