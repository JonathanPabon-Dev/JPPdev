import PropTypes from 'prop-types'

const TitleSection = ({children}) => {
  return (
    <h2 className="font-montserrat font-extrabold text-5xl text-slate-800">
        {children}
    </h2>
  )
}

TitleSection.propTypes = {
    children: PropTypes.node
}

export default TitleSection