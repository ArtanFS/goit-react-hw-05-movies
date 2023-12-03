import { List, ListItem, Text, Title } from './CastItems.styled';

const CastItems = ({ cast }) => {
  return (
    <List>
      {cast.map(actor => (
        <ListItem key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            width="100"
            height="150"
          />
          <div>
            <Title>{actor.name}</Title>
            <Text>Character: {actor.character}</Text>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default CastItems;
