import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          {/* <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "} */}
          <span className="mt-2 d-none d-md-inline-block">Katarzyna Mocek</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profil
          </DropdownItem>
          <DropdownItem to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edytuj profil
          </DropdownItem>
          <DropdownItem to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Pliki
          </DropdownItem>
          <DropdownItem to="transaction-history">
            <i className="material-icons">&#xE896;</i> Raporty
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Wyloguj się
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
