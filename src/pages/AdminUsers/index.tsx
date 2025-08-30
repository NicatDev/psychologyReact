import { useState } from "react";
import { Table, Button, Popover, Modal, Input, Select, message } from "antd";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import type { ColumnsType } from "antd/es/table";

interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

interface Test {
  id: string;
  name: string;
}

const Users: React.FC = () => {
  const [users] = useState<User[]>([
    {
      id: 1,
      name: "Ali",
      surname: "Gasimzadeh",
      email: "ali@example.com",
      phone: "+994501234567",
    },
    {
      id: 2,
      name: "Leyla",
      surname: "Mammadova",
      email: "leyla@example.com",
      phone: "+994551234567",
    },
    {
      id: 3,
      name: "John",
      surname: "Doe",
      email: "john@example.com",
      phone: "+994701234567",
    },
  ]);

  const tests: Test[] = [
    { id: "test1", name: "Psixoloji Test" },
    { id: "test2", name: "İntellekt Testi" },
    { id: "test3", name: "Yaradıcı Test" },
  ];

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const getUniqueValues = <K extends keyof User>(
    data: User[],
    key: K
  ): { text: string | number; value: string | number }[] => {
    const uniqueVals = Array.from(new Set(data.map((item) => item[key])));
    return uniqueVals.map((val) => ({ text: val, value: val }));
  };

  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => a.id - b.id,
      filters: getUniqueValues(users, "id"),
      onFilter: (value, record) => record.id === Number(value),
    },
    {
      title: "Adı",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      filters: getUniqueValues(users, "name"),
      onFilter: (value, record) => record.name === value,
    },
    {
      title: "Soyadı",
      dataIndex: "surname",
      key: "surname",
      sorter: (a, b) => a.surname.localeCompare(b.surname),
      filters: getUniqueValues(users, "surname"),
      onFilter: (value, record) => record.surname === value,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      filters: getUniqueValues(users, "email"),
      onFilter: (value, record) => record.email === value,
    },
    {
      title: "Nömrə",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      filters: getUniqueValues(users, "phone"),
      onFilter: (value, record) => record.phone === value,
    },
    {
      title: "Actions",
      key: "actions",
      width: 160,
      render: (_: any, record: User) => {
        const popoverContent = (
          <div className="flex flex-col space-y-2">
            <Button
              type="text"
              onClick={() => {
                setSelectedUser(record);
                setNewPassword("");
                setIsPasswordModalOpen(true);
              }}
            >
              Parolu dəyiş
            </Button>
            <Button
              type="text"
              onClick={() => {
                setSelectedUser(record);
                setSelectedTest(null);
                setIsAssignModalOpen(true);
              }}
            >
              Test təyin et
            </Button>
          </div>
        );

        return (
          <Popover
            content={popoverContent}
            trigger="click"
            placement="bottomRight"
          >
            <Button icon={<HiOutlineDotsHorizontal size={20} />} />
          </Popover>
        );
      },
    },
  ];

  const handleSavePassword = () => {
    if (!newPassword) {
      message.error("Zəhmət olmasa, yeni parolu daxil edin");
      return;
    }
    if (selectedUser) {
      message.success(
        `Parol uğurla dəyişdirildi: ${selectedUser.name} ${selectedUser.surname}`
      );
      setIsPasswordModalOpen(false);
    }
  };

  const handleAssignTest = () => {
    if (!selectedTest) {
      message.error("Zəhmət olmasa, test seçin");
      return;
    }
    if (selectedUser) {
      const testName = tests.find((t) => t.id === selectedTest)?.name || "";
      message.success(
        `Test "${testName}" uğurla ${selectedUser.name} ${selectedUser.surname} istifadəçisinə təyin edildi`
      );
      setIsAssignModalOpen(false);
    }
  };

  return (
    <>
      <Table<User>
        rowKey="id"
        dataSource={users}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={
          selectedUser
            ? `Parolu dəyiş - ${selectedUser.name} ${selectedUser.surname}`
            : "Parolu dəyiş"
        }
        open={isPasswordModalOpen}
        onCancel={() => setIsPasswordModalOpen(false)}
        onOk={handleSavePassword}
        okText="Yadda saxla"
      >
        <Input.Password
          placeholder="Yeni parol"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          autoFocus
        />
      </Modal>

      <Modal
        title={
          selectedUser
            ? `Test təyin et - ${selectedUser.name} ${selectedUser.surname}`
            : "Test təyin et"
        }
        open={isAssignModalOpen}
        onCancel={() => setIsAssignModalOpen(false)}
        onOk={handleAssignTest}
        okText="Təyin et"
      >
        <Select
          placeholder="Test seçin"
          value={selectedTest || undefined}
          onChange={(value) => setSelectedTest(value)}
          style={{ width: "100%" }}
          allowClear
        >
          {tests.map((test) => (
            <Select.Option key={test.id} value={test.id}>
              {test.name}
            </Select.Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

export default Users;
