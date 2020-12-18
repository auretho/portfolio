import { connect } from 'react-redux';
import Skills from '../components/Skills';

const mapState =(state) => ({
    icons: state.skills.icons,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Skills);