import React from 'react'

import Gui from '../gui/Gui'

const Ecole = () => {
    return (
        <Gui>
            <h1 className="text-2xl ourYellow font-semibold">nom de l'ecole</h1>
            <div className="flex mt-4">
                <fieldset className="w-2/3 border p-4 pt-2 bg-gray-50">
                    <legend className="uppercase ourMainFontColor font-semibold">à propos de l'école</legend>
                    <div className="grid gap-3">
                        <div className="flex">
                            <label for="adresse">Adresse : </label>
                            <input name="adresse" className="border ml-2 rounded-lg px-2 align-middle"></input>
                        </div>

                        <div>
                            <label for="ville">Ville :</label>
                            <input name="ville" className="border ml-2 mr-8 rounded-lg px-2 align-middle smallerInput"></input>
                            <label for="region">Région :</label>
                            <input name="region" className="border ml-2 rounded-lg px-2 align-middle smallerInput"></input>
                        </div>

                        <div className="grid">
                            <label for="desc">Description :</label>
                            <textarea name="desc"
                                style={{ resize: 'none' }} className="border ml-2 mr-8 rounded-lg px-2 align-middle"></textarea>
                        </div>

                        <p>URL : <a href="#">url</a></p>
                    </div>
                </fieldset>
                <div className="w-1/3 greyBox m-6">
                    logo
                </div>
            </div>
            <div className="grid grid-cols-2 mt-10">
                <div>
                    <h2 className="ourMainFontColor font-semibold mb-2">Dernières questions</h2>
                    <div className="greyBox h-64 overflow-y-auto px-6 py-3">
                        Et in ut ipsum ut culpa labore nulla velit ut eiusmod. Nisi exercitation officia in do ut. Dolore reprehenderit pariatur duis sit irure pariatur incididunt nisi ex id minim qui sunt pariatur. Ex in ea fugiat qui ullamco dolor labore culpa dolore in reprehenderit. Sit ut occaecat cillum reprehenderit incididunt minim quis aliqua. Cupidatat officia amet fugiat ad cupidatat culpa enim consequat irure duis incididunt irure cillum minim.Aliquip ad nisi nulla consequat duis velit deserunt anim amet. Sunt esse incididunt ullamco do sint sunt ipsum cillum voluptate fugiat non labore. Pariatur ea deserunt minim nostrud proident amet non veniam.Mollit veniam deserunt eu consectetur. Minim velit irure fugiat et incididunt minim duis duis ex nisi duis ipsum. Exercitation est ex magna nostrud ad in. Dolor excepteur dolore non velit labore.
                    </div>
                </div>
                <div className="px-10">
                    <div className="greyBox px-6 py-3">
                        <div className="flex grButton p-4 px-6 bg-white">
                            <p className="w-2/3 font-semibold ourMainFontColor">
                                Nombre de membres :
                        </p>
                            <p className="w-1/3 text-right font-bold ourMainFontColor">
                                1000
                        </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="ourMainFontColor font-semibold mb-2">Les groupes de travails de l'école</h2>
                        <div className="greyBox px-6 py-3 h-32">
                            {/*AllGroupesDeTravail */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="greyBox mt-8 mb-20 px-6 py-3">
                <h2 className="ourMainFontColor font-semibold mb-2">Les fiches et les cours des étudiants de l’école</h2>
                {/*AllFiches*/}
            </div>
        </Gui >
    )
}

export default Ecole
