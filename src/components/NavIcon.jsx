const NavIcon = ({label, active, icons, isOpen}) => {
  return (
    <span className={`flex gap-3 items-center ${isOpen ? 'text-white': ''}`}>
        <img src={isOpen ? active : icons} alt={label} />
        {label}
    </span>
  )
}

export default NavIcon