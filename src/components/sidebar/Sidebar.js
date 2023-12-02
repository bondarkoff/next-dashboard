import { usePathname } from 'next/navigation';

import { AnalyticsIcon } from '../assets/AnalyticsIcon';
import { DashboardIcon } from '../assets/DashboardIcon';
import { Logotype } from '../assets/Logotype';
import { SettingsIcon } from '../assets/SettingsIcon';
import { UserIcon } from '../assets/UserIcon';
import { WalletIcon } from '../assets/WalletIcon';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.sidebar}>
            <div className={styles['sidebar__logo']}>
                <Logotype />
                <h1>uirfy</h1>
            </div>
            <div className={styles['sidebar__navigation']}>
                <nav>
                    <ul>
                        <li
                            className={
                                pathname === '/'
                                    ? styles['sidebar__navigation-active']
                                    : styles['sidebar__navigation-item']
                            }>
                            <DashboardIcon />
                            <p className='ml-15'>Dashboard</p>
                        </li>
                        <li className={styles['sidebar__navigation-item']}>
                            <AnalyticsIcon />
                            <p className='ml-15'>Analytics</p>
                        </li>
                        <li className={styles['sidebar__navigation-item']}>
                            <WalletIcon />
                            <p className='ml-15'>My Wallet</p>
                        </li>
                        <li className={styles['sidebar__navigation-item']}>
                            <UserIcon />
                            <p className='ml-15'>Accounts</p>
                        </li>
                        <li className={styles['sidebar__navigation-item']}>
                            <SettingsIcon />
                            <p className='ml-15'>Settings</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
