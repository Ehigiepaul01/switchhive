import PropTypes from 'prop-types'

const Title = ({ children }) => {
  return (
    <h1 className='text-black text-3xl font-medium leading-9'>
        {children}
    </h1>
  )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
}


export default Title;