import { useContext } from 'react'
import { ChallengesContext } from '../hooks/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

const Profile = () => {

    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/29473398?s=460&u=fdb297b68d874cde5d1a69f3e53ab080c75cb174&v=4" alt="Jonas H"/>
            <div>
                <strong>Jonas H</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}

export default Profile
