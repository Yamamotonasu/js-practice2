import { connect } from 'react-redux'
import Counter from '../components/index'
import {
  countUp,
  countDown
} from "../actions";

const mapStateToProps = (state) => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCountUp: () => dispatch(countUp()),
    onClickCountDown: () => dispatch(countDown())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)