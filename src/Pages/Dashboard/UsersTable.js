import React from "react";
import Swal from "sweetalert2";

const UsersTable = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
                Swal.fire({
                    title: "Successfully Added!",
                    icon: "success",
                    confirmButtonText: "ok",
                });
            });
    };
    return (
        <tr>
            <th>1</th>
            <td> {email} </td>
            <td>
                {role !== "admin" && (
                    <button
                        onClick={makeAdmin}
                        class="btn btn-xs bg-purple-400 border-0 hover:bg-purple-600"
                    >
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                {" "}
                <button class="btn btn-xs bg-red-400 border-0 hover:bg-red-600">
                    Delete User
                </button>
            </td>
        </tr>
    );
};

export default UsersTable;
