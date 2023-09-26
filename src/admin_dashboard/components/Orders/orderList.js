import React, { useState } from "react";
import DataTable from "react-data-table-component";

function OrderList() {

  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.orderId,
    },
    {
      name: "Date",
      seletor: (row) => row.date,
    },
    {
      name: "Customer",
      selector: (row) => row.customer,
      sortable: true,
    },
    {
      name: "Items",
      selector: (row) => row.items,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
    },
  ];

  const orderTable = [
    {
      orderId: "#1429",
      date: "2/1/2021 11:00 PM",
      customer: "Kinza",
      items: "3 items",
      total: "$100",
    },
    {
      orderId: "#1937",
      date: "2/1/2021 9:00 AM",
      customer: "Anum",
      items: "7 items",
      total: "$100",
    },
    {
      orderId: "#1853",
      date: "2/1/2021 6:00 PM",
      customer: "Mahnoor",
      items: "4 items",
      total: "$100",
    },
    {
      orderId: "#8532",
      date: "2/1/2021 8:30 PM",
      customer: "Laiba",
      items: "1 items",
      total: "$100",
    },
    {
      orderId: "#5715",
      date: "2/1/2021 5:40 PM",
      customer: "Samra",
      items: "5 items",
      total: "$100",
    },
  ];

  const [orders, setOrders] = useState(orderTable);

  function handleFilter(event) {
    const orderData = orderTable.filter((row) => {
      return row.customer
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setOrders(orderData);
  }

  return (
    <div className="order-data">
      <div className="search-order">
        <input
          type="text"
          onChange={handleFilter}
          placeholder="Search your Orders !!!"
        />
      </div>
      <DataTable columns={columns} data={orders} selectableRows fixedHeader />
    </div>
  );
}

export default OrderList;
