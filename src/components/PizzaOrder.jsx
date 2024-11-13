import { useState, useEffect } from 'react';
import styles from './PizzaOrder.module.css';

const PizzaOrder = () => {
  const [orderLoaded, setOrderLoaded] = useState(false);
  const [showOrder, setShowOrder] = useState(true);

  useEffect(() => {
    console.log('Componente montado - Iniciando temporizador');
    const timer = setTimeout(() => {
      setOrderLoaded(true);
    }, 2000);

    return () => {
      console.log('Limpiando temporizador');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (orderLoaded) {
      console.log('El componente fue actualizado - Pedido cargado');
    }
  }, [orderLoaded]);

  const handleCancel = () => {
    console.log('El pedido fue cancelado');
    setShowOrder(false);
  };

  if (!showOrder) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Su pedido</h2>
      
      {orderLoaded ? (
        <div className={`${styles.orderContent} ${styles.fadeIn}`}>
          <div className={styles.orderItem}>
            <span>Pizza Margherita Tradicional</span>
            <div className={styles.tag}>Especialidad</div>
          </div>
          
          <ul className={styles.ingredients}>
            <li>🧀 Extra queso mozzarella</li>
            <li>🍅 Tomates frescos</li>
            <li>🌿 Albahaca</li>
            <li>🫒 Aceite de oliva extra virgen</li>
          </ul>

          <div className={styles.price}>
            $15.99
          </div>

          <div className={styles.statusContainer}>
            <p className={styles.statusText}>
              Estado: En preparación
            </p>
            <p className={styles.estimatedTime}>
              Tiempo estimado: 30 minutos
            </p>
          </div>
          
          <button
            onClick={handleCancel}
            className={styles.cancelButton}
          >
            Cancelar pedido
          </button>
        </div>
      ) : (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner} />
        </div>
      )}
    </div>
  );
};

export default PizzaOrder;