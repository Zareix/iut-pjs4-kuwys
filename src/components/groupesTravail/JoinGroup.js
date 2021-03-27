import React from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../util/api';
import { useGlobalContext } from '../../util/context';

const JoinGroup = (props) => {
    const { open, onClose, group, dateMiseEnForme } = props

    const placesDisponibles = group.capaciteMax - (group.users.length + 1)

    const { user } = useGlobalContext()

    const handleClose = () => {
        onClose()
    }

    const handleInscription = () => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        console.log(group);
        API.post("library/joinGroup", {
            username: user.username,
            groupId: group.id
        }, config)
            .then(() => {
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
            <DialogTitle id="alert-dialog-title">{"Voulez-vous réserver votre place dans ce groupe de travail ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className="cols-start-1 col-span-1 row-start-1 row-span-1">
                            <p className="font-bold">{group.lieu}</p>
                        </div>
                        <div className="cols-start-2 col-span-1 row-start-1 row-span-1 flex justify-end">
                            {dateMiseEnForme}
                        </div>
                        <div className="cols-start-1 col-span-1 row-start-2 row-span-1 mt-3">
                            {group.users.length + 1} / {group.capaciteMax} participants
                        </div>
                        <div className="cols-start-2 col-span-1 row-start-2 row-span-1 mt-3 flex justify-end">
                            <p>Il reste <span className="font-bold">{placesDisponibles}</span> places disponibles.</p>
                        </div>
                    </div>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
          </Button>
                <Button onClick={handleInscription} color="primary" autoFocus>
                    S'inscrire
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinGroup