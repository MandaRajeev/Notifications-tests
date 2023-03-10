const Notification = (props) => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.url}`} />
      <p>{props.text}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <ul>
      <Notification
        className="box1"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="box2"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="box3"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="box4"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Enter Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
