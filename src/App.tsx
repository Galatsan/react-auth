import './App.css';
// import Login from './components/login/login';
import Tabs from './components/Tabs/Tabs'
import SignIn from './components/signIn/signIn'
import SignUp from './components/signUp/signUp'

function App() {
  return (
    <div className="App">
      <Tabs nav={[
          'Sign in',
          'Sign up'
        ]}
        content={{
          'Sign in': <SignIn />,
          'Sign up': <SignUp />
        }} />
    </div>
  );
}

export default App;
