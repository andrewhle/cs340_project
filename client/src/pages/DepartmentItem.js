import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditDepartmentForm from "../components/EditDepartmentForm";

const DepartmentItem = ({ department, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr>
        <td>{department.dept_id}</td>
        <td>{department.dept_name}</td>
        <td>{department.location}</td>
        <td>{department.campus}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete onClick={() => handleDelete(department.dept_id)} />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditDepartmentForm
            department={department}
            onClose={setShow}
            handleEdit={handleEdit}
          />
        </tr>
      ) : null}
    </>
  );
};

export default DepartmentItem;
