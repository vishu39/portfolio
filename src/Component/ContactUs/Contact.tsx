import { forwardRef } from "react";
import "./contact.scss";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { Form, Input, Button } from "antd";

const Contact = forwardRef<HTMLDivElement, any>((_props, ref) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div ref={ref} id="contactMain">
      <div className="grid1x2">
        <div className="left">
          <div className="addressDiv">
            <div>
              <EnvironmentOutlined className="commonIconCss" />
            </div>
            <div className="addressText">
              <h4>Address</h4>
              <span>Modinagar, Ghaziabad, Uttar Pradesh 201204</span>
            </div>
          </div>

          <div className="phoneDiv">
            <div>
              <PhoneOutlined className="commonIconCss" />
            </div>
            <div className="phoneText">
              <h4>Phone</h4>
              <span>+91 9997048252</span>
            </div>
          </div>

          <div className="mailDiv">
            <div>
              <MailOutlined className="commonIconCss" />
            </div>
            <div className="mailText">
              <h4>Mail</h4>
              <span>vipulsharmak@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="contactCard">
            <h2 className="heading">Send Message</h2>

            <div className="contactForm">
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
