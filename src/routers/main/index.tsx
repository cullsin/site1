import {Route, Routes} from 'react-router-dom';
import Place from '../../layout/place';

const Routers = ({}) => {
    return ( 
    <Routes>
        <Route path='/' element={<Place />} />
    </Routes>
    );
}
export default Routers;