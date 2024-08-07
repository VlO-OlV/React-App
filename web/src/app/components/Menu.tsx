import '../../public/styles/Menu.css'

function Menu(props: any) {
    function handleEditClick() {
        if (props.isList) {
            props.enterEditMode();
        } else {
            props.openModal(2);
        }
        props.closeMenu();
    }

    function handleDeleteClick() {
        props.handleDelete();
        props.closeMenu();
    }

    return (
        <div className={props.isList ? "menu menu-list" : "menu menu-task"} style={props.isOpened ? {display: 'flex'} : {display: 'none'}} onClick={(e) => {e.stopPropagation();}}>
            <button className="menu-button-edit" onClick={handleEditClick}>Edit</button>
            <button className="menu-button-delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default Menu;