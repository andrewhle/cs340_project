import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import EditCourseStudent from "../components/EditCourseStudent";

const CourseStudentItem = ({ CourseStudent, handleDelete, handleEdit }) => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  return (
    <>
      <tr>
        <td>{CourseStudent.course_student_id}</td>
        <td>{CourseStudent.course_id}</td>
        <td>{CourseStudent.student_id}</td>
        <td>
          <MdEdit onClick={setShow} />
        </td>
        <td>
          <MdDelete
            onClick={() => handleDelete(CourseStudent.course_student_id)}
          />
        </td>
      </tr>
      {isShow ? (
        <tr>
          <EditCourseStudent
            CourseStudent={CourseStudent}
            onClose={setShow}
            handleEdit={handleEdit}
          />
        </tr>
      ) : null}
    </>
  );
};

export default CourseStudentItem;
