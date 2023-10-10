import { useBuildingsQuery } from "@/redux/api/buildingApi";
import FormSelectField, { SelectOptions } from "./FormSelectFields";

const BuildingField = () => {
  const { data, isLoading } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });
  const buildings = data?.buildings;
  const buildingsOptions = buildings?.map((building) => {
    return {
      label: building?.title,
      value: building?.id,
    };
  });

  return (
    <FormSelectField
      name="building"
      label="building"
      options={buildingsOptions as SelectOptions[]}
    />
  );
};

export default BuildingField;
