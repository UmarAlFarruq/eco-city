import { Button } from "../../components/Generic";
import {
  Container,
  Title,
  TextArea,
  WrapperCard,
  Wrapper,
  Input,
  Icon,
} from "./style";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const AddData = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    img: "",
    text: "",
    location: "",
    date: "",
    id:''
  });

  const localData = localStorage.getItem("profileData") ? JSON.parse(localStorage.getItem("profileData")) : [];

  const handleInputChange = (event) => {
    if (event.target.name === "img") {
      const fn = new FileReader();
      fn.readAsDataURL(event.target.files[0]);
      fn.addEventListener("load", () => {
        let url = fn.result;
        setFormData({
          ...formData,
          img: url,
        });
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        id:new Date()
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem("profileData", JSON.stringify([...localData, formData]));
    navigate('/profile')
    setFormData({
      img: null,
      text: "",
      location: "",
      date: "",
    });
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Title.Title size={28} mt={34}>
            Sharingizdagi muammoni rasimga oling va tashlang
          </Title.Title>
          <Wrapper>
            <WrapperCard>
              <Input
                name="location"
                placeholder="Manzil"
                value={formData.location}
                onChange={handleInputChange}
              />
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                picker=""
              />

              <TextArea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  width: "100%",
                  maxHeight: "200px",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  onChange={handleInputChange}
                  id="file"
                  className="inputfile"
                />
                <label className="label" htmlFor="file">
                  <Icon />
                  <p> Rasimni yuklash</p>
                </label>
                {formData.img && (
                  <img
                    src={formData.img}
                    alt="Yuklangan rasm"
                    style={{ width: "200px" }}
                  />
                )}
              </div>
              <div
                style={{
                  gap: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
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
        </form>
      </Container>
    </Wrapper>
  );
};
export default AddData;
