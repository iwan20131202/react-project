import { Card } from '../Card/Card.jsx';
import { Oval } from 'react-loader-spinner';


import { List as StyledList, ListItem, LoaderOverlay } from './List.styled.js';


export const List = ({ weatherCards, loading, onDelete }) => {
  return (
    <>
      {loading && (
        <LoaderOverlay>
          <Oval
            height={60}
            width={60}
            color="#FFB36C"
            secondaryColor="#E8E8E8"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </LoaderOverlay>
      )}

    
      <StyledList>
        {weatherCards.map(card => (
          <ListItem key={card.id}>
            <Card weather={card} onDelete={onDelete} />
          </ListItem>
        ))}
      </StyledList>
    </>
  );
};
