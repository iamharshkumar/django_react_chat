import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function Conversations() {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch("http://127.0.0.1:8000/users/", {
                headers: {
                    Authorization: `Token ${user?.token}`
                }
            });
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    }, [user]);

    function createConversationName(username) {
        const namesAlph = [user?.username, username].sort();
        return `${namesAlph[0]}__${namesAlph[1]}`;
    }

    return (
        <div>
            {users
                .filter((u) => u.username !== user?.username)
                .map((u) => (
                    <Link key={u.username} to={`chats/${createConversationName(u.username)}`}>
                        <div key={u.username}>{u.username}</div>
                    </Link>
                ))}
        </div>
    );
}