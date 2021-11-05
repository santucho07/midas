// eslint-disable-next-line func-names
const callApi = async function (data) {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(
      'https://midas-mutantdna.herokuapp.com/mutant/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          charset: 'utf-8',
        },
        body: JSON.stringify({ dna: data }),
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default callApi;
