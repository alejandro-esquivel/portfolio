import styles from './navlink.module.css'

function Navlink({ children, ...props }) {
  return (
    <li className={`py-1 px-2 rounded-md text-slate-50 transition-all duration-75 ring-2 ring-transparent hover:ring-4 hover:ring-violet-400 hover:text-violet-400 ${styles.navlink}`} {...props}>
      {children}
    </li>
  );
}

export default Navlink;