import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
            .then((res) => {
                setLoading(false);
                setUsers(res.data);
            })
            .catch((err) => {
                setLoading(false);
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => cancel();
    }, []);

    return { users, setUsers, error, setError, isLoading };
}

export default useUsers;