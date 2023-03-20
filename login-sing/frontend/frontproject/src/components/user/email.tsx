import axios from 'axios';
function email() {
class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/send-verification-code', { email: this.state.email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <button type="submit">Send Verification Code</button>
      </form>
    );
  }
}
}
export default email;