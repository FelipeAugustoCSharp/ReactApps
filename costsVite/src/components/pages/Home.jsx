import styles from '../styles/Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../ci/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton where="/newproject" text="Criar Projeto"/>
      <img src={savings} alt="Savings" />
    </section>
  )
}

export default Home