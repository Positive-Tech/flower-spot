import { Header } from '../components/extended/Header';
import { Card } from '../components/extended/Card';
import { Input } from '../components/extended/Input';
import { HomeImage } from '../components/extended/HomeImage/HomeImage';
import { HomeImageHeader } from '../components/extended/HomeImage/HomeImageHeader';
import { HomeHeaderMain } from '../components/extended/HomeImage/HomeHeaderMain';
import { HomeHeaderDesc } from '../components/extended/HomeImage/HomeHeaderDesc';
import { FlowersListContainer } from '../components/layout/FlowersList';

export const Home = () => {
  return (
    <div>
      <Header />
      <HomeImage>
        <HomeImageHeader>
          <HomeHeaderMain>Discover flowers around you</HomeHeaderMain>
          <HomeHeaderDesc>Explore between more than 8.427 sightings</HomeHeaderDesc>
          <Input withIcon={true} placeholder="Looking for something specific?" />
        </HomeImageHeader>
      </HomeImage>
      <FlowersListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </FlowersListContainer>
    </div>
  );
};
