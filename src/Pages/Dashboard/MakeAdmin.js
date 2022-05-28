import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UsersTable from "./UsersTable";

const MakeAdmin = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/user").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    console.log(users);
    return (
        <div>
            Make Admin: {users?.length}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UsersTable
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UsersTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
