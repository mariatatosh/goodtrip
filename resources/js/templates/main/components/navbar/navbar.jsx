import {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Container} from '@material-ui/core'

import RouteList from '@/common/constants/route-list/'

import {LanguageSelect} from '@/components/'
import styles from './navbar.module.scss'

const Navbar = () => {
    const [languageDialog, setLanguageDialog] = useState(false)

    const {t, i18n} = useTranslation()

    const languagesData = i18n.services.resourceStore.data
    const currentLanguageLabel = languagesData[i18n.language].label

    return (
        <Container className={styles.navbar} component="nav">
            <Link to={RouteList.home} className={styles.logo}>
                GoodTrip
            </Link>

            <ul className={styles.menu}>
                <li>
                    <NavLink
                        exact
                        to={RouteList.home}
                        activeClassName={styles.active}
                    >
                        {t('home')}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        to={RouteList.listings}
                        activeClassName={styles.active}
                    >
                        {t('listings')}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact
                        to={RouteList.blog}
                        activeClassName={styles.active}
                    >
                        {t('blog')}
                    </NavLink>
                </li>

                <li>
                    <span onClick={() => setLanguageDialog(true)}>
                        {currentLanguageLabel}
                    </span>
                </li>

                <li>
                    <NavLink
                        exact
                        to={RouteList.auth}
                        className={styles.styled}
                        activeClassName={styles.active}
                    >
                        {t('login')}
                    </NavLink>
                </li>
            </ul>

            <LanguageSelect
                open={languageDialog}
                handleClose={() => setLanguageDialog(false)}
            />
        </Container>
    )
}

export default Navbar
