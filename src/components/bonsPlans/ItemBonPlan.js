import React from "react"

const ItemBonPlan = (props) => {

    return (
        <div className="unidaysDiv popUpEffect rounded-lg md:p-5 h-full">
            <div className="text-center md:mb-3">
                <a className="bgGreen rounded-full md:px-3 md:py-1 font-bold text-white" href={props.site}>
                    VOIR
                </a>
            </div>
            <div className="font-bold text-lg">
                {props.title}
            </div>
            <div>
                {props.desc}
            </div>
            
        </div>

    )
}

export default ItemBonPlan
