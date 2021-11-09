import React from "react";
import { Select } from "antd";

const SelectMenu = ({
  placeholder,
  changeHandler,
  options,
  hasPrefix = false,
  width = 140,
}) => {
  return (
    <Select
      showSearch
      style={{ width }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={changeHandler}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {options.map((el) => (
        <Select.Option key={el.id} value={el.id}>
          {hasPrefix ? `${el.prefix.shortName}. ${el.name}` : el.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectMenu;
