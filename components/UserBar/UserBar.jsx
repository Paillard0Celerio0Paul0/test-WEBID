export const UserBar = (props) => {
  const handleChange = () => {
    if (props.users.includes(props.id)) {
      props.setSelected(props.users.filter((e) => e !== props.id));
    } else props.setSelected(props.users.concat(props.id));
  };

  return (
    <div>
      <input type="checkbox" onChange={handleChange} />

      <span>{props.children}</span>
    </div>
  );
};
