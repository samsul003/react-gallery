import queryString from 'query-string';
import { Component } from 'react';

class ImgurAuthHandler extends Component {
  componentDidMount() {
    this._extractAndSetToken();
    window.location = '/gallery';
  }

  _extractAndSetToken = () => {
    const decodedHash = queryString.parse(window.location.hash);
    const token = decodedHash.access_token;
    localStorage.setItem('imgur_token', token);
  };

  render() {
    return null;
  }
}

export default ImgurAuthHandler;
