export default function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick, ...props }) {
  const className = `btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${props.className || ''}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}