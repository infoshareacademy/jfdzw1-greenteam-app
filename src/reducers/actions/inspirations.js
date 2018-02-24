import * as actions from './actions';
import * as appConsts from '../../consts';

const getRandomSeason = () => {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const randomSeason = Math.floor(Math.random() * seasons.length);
  return seasons[randomSeason];
};

const getSearchKeys = (userGender) => {
  const femaleInspirations = ['outfits', 'fashion', 'trends'];
  const randomfemaleInspirations = Math.floor(Math.random() * femaleInspirations.length);
  return (userGender === 'female')
    ? femaleInspirations[randomfemaleInspirations]
    : 'inspirations';
};

export const getInspirations = (userGender) => {
  return (dispatch) => {
    dispatch({ type: actions.PENDING_GET_ITEMS });

    fetch(`https://api.tumblr.com/v2/tagged?tag=${getRandomSeason()}+${getSearchKeys(userGender)}&api_key=${appConsts.TUMBLR_API_KEY}`)
      .then(rsp => rsp.json())
      .then(data => {
        dispatch({
          type: actions.SUCCESS_GET_ITEMS,
          itemsList: data.response
            .filter(item => item.photos && item.photos.length)
            .map(item => {
              return {
                img: item.photos[0].original_size.url,
                favorite: false
              };
            })
        });
      }).catch(err => {
        dispatch({ type: actions.ERROR_GET_ITEMS })
      });
  };
};