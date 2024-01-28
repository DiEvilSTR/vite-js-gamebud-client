import './Modal.css';

export function Modal({ children, footer, header }) {
  return (
    <div className="modal" role="dialog">
      {header && <div className="modal-header">{header}</div>}

      {children && <div className="modal-content">{children}</div>}

      {footer && <div className="modal-footer">{footer}</div>}
    </div>
  );
}
