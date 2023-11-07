
import TestingAPICalls from "./components/TestingAPICalls";
// import FirstTest from "./old/FirstTest";
// import TestWithMockData from "./old/TestWithMockData-1";
import FirstTest from "./components/FirstTest";


const data = [{
    "id": 1,
    "first_name": "Mufinella",
    "last_name": "McVanamy",
    "email": "mmcvanamy0@e-recht24.de",
    "age": 30
  }, {
    "id": 2,
    "first_name": "Clarice",
    "last_name": "Harrild",
    "email": "charrild1@dion.ne.jp",
    "age": 65
  }, {
    "id": 3,
    "first_name": "Amby",
    "last_name": "Emmer",
    "email": "aemmer2@buzzfeed.com",
    "age": 67
  }, {
    "id": 4,
    "first_name": "Alexandr",
    "last_name": "Hacquel",
    "email": "ahacquel3@illinois.edu",
    "age": 16
  }, {
    "id": 5,
    "first_name": "Mollee",
    "last_name": "Janny",
    "email": "mjanny4@instagram.com",
    "age": 64
  }, {
    "id": 6,
    "first_name": "Avis",
    "last_name": "Mutimer",
    "email": "amutimer5@nyu.edu",
    "age": 88
  }, {
    "id": 7,
    "first_name": "Barbra",
    "last_name": "Laird",
    "email": "blaird6@epa.gov",
    "age": 96
  }, {
    "id": 8,
    "first_name": "Abbot",
    "last_name": "Husselbee",
    "email": "ahusselbee7@gravatar.com",
    "age": 79
  }, {
    "id": 9,
    "first_name": "Cherye",
    "last_name": "Yesinov",
    "email": "cyesinov8@hibu.com",
    "age": 45
  }, {
    "id": 10,
    "first_name": "Meriel",
    "last_name": "Row",
    "email": "mrow9@homestead.com",
    "age": 97
  }]


function App() {
  return (
    <div className="App">
        {/* <FirstTest/> */}
        {/* <TestWithMockData data={data} /> */}
        <TestingAPICalls/>
    </div>
  );
}

export default App;












// import logo from './logo.svg';
// import './App.css';
// import Iframe from 'react-iframe'

// // const website = "https://grafana.com/docs/grafana/latest/developers/http_api/auth/"
// // const website = "https://grafana.com/docs/installation/configuration/#allow-embedding"
// const website = "https://g-d3a73d4fca.grafana-workspace.us-east-2.amazonaws.com/dashboard/snapshot/jfUT2kFuCF7xaBsnHLtSWj0O1mwV1by8"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <iframe src="https://g-d3a73d4fca.grafana-workspace.us-east-2.amazonaws.com/d-solo/sQ8hAza4k/test?orgId=1&var-state=Ohio&var-ProjectSize=All&var-track_mode=All&var-orientation=All&var-group_by=track_mode&var-group_by=state&var-Region=All&from=1698390410923&to=1698412010923&panelId=26" width="450" height="200" frameborder="0"></iframe>

//         <p>adfadfadfadf</p>
//         {/* <iframe src={website} width="100%" height="300"> */}
//         {/* </iframe> */}
//         <iframe
//           src="https://snapshots.raintank.io/dashboard-solo/snapshot/y7zwi2bZ7FcoTlB93WN7yWO4aMiz3pZb?from=1493369923321&to=1493377123321&panelId=4"
//           width="650"
//           height="300"
//           frameBorder="0"
//         ></iframe>

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // Graf API key = "eyJrIjoieDJpSWJLaU8wWVBsVk1qWW9iQnYxZFNibkdVTWx1RzciLCJuIjoidGVzdCIsImlkIjoxfQ=="
// // example request
// // curl -H "Authorization: Bearer eyJrIjoieDJpSWJLaU8wWVBsVk1qWW9iQnYxZFNibkdVTWx1RzciLCJuIjoidGVzdCIsImlkIjoxfQ==" https://g-d3a73d4fca.grafana-workspace.us-east-2.amazonaws.com/api/dashboards/home
// https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/
