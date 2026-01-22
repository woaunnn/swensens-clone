import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Space,
  message,
  Popconfirm,
  Card,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useUser } from "../context/UserContext";
import {
  ProductManagementContainer,
  PageHeader,
  PageTitle,
} from "../styles/pages/productManagement";

const categories = [
  "ไอศกรีมเค้ก",
  "ไอศกรีมควอท (450g)",
  "ไอศกรีมมินิ ควอท (250g)",
  "ซันเด เซต",
  "ไอศกรีมสกู๊ป",
  "ท็อปปิ้ง",
];

const ProductManagement = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      message.error("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      navigate("/");
    }
  }, [user, loading, navigate]);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`,
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      message.error("ไม่สามารถโหลดข้อมูลสินค้าได้");
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (user?.role === "admin") {
      fetchProducts();
    }
  }, [user]);

  const handleSubmit = async (values) => {
    try {
      if (editingProduct) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/products/${editingProduct._id}`,
          values,
          { withCredentials: true },
        );
        message.success("อัพเดทสินค้าเรียบร้อยแล้ว");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/products`, values, {
          withCredentials: true,
        });
        message.success("เพิ่มสินค้าเรียบร้อยแล้ว");
      }
      setIsModalOpen(false);
      form.resetFields();
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Failed to save product:", error);
      message.error("ไม่สามารถบันทึกข้อมูลได้");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        withCredentials: true,
      });
      message.success("ลบสินค้าเรียบร้อยแล้ว");
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
      message.error("ไม่สามารถลบสินค้าได้");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    form.setFieldsValue({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      isPromotion: product.isPromotion || false,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "รูปภาพ",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (image) => (
        <img
          src={image}
          alt="product"
          style={{ width: 60, height: 60, objectFit: "cover" }}
        />
      ),
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ราคา",
      dataIndex: "price",
      key: "price",
      width: 100,
      render: (price) => `฿${price}`,
    },
    {
      title: "หมวดหมู่",
      dataIndex: "category",
      key: "category",
      width: 150,
    },
    {
      title: "การจัดการ",
      key: "action",
      width: 150,
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            แก้ไข
          </Button>
          <Popconfirm
            title="ยืนยันการลบ"
            description="คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?"
            onConfirm={() => handleDelete(record._id)}
            okText="ใช่"
            cancelText="ไม่"
          >
            <Button danger icon={<DeleteOutlined />}>
              ลบ
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (loading) {
    return null;
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <ProductManagementContainer>
      <Card>
        <PageHeader>
          <PageTitle>จัดการสินค้า</PageTitle>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            size="large"
          >
            เพิ่มสินค้า
          </Button>
        </PageHeader>

        <Table
          columns={columns}
          dataSource={products}
          rowKey="_id"
          loading={loadingProducts}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `ทั้งหมด ${total} รายการ`,
          }}
        />

        <Modal
          title={editingProduct ? "แก้ไขสินค้า" : "เพิ่มสินค้า"}
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false);
            form.resetFields();
            setEditingProduct(null);
          }}
          onOk={() => form.submit()}
          okText="บันทึก"
          cancelText="ยกเลิก"
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ marginTop: 20 }}
          >
            <Form.Item
              label="ชื่อสินค้า"
              name="name"
              rules={[{ required: true, message: "กรุณากรอกชื่อสินค้า" }]}
            >
              <Input placeholder="กรอกชื่อสินค้า" />
            </Form.Item>

            <Form.Item
              label="ราคา"
              name="price"
              rules={[{ required: true, message: "กรุณากรอกราคา" }]}
            >
              <InputNumber
                placeholder="กรอกราคา"
                style={{ width: "100%" }}
                min={0}
                formatter={(value) =>
                  `฿ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/฿\s?|(,*)/g, "")}
              />
            </Form.Item>

            <Form.Item
              label="URL รูปภาพ"
              name="image"
              rules={[{ required: true, message: "กรุณากรอก URL รูปภาพ" }]}
            >
              <Input placeholder="กรอก URL รูปภาพ" />
            </Form.Item>

            <Form.Item label="คำอธิบาย" name="description">
              <Input.TextArea placeholder="กรอกคำอธิบายสินค้า" rows={3} />
            </Form.Item>

            <Form.Item label="หมวดหมู่" name="category">
              <Select placeholder="เลือกหมวดหมู่สินค้า" allowClear>
                {categories.map((cat) => (
                  <Select.Option key={cat} value={cat}>
                    {cat}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="isPromotion" valuePropName="checked">
              <Checkbox>แสดงในหน้าโปรโมชัน</Checkbox>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </ProductManagementContainer>
  );
};

export default ProductManagement;
