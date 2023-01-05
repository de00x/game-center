import { IGameSysReqProps } from './types/GameSysReq.types'
import styles from './styles/GameSysReq.module.scss'
import { FC, memo, useState } from 'react'

const GameSysRequirements: FC<IGameSysReqProps> = ({ ...props }): JSX.Element => {
  const [systemReqShowMore, setSystemReqShowMore] = useState(false)

  return (
    <div className={styles.systemRequirements}>
      <div>System requirements for PC</div>
      {systemReqShowMore && <div className={styles.systemReqText}>{props.systemReqPC}</div>}
      <span
        className={styles.systemReqShowMoreBtn}
        onClick={() => setSystemReqShowMore(!systemReqShowMore)}
      >
        {systemReqShowMore ? 'Show less...' : 'Read more...'}
      </span>
    </div>
  )
}

export default memo(GameSysRequirements)
