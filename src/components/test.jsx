import useDepartmentQuery from "../hooks/useDepartmentQuery";

const test = () => {
  const { data: departments } = useDepartmentQuery();
  console.log(deparments);
  return <div></div>;
};

export default test;
