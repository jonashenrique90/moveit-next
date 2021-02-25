import { useContext } from 'react'
import { ChallengesContext } from '../hooks/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'
const CompletedChallenges = () => {

    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}

export default CompletedChallenges