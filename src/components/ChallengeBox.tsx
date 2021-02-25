import { useContext } from 'react'
import { ChallengesContext } from '../hooks/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)


    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            onClick={resetChallenge}
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>                   
                </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber novos desafios</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default ChallengeBox
