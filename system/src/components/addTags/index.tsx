import React, { useEffect, useState } from "react";
import { Input, Tag, message } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

export default function AddTags({
  tagList,
  tagChange,
}: {
  tagList: Array<string>;
  tagChange: Function;
}) {
  const [tags, seTags] = useState<string[]>([]);
  const [inputData, setInputData] = useState({
    show: false,
    text: "",
  });
  const inputHandle = (name: string, value: string | boolean) => {
    setInputData((prev: any) => ({ ...prev, [name]: value }));
  };
  const inputChange = (event: any) => {
    const { value, name } = event.target;
    inputHandle(name, value);
  };
  const enterHandle = () => {
    if (!inputData.text) {
      setInputData({
        show: !inputData.show,
        text: "",
      });
      return;
    }
    let oldTags: any = [...tags];
    if (oldTags.includes(inputData.text)) {
      message.warning("重复信息");
      return;
    }

    oldTags.push(inputData.text);
    tagChange(oldTags, "row");
    setInputData({
      show: !inputData.show,
      text: "",
    });
  };
  useEffect(() => {
    seTags(tagList);
  }, [tagList]);
  return (
    <div className="addTags">
      {tags.map((item, index) => (
        <Tag
          closable
          onClose={() => {
            tagChange(index, "index");
          }}
          color="magenta"
          key={item}
          style={{ marginBottom: "6px" }}
        >
          {item}
        </Tag>
      ))}

      {inputData.show && (
        <Input
          name="text"
          value={inputData.text}
          onChange={inputChange}
          placeholder="回车/Enter键添加信息(最多20个字)"
          maxLength={20}
          onPressEnter={enterHandle}
          allowClear
          autoFocus
          style={{ width: "260px", margin: "0 4px" }}
        ></Input>
      )}
      {!inputData.show && (
        <Tag onClick={() => inputHandle("show", !inputData.show)}>
          {!inputData.show ? <PlusOutlined /> : <CloseOutlined />}
        </Tag>
      )}
    </div>
  );
}
