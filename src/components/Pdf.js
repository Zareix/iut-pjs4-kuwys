import React, { useState, useContext, useEffect } from "react"
import ReactDOM from "react-dom"

import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

import { DbContext } from "../App"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Pdf = (props) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const firebase = useContext(DbContext)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  useEffect(() => {
    async function getPdf() {
      await firebase
        .storage()
        .ref()
        .child(props.pdfPath)
        .getDownloadURL()
        .then((url) => {
          ReactDOM.render(
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
              loading="Chargement du PDF..."
            >
              <Page
                pageNumber={pageNumber}
                width={350}
                renderMode="svg"
                loading="Chargement du PDF..."
              ></Page>
            </Document>,
            document.getElementById("pdf")
          )
          console.log(url)
          /*ReactDOM.render(
          <iframe
            title="file"
            style={{ width: "100%", height: "100%" }}
            src={url}
          />,
          document.getElementById("pdf")
        )*/
          //document.getElementById('img').setAttribute(url)
        })
    }
    getPdf()
    return () => {}
  }, [firebase, pageNumber, props.pdfPath])

  return (
    <div className="grid grid-cols-1 justify-items-center w-1/3 bg-gray-100 p-2 rounded-2xl">
      <div id="pdf"></div>
      <p>
        <span
          onClick={() =>
            setPageNumber(pageNumber === 1 ? numPages : pageNumber - 1)
          }
        >
          {"<- "}
        </span>
        Page {pageNumber}/{numPages}
        <span
          onClick={() =>
            setPageNumber(pageNumber === numPages ? 1 : pageNumber + 1)
          }
        >
          {" ->"}
        </span>
      </p>
    </div>
  )
}

export default Pdf
