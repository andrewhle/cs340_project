import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import EditMajorForm from "../components/EditMajorForm";

const MajorItem = ({ major, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr key={major.major_id}>
        <td>{major.major_id}</td>
        <td>{major.dept_id}</td>
        <td>{major.major_name}</td>
        <td>{major.credit_req}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete onClick={() => handleDelete(major.major_id)} />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditMajorForm
            major={major}
            onClose={setShow}
            handleEdit={handleEdit}
          />
        </tr>
      ) : null}
    </>
  );
};

export default MajorItem;
