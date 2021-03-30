import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import API from '../../util/api'
import { useGlobalContext } from '../../util/context'
import { toast } from 'react-toastify'

const JoinGroup = (props) => {
  const { open, onClose, group, dateMiseEnForme, isUserInGroup } = props

  const placesDisponibles = group.capaciteMax - (group.usersInGroup.length + 1)

  const { user } = useGlobalContext()

  const isAdmin = group.admin === user.username

  const handleClose = () => {
    onClose()
  }

  const handleSuppression = () => {
    API.post('/library/suppressGroup', { groupId: group.id }).then((res) => {
      toast('Groupe de travail supprimé', {
        className: 'ourYellowBg',
        style: { color: 'white' },
        progressStyle: { background: 'white' },
        position: 'bottom-right',
        autoClose: 3000,
      })
      onClose()
    })
  }

  const handleDesincription = () => {
    API.post('/library/removeUserGroup', { groupId: group.id }).then((res) => {
      toast('Vous venez de vous désinscrire de ce groupe de travail', {
        className: 'ourYellowBg',
        style: { color: 'white' },
        progressStyle: { background: 'white' },
        position: 'bottom-right',
        autoClose: 3000,
      })
      onClose()
    })
  }

  const handleInscription = () => {
    API.post('library/joinGroup', {
      username: user.username,
      groupId: group.id,
    }).then(() => {
      toast('Vous venez de vous inscrire à ce groupe de travail', {
        className: 'ourYellowBg',
        style: { color: 'white' },
        progressStyle: { background: 'white' },
        position: 'bottom-right',
        autoClose: 3000,
      })
      onClose()
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Voulez-vous réserver votre place dans ce groupe de travail ?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
            <div className="col-start-1 col-span-1 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1">
              <p className="font-bold">{group.lieu}</p>
            </div>
            <div className="col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1 flex md:justify-end">
              {dateMiseEnForme}
            </div>
            <div className="col-start-1 col-span-1 row-start-3 row-span-1 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 mt-3">
              {group.usersInGroup.length + 1} / {group.capaciteMax} participants
            </div>
            <div className="col-start-1 col-span-1 row-start-4 row-span-1 md:col-start-2 md:col-span-1 md:row-start-2 md:row-span-1 mt-3 flex md:justify-end">
              <p>
                Il reste <span className="font-bold">{placesDisponibles}</span>{' '}
                places disponibles.
              </p>
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Annuler
        </Button>
        {isAdmin ? (
          <Button onClick={handleSuppression} style={{ color: 'red' }}>
            Supprimer
          </Button>
        ) : isUserInGroup ? (
          <Button onClick={handleDesincription} style={{ color: 'red' }}>
            Se désinscrire
          </Button>
        ) : (
          <Button onClick={handleInscription} color="primary">
            S'inscrire
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default JoinGroup
