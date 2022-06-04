import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import EditStudentForm from "../components/EditStudentForm";

const StudentItem = ({ student, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr key={student.student_id}>
        <td>{student.student_id}</td>
        <td>{student.dept_id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>{student.email}</td>
        <td>{new Date(student.date_of_birth).toISOString().slice(0, 10)}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete onClick={() => handleDelete(student.student_id)} />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditStudentForm
            student={student}
            onClose={setShow}
            handleEdit={handleEdit}
          />
        </tr>
      ) : null}
    </>
  );
};

export default StudentItem;
