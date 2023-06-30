

const Header = (props:any) => {
  const {title} = props;
  return (
    <div className="ui fixed menu">
      <div className="ui container cen">
        <h4 className="project_title">{title}</h4>
      </div>
    </div>
  );
};

export default Header;
