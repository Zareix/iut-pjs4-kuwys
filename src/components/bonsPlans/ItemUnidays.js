import React from "react"

const ItemUnidays = (props) => {


    return (
        <div className="unidaysDiv popUpEffect rounded-lg p-4 md:p-4 h-full mt:4 md:mb-5">
            <div>
                <span className="font-bold text-lg mr-5">{props.marque}</span>
                {props.rabais}
            </div>
            
        </div>

    )
}

export default ItemUnidays
