import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Order {
  id: number;
  buyerName: string;
  orderType: string;
  price: number;
  email: string;
  phone: string;
}

const Orders: React.FC = () => {
  const orders: Order[] = [
    {
      id: 1,
      buyerName: "Ali Gasimzadeh",
      orderType: "Pro",
      price: 150,
      email: "ali@example.com",
      phone: "+994501234567",
    },
    {
      id: 2,
      buyerName: "Leyla Mammadova",
      orderType: "Medium",
      price: 100,
      email: "leyla@example.com",
      phone: "+994551234567",
    },
    {
      id: 3,
      buyerName: "John Doe",
      orderType: "Standart",
      price: 50,
      email: "john@example.com",
      phone: "+994701234567",
    },
  ];

  // Generic filter generator
  const getUniqueValues = <K extends keyof Order>(
    data: Order[],
    key: K
  ): { text: string | number; value: string | number }[] => {
    const uniqueVals = Array.from(new Set(data.map((item) => item[key])));
    return uniqueVals.map((val) => ({ text: val, value: val }));
  };

  const columns: ColumnsType<Order> = [
    {
      title: "Sifariş verən",
      dataIndex: "buyerName",
      key: "buyerName",
      sorter: (a, b) => a.buyerName.localeCompare(b.buyerName),
      filters: getUniqueValues(orders, "buyerName"),
      onFilter: (value, record) => record.buyerName === value,
    },
    {
      title: "Sifariş növü",
      dataIndex: "orderType",
      key: "orderType",
      filters: getUniqueValues(orders, "orderType"),
      onFilter: (value, record) => record.orderType === value,
      sorter: (a, b) => a.orderType.localeCompare(b.orderType),
    },
    {
      title: "Qiymət (AZN)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      filters: getUniqueValues(orders, "price").sort(
        (a, b) => Number(a.value) - Number(b.value)
      ),
      onFilter: (value, record) => record.price === value,
      render: (price) => `${price} AZN`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      filters: getUniqueValues(orders, "email"),
      onFilter: (value, record) => record.email === value,
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      filters: getUniqueValues(orders, "phone"),
      onFilter: (value, record) => record.phone === value,
    },
  ];

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Sifarişlər</h2>
      <Table<Order>
        rowKey="id"
        dataSource={orders}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Orders;
