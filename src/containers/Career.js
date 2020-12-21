import { connect } from 'react-redux';
import Career from '../components/Career';

const mapState =(state) => ({
    careerData: state.career.careerData,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Career);