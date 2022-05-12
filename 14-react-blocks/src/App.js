import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import styles from './AppStyle.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
        <div className={styles.body}>
          <Navigation />
          <Main
            ad={
              <Advertisement />
            }>
            <SubContents />
            <SubContents />
            <SubContents />
          </Main>
        </div>
    </div>
  );
}

export default App;
