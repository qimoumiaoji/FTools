import AppsPage from 'views/dapps/appsPage/AppsPage';
import { dappData } from 'views/dapps/appsPage/variables/dappData';

export default function Settings() {
    return <AppsPage gridData={dappData} />;
}
