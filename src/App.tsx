import { Routes, Route } from 'react-router-dom';
import { Initial } from './pages/initial/index';
import { HomePage } from './pages/homepage/index';
import { NotFound } from './pages/notfound';


const App = () => {
    return (
       <Routes>
           <Route path='/' element={<Initial />}/>
           <Route path='/homepage' element={<HomePage />} />
           <Route path='*' element={<NotFound />}/>
       </Routes>
    );
}

export default App;