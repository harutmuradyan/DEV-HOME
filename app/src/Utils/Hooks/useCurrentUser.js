import { useSelector } from "react-redux";

export function useCurrentUser () {
    const {users} = useSelector((state) => state.user);
    const currentUser = 4;

    const fiterCurrentUser = [...users].filter((u) => u.id === currentUser)

    return {
        fiterCurrentUser
    }
}