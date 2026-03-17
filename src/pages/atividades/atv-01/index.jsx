
import styles from './index.module.css';

function Atividade01() {

  return (
    <div>
      <h1>Dirty</h1>      
      <h2>Deeds</h2>
      <h3>Done</h3>
      <p>Dirt</p>
      <label>Cheap</label>
      <small>- Love Train -</small>
      <p></p>
      <div className={styles.containerrBlocos}>
        <div className={styles.brancoBranco}></div>
        <div className={styles.brancoCinza}></div>
        <div className={styles.pretoPreto}></div>
        <div className={styles.pretoCinza}></div>
      </div>
    </div>
  )
} 

export default Atividade01;