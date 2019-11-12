//action creators:
// const inc = () => {
//   return {type: 'INC'};
// };
//and the short variant
export const inc = () => ({type: 'INC'});

// const dec = () => {
//   return {type: 'DEC'}
// }

export const dec = () => ({type: 'DEC'});

// const rnd = () => {
//   return {type: 'RND', payload }
// }

export const rnd = (payload) => ({ type: 'RND', payload });