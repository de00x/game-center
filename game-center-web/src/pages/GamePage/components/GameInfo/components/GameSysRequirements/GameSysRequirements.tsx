import styles from './styles/GameSysReq.module.scss'
import { FC, memo, useState } from 'react'

const GameSysRequirements: FC = (): JSX.Element => {
  const [systemReqShowMore, setSystemReqShowMore] = useState(false)

  return (
    <div className={styles.systemRequirements}>
      <div>System requirements for PC</div>
      {systemReqShowMore && (
        <div className={styles.systemReqText}>
          Recommended: OS: Windows 10 (64-bit) CPU: Intel Core i7-4790 or AMD Ryzen 3 3200G RAM:
          12GB GPU: Nvidia GeForce GTX 1060 6GB, a GTX 1660 Super, or AMD Radeon RX 590 VRAM: 6GB
          Direct X: Version 12 Available Storage Space: 70GB SSD GFX Setting Game Can Be Played On:
          High
        </div>
      )}
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
