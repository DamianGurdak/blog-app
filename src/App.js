import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
