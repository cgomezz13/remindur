import { connect } from 'react-redux';
import { deleteList, createNewList, updateList, fetchAllLists } from '../../actions/list_actions';
import { allTasks } from '../../actions/task_actions';
import ListForm from './list_form';


const mapStateToProps = (state) => {
  return ({
    lists: Object.values(state.lists)
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteList: (id) => dispatch(deleteList(id)),
    createNewList: (list) => dispatch(createNewList(list)),
    updateList: (list) => dispatch(updateList(list)),
    fetchAllLists: () => dispatch(fetchAllLists()),
    fetchAllTasks: () => dispatch(allTasks())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
