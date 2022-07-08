import { CardDesc } from './components/CardDesc';
import { CardHeader } from './components/CardHeader';
import { CardIcon } from './components/CardIcon';
import { CardImage } from './components/CardImage';

type CardProps = {
  header?: string;
  description?: string;
  extraDescription?: string;
};

export const Card = (props: CardProps) => {
  const {
    header = 'Balloon Flower',
    description = 'Platycodon grandiflorus',
    extraDescription = '127 sightings'
  } = props;
  return (
    <CardImage>
      <CardIcon />
      <CardHeader variant="tertiary">{header}</CardHeader>
      <CardDesc mb="29px">{description}</CardDesc>
      <CardDesc>{extraDescription}</CardDesc>
    </CardImage>
  );
};
