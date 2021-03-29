import React from 'react'

const EcoleAPropos = (props) => {
  const { institute } = props
  
  return (
    <div>
      <h1 className="text-2xl ourYellow font-bold">{institute.libelle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
        <fieldset className="md:col-span-2 border p-4 pt-2 bg-gray-50">
          <legend className="uppercase ourMainFontColor font-semibold">
            à propos de l'école
          </legend>
          <div className="grid gap-3">
            <div className="flex">
              <label>
                Adresse :
                <input
                  className="border ml-2 rounded-lg px-2 align-middle"
                  value={institute.adresse}
                  readOnly
                ></input>
              </label>
            </div>

            <div className="grid md:flex gap-3">
              <label>
                Ville :
                <input
                  name="ville"
                  className="border ml-2 rounded-lg px-2 align-middle smallerInput"
                  value={institute.ville}
                  readOnly
                ></input>
              </label>

              <label>
                Région :
                <input
                  name="region"
                  className="border ml-2 rounded-lg px-2 align-middle smallerInput"
                  value={institute.region}
                  readOnly
                ></input>
              </label>
            </div>

            <div className="grid mr-8">
              <label>
                Description :
                <textarea
                  name="desc"
                  style={{ resize: 'none' }}
                  className="border ml-2 w-full rounded-lg px-2 align-middle"
                  value={institute.description}
                  readOnly
                ></textarea>
              </label>
            </div>

            <p>
              URL :{' '}
              <a href={institute.site} className="underline text-blue-600">
                {institute.site}
              </a>
            </p>
          </div>
        </fieldset>
        <div className="greyBox m-6 p-4 flex justify-center items-center">
          <img src={institute.logo} />
        </div>
      </div>
    </div>
  )
}

export default EcoleAPropos
