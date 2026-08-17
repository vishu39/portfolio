import { forwardRef, useState } from "react";
import "./contact.scss";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  SendOutlined,
  CopyOutlined,
  CheckOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";
import { personal_details } from "../../Helper/data";

const Contact = forwardRef<HTMLDivElement, any>((_props, ref) => {
  const [form] = Form.useForm();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    message.success(`${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const onFinish = (values: any) => {
    setIsSubmitting(true);
    console.log("Contact submission:", values);

    // Simulate instant sending response
    setTimeout(() => {
      setIsSubmitting(false);
      message.success(
        "Thank you! Your message has been recorded. I'll get back to you shortly."
      );
      form.resetFields();
    }, 1000);
  };

  return (
    <section ref={ref} id="contactMain" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-badge">
            <ContactsOutlined /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an opportunity, a project to discuss, or just want to connect — my inbox is always open.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          {/* Left Info Cards */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <div className="info-icon email-icon">
                <MailOutlined />
              </div>
              <div className="info-details">
                <span className="info-label">Email Address</span>
                <a href={`mailto:${personal_details.email}`} className="info-value">
                  {personal_details.email}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(personal_details.email, "Email")}
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === "Email" ? <CheckOutlined /> : <CopyOutlined />}
              </button>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon phone-icon">
                <PhoneOutlined />
              </div>
              <div className="info-details">
                <span className="info-label">Phone Number</span>
                <a href={`tel:${personal_details.phone_number}`} className="info-value">
                  {personal_details.phone_number}
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(personal_details.phone_number, "Phone")
                }
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedField === "Phone" ? <CheckOutlined /> : <CopyOutlined />}
              </button>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon loc-icon">
                <EnvironmentOutlined />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">{personal_details.location}</span>
              </div>
            </div>

            {/* Social Connect Tile */}
            <div className="social-connect-card glass-card">
              <h4>Social Profiles</h4>
              <p>Connect with me across developer networks and platforms.</p>
              <div className="social-links-row">
                <a
                  href={personal_details.social_links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-tile linkedin"
                >
                  <LinkedinOutlined /> <span>LinkedIn</span>
                </a>
                <a
                  href={personal_details.social_links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-tile github"
                >
                  <GithubOutlined /> <span>GitHub</span>
                </a>
                <a
                  href={personal_details.social_links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-tile instagram"
                >
                  <InstagramOutlined /> <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Fill in your details and I will reply as soon as possible.</p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="custom-contact-form"
              >
                <div className="form-row-2">
                  <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="e.g. Rahul Sharma" size="large" />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input placeholder="e.g. rahul@example.com" size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Subject / Topic"
                  name="subject"
                  rules={[
                    { required: true, message: "Please specify a subject" },
                  ]}
                >
                  <Input
                    placeholder="e.g. Full Stack Opportunity / Project Discussion"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Your Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please write your message" },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Share details about your requirement, timeline, or query..."
                  />
                </Form.Item>

                <Form.Item className="submit-form-item">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    icon={<SendOutlined />}
                    className="submit-btn"
                    size="large"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
