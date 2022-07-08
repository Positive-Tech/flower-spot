import { Card } from '../components/extended/Card';
import { Header } from '../components/extended/Header';
import { SearchInput } from '../components/extended/SearchInput';
import { FlowersListContainer } from '../components/layout/FlowersList';

export const Flowers = () => {
  return (
    <>
      <Header />
      <SearchInput withIcon={true} placeholder="Looking for something specific?" />
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
    </>
  );
};
