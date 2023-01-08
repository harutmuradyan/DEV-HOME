import { useSelector } from "react-redux";
import { useCallback , useState } from "react";
import StatisticsSidebar from "../../Components/StatisticsSidebar/StatisticsSidebar";
import CreatePost from "../../Components/CreatePost/CreatePost";
import HeaderLayding from "../../Components/Header/HeaderLayding/HeaderLanding";
import HeaderUser from "../../Components/Header/HeaderUser/HeaderUser";
import Messenger from "../../Components/Messenger/Messenger";

export function useCurrentUser () {
    const [logined,setLogined] = useState(true);
    const [roleAdmin,setRoleAdmin] = useState(false);
    const {users} = useSelector((state) => state.user);
    const currentUser = 4;

    const CurrentUserStatisticsSidebar = useCallback(() => {
        return users.filter((elem) => elem.id === currentUser).map((el) => {
            return <StatisticsSidebar   key={el.id}
                                        userId={el.id}
                                        name={el.name} 
                                        profession={el.profession}
                                        cover={el.cover}
                                        logo={el.logo}
                                    /> 
        })
    },[users])

    const CurrentUserCreatePost = useCallback(() => {
        return users.filter((elem) => elem.id === currentUser).map((el) => {
            return <CreatePost  key={el.id}
                                userId={el.id}
                                logo={el.logo}
                            /> 
        })
    },[users])

    const CurrentUserHeader = useCallback(() => {
        return logined ? <HeaderUser logined={logined}/> : <HeaderLayding logined={logined}/>
    },[logined])

    const CurrentUserMessenger = useCallback(() => {
        return logined ? <Messenger/> : null 
    },[logined])


    return {
        CurrentUserStatisticsSidebar,
        CurrentUserCreatePost,
        logined,
        roleAdmin,
        CurrentUserHeader,
        CurrentUserMessenger
    }
}