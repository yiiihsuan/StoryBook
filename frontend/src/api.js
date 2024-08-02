const baseUrl = 'https://your-api-url.com'; 
//改成後端的url 



// Mock API for login
export const mockLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "test" && password === "test") {
          resolve({
            status: 'success',
            token: 'fake-jwt-token',
            message: 'Login successful'
          });
        } else {
          reject({
            status: 'error',
            message: 'Invalid username or password'
          });
        }
      }, 1000); 
    });
  };
  
  

// Mock API for createStory
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

// export const login = async () => {
//     console.log('Sending form data:', formData);
//     return new Promise(resolve => setTimeout(() => resolve({ status: 'success', message: '謝謝您寶貴的建議!' }), 1000));
//   };





export const postContactForm = async (formData) => {
    console.log('Sending form data:', formData);
    return new Promise(resolve => setTimeout(() => resolve({ status: 'success', message: '謝謝您寶貴的建議!' }), 1000));
  };
//other APIs...
