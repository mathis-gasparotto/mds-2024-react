import { Text } from "../components/atoms";
import Home from "../components/Home/Home";
import Page from "../components/templates/Page";

const Contact = (props) => {
  return (
    <Page>
      <Home message="Hello World"></Home>
      <Text.Title title="Mon super Titre - Contact"></Text.Title>
      <Text.Paragraph text="Bonjour a tous, regardez ce super texte"></Text.Paragraph>
      <Text.SubTitle>
        <Text.Paragraph text="Mon super deuxieme Titre"></Text.Paragraph>
      </Text.SubTitle>
      <Text.Paragraph>Ceci est la page Contact</Text.Paragraph>
    </Page>
  );
};

export default Contact;
