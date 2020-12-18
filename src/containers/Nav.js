import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapState =(state) => ({
    sections: state.nav.sections,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Nav);