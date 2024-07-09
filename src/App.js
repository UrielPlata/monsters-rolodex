import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[values,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filtMonsters, setFilterMonsters] = useState(monsters);

  // useEffect crea un efecto secundario que se ejecuta solo cuando le digamos
  // en este caso una sola vez
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []); //esto indica que se cambie cuando no haya nada aqui

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);

  }, [monsters, searchField])

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }


  return (
    <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box'/>
        <CardList monsters={filtMonsters}/>
      </div>
  );
}

// class App extends Component{

//   constructor(){
//     super();

//     // this.state = {
//     //   name: { firstname: 'Yihua', lastName: 'Zhang' },
//     //   company: 'ZTM',
//     // }

//     this.state = {
//       // monsters: [{
//       //     name: 'Linda',
//       //     id: '1232',
//       //   },
//       //   {
//       //     name: 'Frank',
//       //     id: '1233',
//       //   },
//       //   {
//       //     name: 'Jacky',
//       //     id: '1234',
//       //   },
//       // ]
//       monsters: [],
//       searchField:''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(
//         () => {
//           return { monsters: users}
//         },
//         () => {
//           console.log(this.state);
//         }
//       )
//     )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => { 
      
//      return { searchField };
//     });
//   }

//   render(){

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filtMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         {/* <header className="App-header">
          
//            <img src={logo} className="App-logo" alt="logo" />
//           <p>
//            Hola {this.state.name.firstname} {this.state.name.lastName}, 
//            trabajo en {this.state.company}
//           </p>
//           <button
//           onClick = {() => {
//             this.setState(() => { 
//               return {
//               name : {firstname: 'Uriel', lastName: 'Plata'},
//             }
           
//             }, () => {
//               console.log(this.state);
//             });
//           }
//           } 
//           >
//             Cambiar nombre
//           </button>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a> 
//         </header> */}

//         {/* SEGUNDA ETAPA */}


        
//         {/* {filtMonsters.map((monster) => {
//             return <div key={monster.id}><h1>{monster.name}</h1></div>;
//           })
//         } */}
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box'/>
//         <CardList monsters={filtMonsters}/>
//       </div>
//     );
//   }
  
// }

export default App;
