import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import PropTypes from 'prop-types'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { RiArrowRightCircleLine } from 'react-icons/ri'
import { RiArrowLeftCircleLine } from 'react-icons/ri'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Pdf = (props) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  let mounted = false

  const { type, width, firstPage, pdfUrl } = props
  useEffect(() => {
    mounted = true
    return () => (mounted = false)
  }, [])

  const onDocumentLoadSuccess = ({ numPages }) => {
    if (mounted) setNumPages(numPages)
  }

  return (
    <div>
      <Document
        file={pdfUrl}
        options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        loading="Chargement du PDF..."
        className="grid justify-center"
      >
        <Page
          margin={10}
          pageNumber={pageNumber}
          width={width}
          renderMode={type}
          loading="Chargement du PDF..."
        />
      </Document>
      <div className="w-full grid justify-center justify-items-center ">
        {!firstPage && (
          <p className="flex px-2 py-2 bg-gray-100 rounded-2xl ">
            <span
              className="cursor-pointer"
              onClick={() =>
                setPageNumber(pageNumber === 1 ? numPages : pageNumber - 1)
              }
            >
              <RiArrowLeftCircleLine className="text-2xl mr-2  ourYellow hover:ourYellowDark cursor-pointer popUpEffect" />
            </span>
            <p className="ourMainFontColor font-bold">
              {pageNumber} / {numPages}
            </p>

            <span
              className="cursor-pointer"
              onClick={() =>
                setPageNumber(pageNumber === numPages ? 1 : pageNumber + 1)
              }
            >
              <RiArrowRightCircleLine className="text-2xl ml-2 ourYellow hover:ourYellowDark cursor-pointer popUpEffect" />
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
