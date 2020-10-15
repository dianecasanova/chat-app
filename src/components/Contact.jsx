import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    const newStatus = !this.state.online;
    this.setState({
      online: newStatus,
    });
  }

  render() {
    return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status" onClick={this.increment} >
          <div className={this.state.online ? "status-online" : "status-offline"} />
          <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
    );
  }
}


export default Contact;
