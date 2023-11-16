import React, { useState, useEffect } from "react";
import { StyledFilterBlock, FiltersWrapper, StyledButton } from "./Filter.styled";
import Select from "../Filter1/Select";
import SearchInput from "../Search/SearchInput";
import { getShipTypes } from "../../service/api";

const Filter = ({ filters, handleApplyFilter }) => {
  const [shipTypes, setShipTypes] = useState([]);

  useEffect(() => {
    const fetchShipTypes = async () => {
      try {
        const types = await getShipTypes();
        setShipTypes(types);
      } catch (error) {
        console.error("Error fetching ship types:", error);
      }
    };

    fetchShipTypes();
  }, []);

  const onFilterValueChanged = (event) => {
    const { name, value } = event.target;

    handleApplyFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const priceOptions = [
    { label: "All", value: "all" },
    { label: "cheap", value: "cheap" },
    { label: "average", value: "average" },
    { label: "expensive", value: "expensive" },
  ];
  const nameOptions = [
    { label: "All", value: "all" },
    { label: "KENTUCKY BELLE", value: "kentucky belle" },
    { label: "SEAHAWK", value: "seahawk" },
    { label: "WIDER 210", value: "wider 210" },
    { label: "MIMI", value: "mimi" },
  ];
  const typeOptions = [
    { label: "All", value: "all" },
    ...shipTypes.map((type) => ({ label: type, value: type })),
  ];

  return (
    <StyledFilterBlock>
      <SearchInput searchValue={filters.title} handleSearchValueChanged={onFilterValueChanged} />
      <FiltersWrapper>
        <label htmlFor="name-filter">
          <Select id="name-filter" name="name" onChange={onFilterValueChanged} options={nameOptions} />
        </label>
        <label htmlFor="type-filter">
          <Select id="type-filter" name="type" onChange={onFilterValueChanged} options={typeOptions} />
        </label>
        <label>
          <Select id="price-filter" name="price" onChange={onFilterValueChanged} options={priceOptions} />
        </label>
      </FiltersWrapper>
    </StyledFilterBlock>
  );
};

export default Filter;
