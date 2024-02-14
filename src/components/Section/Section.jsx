import PropTypes from "prop-types";

export const Section = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.element.isRequired,
}

