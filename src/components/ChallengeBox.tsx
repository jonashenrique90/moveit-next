import { useContext } from 'react'
import { ChallengesContext } from '../hooks/ChallengeContext'
import { CountdownContext } from '../hooks/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {

    const { 
        activeChallenge,
        resetChallenge,
        completeChallenge
    } = useContext(ChallengesContext)

    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }


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
                            onClick={handleChallengeFailed}
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            onClick={handleChallengeSucceeded}
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
