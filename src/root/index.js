import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
import { Form, Wrapper } from "./style";

function Root() {
  return (
    <Wrapper>
      <Form>
        {
          <Routes>
            <Route path="/" element={<Navigate to={"home"} />} />
            {navbar.map(({ id, hidden, path, Element }) => {
              return hidden && <Route key={id} path={path} element={Element} />;
            })}
            <Route path="/" element={<Navbar />}>
              {navbar.map(({ id, hidden, path, Element }) => {
                return (
                  !hidden && <Route key={id} path={path} element={Element} />
                );
              })}
            </Route>
            <Route path="*" element={<h2>Not Faund</h2>} />
          </Routes>
        }
      </Form>
    </Wrapper>
  );
}

export default Root;
