const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ])
}
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {className: 'title'}, 'React is rendered'),
    React.createElement(Person, {name: 'Jeandre', occupation: "Developer"}, null),
    React.createElement(Person, {name: 'Elsje', occupation: "Nurse"}, null)
  ])
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App))