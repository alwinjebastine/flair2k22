import { useNavigate } from 'react-router-dom'
import navItems from '../utils/navItems'

const NavList = ({ closeMenu }: { closeMenu?: () => void }) => {
  const navigate = useNavigate()
  return (
    <>
      {navItems.map((item) => (
        <li key={item.title}>
          <a
            onClick={() => {
              window.getSelection()?.removeAllRanges()
              setTimeout(() => {
                navigate(item.link)
                closeMenu && closeMenu()
              }, 100)
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  )
}

export default NavList
