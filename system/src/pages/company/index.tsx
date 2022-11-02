import React, { useRef, useState } from "react";
import { Button, Table } from "antd";
import AddCompany from "./components/addCompany";
export default function Company() {
  const sonRef = useRef();
  const [listData, setListData] = useState([]);
  const tableConfig = {
    rowKey: "id",
    dataSource: listData,
    columns: [
      {
        title: "公司名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "在职时间",
        dataIndex: "time",
        key: "time",
        render: (_: any, record: any) => (
          <span>
            {record.startTime}~{record.endTime}
          </span>
        ),
      },
      {
        title: "操作",
        dataIndex: "action",
        key: "action",
        render: (_: any, _record: any, index: number) => (
          <>
            <Button type="link" onClick={btnHandle(index, "edit")}>
              编辑
            </Button>
            <Button type="link" onClick={btnHandle(index, "del")}>
              删除
            </Button>
          </>
        ),
      },
    ],
  };
  const addHandle = (row: any) => {
    const { current }: { current: any } = sonRef;
    current?.modalShowHandle(row);
  };
  const btnHandle = (index: number, type: string) => {
    return () => {
      if (type === "del") {
        let oldList: any = [...listData];
        oldList.splice(index, 1);
        setListData(oldList);
      } else {
        addHandle(listData[index]);
      }
    };
  };
  const csAddTable = (item: any) => {
    let oldList: any = [...listData];
    if (item.id) {
      oldList.forEach((liteItem: any, index: number) => {
        if (liteItem.id === item.id) {
          oldList[index] = { ...item };
        }
      });
    } else {
      oldList.push({ ...item, id: oldList.length + 1 });
    }

    setListData(oldList);
  };
  return (
    <div className="mainBox">
      <h2>工作经历</h2>
      <Button
        type="primary"
        onClick={addHandle}
        style={{ marginBottom: "10px" }}
      >
        添加
      </Button>
      <Table {...tableConfig}></Table>
      <AddCompany toRef={sonRef} csAddTable={csAddTable}></AddCompany>
    </div>
  );
}
