function Title(props) {
  let defaultTitle = "Vous avez oublié de mettre un titre a votre composant";
  return <h1>{props?.title ? props?.title : defaultTitle}</h1>;
}

export default Title;
