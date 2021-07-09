import logo from './logo.png';
import List from './components/List';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovieDataAction, addMovieAction, removeMovieAction } from './actions';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const { myList, recommendations, loading } = useSelector((state) => {
    return state.list
  })

  useEffect(() => {
    dispatch(loadMovieDataAction())
  }, [dispatch])


  const handleRemove = (movie) => {
    dispatch(removeMovieAction(movie.id))
  }

  const handleAdd = (movie) => {
    dispatch(addMovieAction(movie))
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"></img>
      {loading ? <div className="loading">Loading...</div> : 
          <Fragment>
            <List section="My List" data={myList} buttonName="Remove" toggleButton={handleRemove}/>
            <List section="Recommendations" data={recommendations} buttonName="Add" toggleButton={handleAdd}/>
          </Fragment>}
      <div className="titleContainer">
        <h3 className="listTitle">My List: </h3>
        {myList.map((movie) => {
          return (
            <Fragment>
              <p className="showTitle">{movie.title}</p>
            </Fragment>
            
          )
        })}
      </div>
    </div>
  );
}

export default App;
