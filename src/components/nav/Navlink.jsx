import PropTypes from 'prop-types';

function Navlink({ children, url, ...props }) {
  return (
    <a href={url}>
      <li className={`relative py-2 px-3 rounded-lg text-slate-50 transition-all duration-300 ease-out
      before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300
      before:border-2 before:border-transparent before:scale-x-[1.05] before:scale-y-[1.1] before:opacity-0
       hover:cursor-pointer`} {...props}>
        {children}
      </li>
    </a>
  );
}

export default Navlink;

Navlink.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

