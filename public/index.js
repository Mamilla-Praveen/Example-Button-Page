const Button = (props) => {
  let { StyleButton, text } = props;
  return <button className={props.StyleButton}>{props.text}</button>;
};

const element = (
  <div className="background">
    <h1 className="main-heading">Social Buttons</h1>
    <div>
      <Button StyleButton="button-1" text="Like" />
      <Button StyleButton="button-2" text="Comment" />
      <Button StyleButton="button-3" text="Share" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
