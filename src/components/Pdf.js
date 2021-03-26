import React, { useState, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import PropTypes from 'prop-types'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import API from '../util/api'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Pdf = (props) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const { type, width, firstPage, pdfUrl, titre } = props
  //console.log(titre);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        loading="Chargement du PDF..."
      >
        <Page
          margin = {10}
          pageNumber={pageNumber}
          width={width}
          renderMode={type}
          loading="Chargement du PDF..."
        />
      </Document>
      <div className="grid grid-cols-1 justify-items-center w-1/3 bg-gray-100 p-2 rounded-2xl">
        <div id={props.pdfUrl}></div>
        {!firstPage && (
          <p>
            <span
              onClick={() =>
                setPageNumber(pageNumber === 1 ? numPages : pageNumber - 1)
              }
            >
              {'<- '}
            </span>
            Page {pageNumber}/{numPages}
            <span
              onClick={() =>
                setPageNumber(pageNumber === numPages ? 1 : pageNumber + 1)
              }
            >
              {' ->'}
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

Pdf.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  firstPage: PropTypes.bool.isRequired,
}

Pdf.defaultProps = {
  type: 'svg',
  width: 350,
  firstPage: false,
}

export default Pdf
