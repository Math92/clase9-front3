import PizzaOrder from './components/PizzaOrder';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundDecorations}>
        <span className={styles.decoration}>🍕</span>
        <span className={styles.decoration}>🧀</span>
        <span className={styles.decoration}>🍅</span>
        <span className={styles.decoration}>🌿</span>
      </div>
      
      <div className={styles.contentContainer}>
        <span className={styles.logo}>🍕</span>
        <h1 className={styles.title}>Pizza Express</h1>
        <PizzaOrder />
      </div>
    </div>
  );
}

export default App;