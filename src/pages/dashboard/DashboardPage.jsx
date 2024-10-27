import  {Fragment} from 'react';
import MasterLayout from "../../components/masterLayout/MasterLayout.jsx";
import Dashboard from "../../components/dashboard/Dashboard.jsx";

const DashboardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Dashboard/>
            </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;