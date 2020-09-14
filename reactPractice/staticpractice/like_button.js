class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // 展示一個「Like」<button>
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

// const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, document.getElementById('like_button_container')
);