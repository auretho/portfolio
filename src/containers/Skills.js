import { connect } from 'react-redux';
import Skills from '../components/Skills';
// import { hexagonChange } from '../actions/skills';
import { onToggle } from '../actions/nav';

const mapState =(state) => ({
    icons: state.skills.icons,
    imgVisible: state.skills.imgVisible,
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
        dispatch(onToggle());
      },
});

export default connect(mapState, mapDispatch)(Skills);