import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback} from "react";
import BackgroundSection from "../../Components/BackgroundSection/BackgroundSection";
import Contacts from "../../Components/Contacts/Contacts";
import AboutDesc from "../../Components/AboutDesc/AboutDesc";
import Posts from "../../Components/Posts/Posts";

export function useCompany () {
    const {id} = useParams();

    const companyid = +id;

    const {companyes} = useSelector((state) => state.company);

    const CompanyById = useCallback(() => {
        return companyes.filter((c) => c.id === companyid).map((c) => (
            <div    className="company-content__container"
                    key={c.id}>
                <BackgroundSection  name={c.name} 
                                    logo={c.logo} 
                                    cover={c.cover} 
                                    backgroundDesc={c.backgroundDesc}
                                    followerCount={c.followerCount}
                                    country={c.country}
                                    city={c.city}
                                    employee={c.employee}
                                    />
                <Contacts   shpere={c.shpere}
                            webSites={c.webSites}
                            tell={c.tell}
                            createDay={c.createDay}
                            employee={c.employee}
                />
                <AboutDesc backgroundDesc={c.backgroundDesc}/>
                <Posts compId={c.id}/>
            </div>
        ))
    },[companyes, companyid]) 

    return {
        CompanyById
    }
}