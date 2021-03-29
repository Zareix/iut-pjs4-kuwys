import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../util/context'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

import iconNotification from '../../svg/iconNotifications.svg'
import dmNNotification from '../../svg/iconDm.svg'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(1),
  },
}))

const NavigationPanel = (props) => {
  const { user, logout } = useGlobalContext()
  const classes = useStyles()

  const { deconnexion } = props

  return (
    <div className="grid justify-items-center  text-base md:text-sm">
      <Link to={"/profil/user/" + user.username} className="grid justify-items-center my-10">
        <Avatar
          alt="user pp avatar"
          src={user.imageUrl}
          className={classes.large}
        />
        <p>{user.username}</p>
      </Link>
      <div className="grid grid-cols-2 gap-10">{/* icons */}
      <Avatar
          alt="notifications logo"
          src={dmNNotification}
          className={classes.large}
        />
        <NavLink to="/notifications">
        <Avatar
          alt="notifications logo"
          src={iconNotification}
          className={classes.large}
        />
        </NavLink>
        
      </div>
      <div className="grid gap-4 w-2/3 md:w-full md:mt-8">
        <NavLink to="/accueil" activeClassName="font-semibold">
          Accueil
        </NavLink>
        <NavLink to={"/profil/user/" + user.username} activeClassName="font-semibold">
          Profil
        </NavLink>
        <NavLink to="/ecole" activeClassName="font-semibold">
          Espace Ecole
        </NavLink>
        <NavLink to="/fichescours" activeClassName="font-semibold">
          Fiches & Cours
        </NavLink>
        <p>Forum Q&R</p>
        <NavLink to="/groupestravail" activeClassName="font-semibold">
          Groupes de travail
        </NavLink>
        {deconnexion && (
          <div className="flex justify-center mt-4">
            <button
              className="border rounded-full ourYellowBg text-white font-bold px-2 py-1 "
              onClick={logout}
            >
              Deconnexion
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavigationPanel
