import React, { useRef, useState } from "react";
import { Button, Table, Tag } from "antd";
import AddProject from "./components/addProject";
export default function Project() {
  const sonRef = useRef();
  const [listData, setListData] = useState([]);
  const tableConfig = {
    rowKey: "id",
    dataSource: listData,
    columns: [
      {
        title: "项目名称",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "项目类别",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "所用技术",
        dataIndex: "time",
        key: "time",
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
      <h2>项目经验</h2>
      <Button
        type="primary"
        onClick={addHandle}
        style={{ marginBottom: "10px" }}
      >
        添加
      </Button>
      <Table {...tableConfig}></Table>
      <AddProject toRef={sonRef} csAddTable={csAddTable}></AddProject>
    </div>
  );
}
