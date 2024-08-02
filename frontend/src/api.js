const BASE_URL = 'https://your-api-url.com'; 
//改成後端的url 

// API for register example
// export const register = async (email, password) => {
//     try {
//         const response = await fetch(`${BASE_URL}/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password })
//         });
//         if (!response.ok) {
//             throw new Error('Registration failed');
//         }
//         const data = await response.json();
//         return { status: 'success', data };  
//     } catch (error) {
//         console.error('Registration error:', error);
//         throw new Error('API call failed with error: ' + error.message);
//     }
// };

export const register = async (email, password) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockSuccessResponse = {
            status: 200,
            data: {
                message: "Registration successful. Please login."
            }
        };

        if (mockSuccessResponse.status === 200) {
            return { status: 'success', data: mockSuccessResponse.data };
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        throw new Error('API call failed with error: ' + error.message);
    }
};

// Mock API for login
export const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test" && password === "test") {
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
  
  
//   export const login = async (email, password) => {
//     try {
//         const response = await fetch(BASE_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();  

//         if (data.status === 'success') {
//             return {
//                 status: 'success',
//                 token: data.token, 
//                 message: data.message 
//             };
//         } else {
//             throw new Error(data.message || 'Failed to log in');
//         }

//     } catch (error) {
//         console.error('Login error:', error);
//         throw error;  
//     }
// };

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



// export const fetchCharacterData = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/characters`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch character data:", error);
//       throw error;  
//     }
//   };


// export const fetchParagraphData = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/paragraphs`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Failed to fetch paragraph data:", error);
//       throw error; 
//     }
//   };



// export const fetchVideoData = async () => {
//     const API_URL = `${BASE_URL}/video`;  //改endpoint
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return await response.json(); 
//     } catch (error) {
//       console.error('Failed to fetch video data:', error);
//       throw error;  
//     }
//   }
  




export const postContactForm = async (formData) => {
    console.log('Sending form data:', formData);
    return new Promise(resolve => setTimeout(() => resolve({ status: 'success', message: '謝謝您寶貴的建議!' }), 1000));
  };
//other APIs...
