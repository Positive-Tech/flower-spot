import { Input } from '../Input';
import { InputProps } from '../Input/Input';
import { SearchWrapper } from './components/SearchWrapper';

export const SearchInput = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <SearchWrapper>
      <Input {...rest} />
    </SearchWrapper>
  );
};
