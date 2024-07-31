//example 

const baseUrl = 'https://your-api-url.com';

//  API 1 fetchNewStory
// export const fetchNewStory = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/newstory`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('There was a problem with the fetch newstory:', error);
//   }
// };


export const postContactForm = async (formData) => {
    console.log('Sending form data:', formData);
    return new Promise(resolve => setTimeout(() => resolve({ status: 'success', message: '謝謝您寶貴的建議!' }), 1000));
  };
//other APIs...
