import React from "react";
import SelectMenu from "./SelectMenu";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import _ from "lodash";

const AddressOptionsMenu = ({ setActiveQuery, setAddUserButton }) => {
  const { FetchStreets, FetchHouses, fetchFlats, fetchClients } = useActions();

  const { data: streets } = useSelector((state) => state.streets);
  const { data: houses, isLoading: housesIsLoading } = useSelector(
    (state) => state.houses
  );
  const { data: flats, isLoading: flatsIsLoading } = useSelector(
    (state) => state.flats
  );

  React.useEffect(() => {
    FetchStreets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const streetChangeHandler = (value, option) => {
    setActiveQuery({ street: option.children, house: "", flat: "" });
    FetchHouses(value);
  };

  const houseChangeHandler = (value, option) => {
    setActiveQuery((prevState) => ({ ...prevState, house: option.children }));
    fetchFlats(value);
  };

  const flatChangeHandler = (value, option) => {
    setActiveQuery((prevState) => ({
      ...prevState,
      flat: option.children,
      flatId: option.value,
    }));
    setAddUserButton(true);
    const { typeId } = _.pick(_.find(flats, { id: value }), "typeId");
    if (typeId === 1) {
      console.log("fetchAllClientsInHouse ");
    } else {
      fetchClients(value);
    }
  };

  return (
    <>
      <SelectMenu
        width={400}
        placeholder="Улица"
        changeHandler={streetChangeHandler}
        hasPrefix
        options={streets}
      />
      {housesIsLoading && (
        <SelectMenu
          placeholder="Дом"
          changeHandler={houseChangeHandler}
          options={houses}
        />
      )}
      {flatsIsLoading && (
        <SelectMenu
          placeholder="Офис/кв."
          changeHandler={flatChangeHandler}
          options={flats}
        />
      )}
    </>
  );
};

export default AddressOptionsMenu;
