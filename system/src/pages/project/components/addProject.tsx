import { useImperativeHandle, useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import moment from "moment";
import AddTags from "@/components/addTags";
type indexType = {
  [index: string]: string | string[];
};
export default function AddCompany({
  toRef,
  csAddTable,
}: {
  toRef: any;
  csAddTable: Function;
}) {
  const [modalShow, setModalShow] = useState(false);
  const [editId, setEditId] = useState("");
  const [formRef] = Form.useForm();
  const typeVal = Form.useWatch("type", formRef);
  const scienceVal = Form.useWatch("science", formRef);
  const formItemLayout = {
    form: formRef,
    initialValues: {
      name: "",
      type: [],
      science: [],
    },
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const modalShowHandle = (row?: any) => {
    if (modalShow) {
      formRef.resetFields();
      setEditId("");
    }
    if (row?.name) {
      formRef.setFieldsValue({
        name: row?.name,
        time: [moment(row.startTime), moment(row.endTime)],
      });
      setEditId(row.id);
    }
    setModalShow(!modalShow);
  };
  const submitHandle = (value: any) => {
    const params = {
      id: editId,
      ...value,
    };

    csAddTable(params);
    modalShowHandle();
  };
  const tagChange = (data: any, type: string, name: string) => {
    let nameData: any = formRef.getFieldValue(name);
    let list = type === "index" ? [...nameData] : [...data];
    if (type === "index") {
      list.splice(data, 1);
    }
    formRef.setFieldValue(name, list);
  };
  useImperativeHandle(toRef, () => {
    return {
      modalShowHandle,
    };
  });
  return (
    <Modal
      title="添加"
      open={modalShow}
      onCancel={modalShowHandle}
      footer={null}
    >
      {modalShow && (
        <Form {...formItemLayout} onFinish={submitHandle}>
          <Form.Item
            name="name"
            label="项目名称："
            rules={[{ required: true, message: "请输入项目名称" }]}
          >
            <Input type="text" placeholder="请输入项目名称"></Input>
          </Form.Item>
          <Form.Item
            name="type"
            label="项目类型："
            rules={[{ required: true, message: "请输入项目类型" }]}
          >
            <AddTags
              tagList={typeVal || []}
              tagChange={(data: any, type: string) =>
                tagChange(data, type, "type")
              }
            ></AddTags>
          </Form.Item>
          <Form.Item
            name="science"
            label="所用技术："
            rules={[{ required: true, message: "请输入所用技术" }]}
          >
            <AddTags
              tagList={scienceVal || []}
              tagChange={(data: any, type: string) =>
                tagChange(data, type, "science")
              }
            ></AddTags>
          </Form.Item>
          <div className="tr mt2">
            <Button onClick={modalShowHandle} style={{ marginRight: "10px" }}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
}
