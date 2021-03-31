import React from 'react'

import PerfectScrollbar from "react-perfect-scrollbar"
import AllPost from '../fichesCours/AllPost'

const EcoleQuestions = (props) => {
    const { questions } = props

    return (
        <div>
            <h2 className="ourMainFontColor font-semibold mb-2">
                Dernières questions
          </h2>
            <div className="greyBox h-64 overflow-y-auto px-6 py-3">
                <PerfectScrollbar options={{
                    wheelPropagation: false,
                    suppressScrollX: true,
                }}>
                    <AllPost posts={questions} type="forum" />
                </PerfectScrollbar>
            </div>
        </div>
    )
}

export default EcoleQuestions
