import React, { useState, useEffect } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../util/context'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded'
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded'
import ForumRoundedIcon from '@material-ui/icons/ForumRounded'
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded'
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded'

import iconNotification from '../../svg/iconNotifications.svg'
import API from '../../util/api'

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

  const [invisibleValue, setInvisibleValue] = useState(true)

  useEffect(() => {
    API.get('/user/notifications')
      .then((res) => {
        user.notifications = res.data
        if (user.notifications) {
          user.notifications.forEach((n) => {
            if (!n.seen) setInvisibleValue(false)
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [user])

  const { deconnexion } = props

  return (
    <div className="grid justify-items-center  text-base md:text-sm">
      <Link
        to={'/profil/user/' + user.username}
        className="grid justify-items-center my-10"
      >
        <Avatar
          alt="user pp avatar"
          src={user.imageUrl}
          className={classes.large}
        />
        <p>{user.username}</p>
      </Link>
      <div className="m-auto">
        <Badge
          color="secondary"
          overlap="circle"
          badgeContent=" "
          invisible={invisibleValue}
        >
          <NavLink to="/notifications">
            <Avatar
              alt="notifications logo"
              src={iconNotification}
              className={classes.large}
            />
          </NavLink>
        </Badge>
      </div>
      <div className="grid gap-4 w-2/3 md:w-full md:mt-8">
        <NavLink
          to="/accueil"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <HomeRoundedIcon className="mr-3 ml-1" />
          Accueil
        </NavLink>
        <NavLink
          to={'/profil/user/' + user.username}
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <PersonRoundedIcon className="mr-3 ml-1" />
          Profil
        </NavLink>
        <NavLink
          to="/ecole"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <SchoolRoundedIcon className="mr-3 ml-1" />
          Espace Ecole
        </NavLink>
        <NavLink
          to="/fichescours"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <DescriptionRoundedIcon className="mr-3 ml-1" />
          Fiches & Cours
        </NavLink>
        <NavLink
          to="/forum"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <ForumRoundedIcon className="mr-3 ml-1" />
          Forum Q&R
        </NavLink>
        <NavLink
          to="/groupestravail"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <LocalLibraryRoundedIcon className="mr-3 ml-1" />
          Groupes de travail
        </NavLink>
        <NavLink
          to="/bonsplans"
          activeClassName="font-semibold active-nav-link"
          className="flex items-center nav-link"
        >
          <LoyaltyRoundedIcon className="mr-3 ml-1" />
          Bons Plans
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
