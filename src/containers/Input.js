import { connect } from 'react-redux';
import Input from '../components/Input';
import { RENDER_MESSAGE } from '../actions';

const mapDispatchToProps = dispatch => ({
    renderMessage: message => {
        dispatch({ type: RENDER_MESSAGE, message });
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Input);