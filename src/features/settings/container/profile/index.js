// connect

import { Settings } from 'react-native'

// connect

function mapStateToProps(state) {
  const { profile } = state
  return { profile: Settings.profile }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile,
  }
}

// form
redux -
  form({
    form: 'Dashboard-form',
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
