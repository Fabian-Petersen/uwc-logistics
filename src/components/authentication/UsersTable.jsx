// import { useGlobalContext } from "../../contextAPI";
import Wrapper from "../../styleWrappers/stylesUsersTable";
// import { Link } from "react-router-dom";
import useUsersQuery from "../authentication/useUsersQuery";
import DataTable from "react-data-table-component";
import Spinner from "../features/Spinner";
// import { toast } from "react-hot-toast";

const UsersTable = () => {
  const { data, isError, isLoading } = useUsersQuery();

  if (isError) {
    return <h2>Error loading user data....</h2>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const newUsers = [];
  for (const {
    name,
    userType,
    category,
    userId,
    staff_id,
    student_id,
    email,
    department,
  } of data) {
    if (data && department.name) {
      const destructedData = {
        name,
        userType,
        userId,
        email,
        category,
        student_id,
        staff_id,
        department: department.name,
      };
      newUsers.push(destructedData);
    }
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "User Type",
      selector: (row) => row.userType,
      sortable: true,
    },
    {
      name: "User ID",
      selector: (row) =>
        row.staff_id !== null ? row.staff_id : row.student_id,
      sortable: true,
    },
  ];

  return (
    <Wrapper>
      <main>
        <DataTable
          columns={columns}
          data={newUsers}
          pagination
          className="table_global"
          customStyles={customStyles}
        />
      </main>
    </Wrapper>
  );
};

const customStyles = {
  rows: {
    style: { width: "100%" },
  },

  headCells: {
    style: {
      fontSize: "1.5rem",
      fontWeight: "700",
      backgroundColor: "rgba(10, 110, 189, 0.85)",
      color: "#fff;",
      padding: "1.2rem",
    },
  },
  header: {
    style: {
      backgroundColor: "rgba(10, 110, 189, 0.85)",
    },
  },
  pagination: {
    backgroundColor: "transparent",
  },
  cells: {
    style: { backgroundColor: "#f8f6f4" },
  },
};

export default UsersTable;
