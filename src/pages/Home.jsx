import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.repuestTopRated} />
      {/* <Row title='Latest' fetchURL={requests.requestLatest} /> */}
    </div>
  )
}
export default Home