
import { Form, Select } from "antd";

 const AntdSelect = ({
    name,
    placeholder
}) => {


    return (
        <Form.Item
            name={name}
            valuePropName='select'
            rules={[
                {
                    required: true,
                    message: `Iltimos barcha ma'lumotlarni kiriting`
                },
            ]}
        >
            <Select
                placeholder={placeholder}
                // optionFilterProp="children"
            >
            </Select>
        </Form.Item>
    );
}
export default AntdSelect;