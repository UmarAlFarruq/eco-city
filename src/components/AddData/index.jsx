import { Form, Select, Modal, Upload, Input, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "../../components/Generic";
import { Container, Title, WrapperCard, Wrapper, UploadButton } from "./style";
import { useState } from "react";

const { TextArea } = Input;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const AddData = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  // const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <UploadButton>
      <PlusOutlined />
      Upload
    </UploadButton>
  );

  return (
    <Wrapper>
      <Container>
        <Form>
          <Title.Title size={28} mt={34}>
            Sharingizdagi muammoni rasimga oling va tashlang
          </Title.Title>
          <Wrapper>
            <WrapperCard>
              <Input width="800px" placeholder="Manzil" />
              <DatePicker style={{ width: "800px" }} picker="" />
              <Select
                placeholder="Category"
                // defaultValue="default"
                // 
                style={{
                  width: 800,
                }}
                // onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
              <>
                <Upload
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 6 ? null : uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={() => setPreviewOpen(false)}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
              </>

              <TextArea width="800px" placeholder="Description" />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  htmlType="submit"
                  type={"primary"}
                  mt={32}
                  height={"32px"}
                  width={"280px"}
                >
                  Submit
                </Button>
              </div>
            </WrapperCard>
          </Wrapper>
        </Form>
      </Container>
    </Wrapper>
  );
};
export default AddData;
