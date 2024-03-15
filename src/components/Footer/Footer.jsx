import "./Footer.scss";
const Footer = (props) => {

if(props.array ){
  return (
    <footer data-testid="footer" className="app_footer bottom-footer" >
      <ul>
        {props.array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
}
};

export default Footer;
