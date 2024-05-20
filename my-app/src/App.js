// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Tech from './Tech';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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

function App(){
  return(
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg'></img>
      </header>
      <nav className='nav'>
        <div>p</div>
        <div>p</div>
        <div>p</div>
      </nav>
      <div className= "content">
        <div>
        <img src='https://spark.ru/upload/other/b_599e7149a23ec.jpg'></img>
        </div>
        <div>
          ava+description
        </div>
        <div>
          my posts
          <div>
            new posts
          </div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  )
}






export default App;
