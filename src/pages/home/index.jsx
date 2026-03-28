import { Link } from 'react-router-dom';

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
        <Link to="/exemplo/1">Exemplo 1</Link>
        <Link to="/exemplo/2">Exemplo 2</Link>
        <Link to="/exemplo/4">Exemplo 4</Link>
        <Link to="/exemplo/5">Exemplo 5</Link>
        <Link to="/exemplo/6">Exemplo 6</Link>
        <Link to="/exemplo/7">Exemplo 7</Link>
        <Link to="/exemplo/8">Exemplo 8</Link>
        <Link to="/exemplo/9">Exemplo 9</Link>
        <Link to="/exemplo/10">Exemplo 10</Link>
        <Link to="/exemplo/11">Exemplo 11</Link>
        <Link to="/exemplo/12">Exemplo 12</Link>
      </div>
      <div className={styles.containerLista}>
        <h1>Atividades</h1>
        <Link to="/atividades/1">Atividade 1</Link>
        <Link to="/atividades/2">Atividade 2</Link>
        <Link to="/atividades/3">Atividade 3</Link>
        <Link to="/atividades/4">Atividade 4</Link>
        <Link to="/atividades/5">Atividade 5</Link>
      </div>
    </div>
  )
}

export default Home
