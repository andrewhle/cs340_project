import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditTeacherForm from "../components/EditTeacherForm";

const TeacherItem = ({ teacher, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr key={teacher.teacher_id}>
        <td>{teacher.teacher_id}</td>
        <td>{teacher.dept_id}</td>
        <td>{teacher.first_name}</td>
        <td>{teacher.last_name}</td>
        <td>{new Date(teacher.date_of_birth).toISOString().slice(0, 10)}</td>
        <td>{teacher.phone_number}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete onClick={() => handleDelete(teacher.teacher_id)} />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditTeacherForm
            teacher={teacher}
            onClose={setShow}
            handleEdit={handleEdit}
          />
        </tr>
      ) : null}
    </>
  );
};

export default TeacherItem;
