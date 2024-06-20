// I'm not actually using this subcomponent that's why it's commented out.
// But, if you see some code like this in the Dropdown component:
// `
// {isOpen ? <ArrowDown /> : <ArrowRight />}
// `
// is the same thing this function does, but as a component and using props,
// For future maintenance and good practices, this sub-component has already been created

// Follow the code below:

// import PropTypes from "prop-types";
// import { ArrowDown, ArrowRight } from "react-feather";

// DropdownArrows.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

// function DropdownArrows ({ isOpen }) {
//   return <>{isOpen ? <ArrowDown /> : <ArrowRight />}</>;
// }

// export default DropdownArrows;
