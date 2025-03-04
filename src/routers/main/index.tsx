import {Route, Routes} from 'react-router-dom';
import Place from '../../layout/place';
import LoginLayout from '../../layout/login';

const Routers = ({}) => {
    return ( 
    <Routes>
        <Route path='/' element={<LoginLayout />} />
        <Route path='dashboard' element={<Place />} />
    </Routes>
    );
}
export default Routers;