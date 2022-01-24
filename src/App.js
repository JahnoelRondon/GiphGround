import { useState, useEffect } from "react";
import fetchData from './services/giphyService'
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

// Route Components
import Giphs from "./routes/trend/Giphs";

export default function App() {

  const selfNavigate = useNavigate();
  const key = `?api_key=${process.env.REACT_APP_GIPHYKEY}`;
  const limitSet = '&limit=28';
  const ratingSet = '&rating=pg-13';

  const [trendQuery, setTrend] = useState({
    trendBaseUrl: 'https://api.giphy.com/v1/gifs/trending',
    trendEndPoint: '',
    // used for conditional useEffect
    initialRequest: false,
    // Data retrieved and stored from api
    trendData: []
  })

  const [searchQuery, setSearch] = useState({
    baseUrl: 'https://api.giphy.com/v1/gifs/search',
    query: '',
    searchEndPoint: '',
    // Data retrieved and stored from api
    searchData: [],
    // categories for buttons
    bird: 'bird'
  })

  // search submit
  const onChange = (e) => {
    setSearch({...searchQuery, 
      query: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setSearch({...searchQuery, 
      searchEndPoint: `${searchQuery.baseUrl}${key}&q=${searchQuery.query}${limitSet}${ratingSet}`, 
      query: ''
    })
  }

  // useEffect should always be used at the top level
  useEffect(() => {

    const {trendBaseUrl, trendEndPoint, initialRequest} = trendQuery

    // this conditional prevents infinite chaining, looping of setting state
    if(trendEndPoint && initialRequest){
      // data is being fetched and in the then callback we save our data in state and reset the url string to empty to prevent loop
      fetchData(trendQuery.trendEndPoint)
      .then(response => setTrend({...trendQuery, 
        trendData: response.data, 
        trendEndPoint: ''
      }))

    } else if(!trendEndPoint && !initialRequest){
      // conditional checks for the inital falsey values of the state and sets them to true to fetch data
      setTrend({...trendQuery, 
        trendEndPoint: `${trendBaseUrl}${key}${limitSet}${ratingSet}`, 
        initialRequest: true
      })
    }

    if(searchQuery.searchEndPoint){
      fetchData(searchQuery.searchEndPoint)
      .then(response => setSearch({...searchQuery, 
        searchData: response.data,
        searchEndPoint: ''
      }))
      selfNavigate('/search')
    }

  },[trendQuery, searchQuery, key, selfNavigate])

  return (
    <Container>
      {/* make search bar a component*/}
      <form onSubmit={onSubmit} autoComplete="off">
        <input onChange={onChange} id='query' value={searchQuery.query} type="search" placeholder="Search..."></input>
      </form>

      {/* make a buttons component */}
      {/* logic needed for buttons */}
      <form onSubmit={onSubmit}>
        <button onClick={onChange} value="Mountain">Mountain</button>
        <button onClick={onChange} value="Bird">Bird</button>
        <button onClick={onChange} value="Food">Food</button>
        <button onClick={onChange} value="Anime">Anime</button>
      </form>

      <Routes>
        <Route path="/" element={<Navigate replace to='/trending'/>}/>
        <Route path='trending' element={<Giphs data={trendQuery.trendData} />}/>
        <Route path='/search' element={<Giphs data={searchQuery.searchData} />}/>
      </Routes>

    </Container>
  );
}

