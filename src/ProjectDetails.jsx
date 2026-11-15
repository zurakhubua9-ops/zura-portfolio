import { useEffect, useRef } from 'react'
import { assetUrl } from './content'

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      trigger?.focus()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="detail-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className="detail-content">
        <button className="detail-close" onClick={onClose} aria-label="Close project details">
          Close ×
        </button>
        <p className="section-label">{project.category}</p>
        <h2 id="detail-title">{project.title}</h2>
        {project.image && (
          <img className="detail-image" src={assetUrl(project.image)} alt={`${project.title} website screenshot`} />
        )}
        <p className="detail-description">{project.description}</p>
        {!project.image && <p className="detail-note">Website screenshots will be added soon.</p>}
        <div className="detail-links">
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">View code on GitHub ↗</a>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit website ↗</a>
          ) : <span>Live website link coming soon</span>}
        </div>
      </div>
    </dialog>
  )
}
