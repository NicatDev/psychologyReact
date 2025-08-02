import { FaUsers, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  const userCount = 128;
  const orderCount = 45;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
          <FaUsers size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">İstifadəçilər</h3>
          <p className="text-2xl font-bold">{userCount}</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4">
        <div className="bg-green-100 text-green-600 p-3 rounded-full">
          <FaShoppingCart size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Sifarişlər</h3>
          <p className="text-2xl font-bold">{orderCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
