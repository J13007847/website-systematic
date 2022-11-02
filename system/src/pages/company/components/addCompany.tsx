import { useImperativeHandle, useState } from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";

const { RangePicker } = DatePicker;
interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}
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
  const formItemLayout = {
    form: formRef,
    initialValues: {
      name: "",
      time: [null, moment(new Date())] as any,
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
    const { time, name } = value;

    const params = {
      id: editId,
      name: name,
      startTime: moment(time[0]).format("YYYY-MM"),
      endTime: moment(time[1]).format("YYYY-MM"),
    };

    csAddTable(params);
    modalShowHandle();
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current > moment().endOf("day");
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
            label="公司名称："
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input type="text" placeholder="请输入公司名称"></Input>
          </Form.Item>
          <Form.Item
            name="time"
            label="在职时间："
            rules={[{ required: true }]}
          >
            <RangePicker
              picker="month"
              format="YYYY-MM"
              disabledDate={disabledDate}
            />
          </Form.Item>
          <div style={{ textAlign: "right", marginTop: "20px" }}>
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
