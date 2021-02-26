import { useContext } from 'react'
import { ChallengesContext } from '../hooks/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

const LevelUpModal = () => {

    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>parabens</strong>
                <p>você alcançou um novo level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}

export default LevelUpModal
