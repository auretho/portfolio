import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { onToggle } from '../actions/nav';

const mapState =(state) => ({
    sections: state.nav.sections,
    opened: state.nav.opened,
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
        dispatch(onToggle());
      },
});;

export default connect(mapState, mapDispatch)(Nav);