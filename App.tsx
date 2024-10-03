// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { View, Text } from 'react-native';

// const App = () => {
//   useEffect(() => {
//     axios
//       .get('https://reactnative.dev/movies.json')
//       .then(function(response) {
//         console.warn(response.data.movies);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); 

//   return (
//     <View>
//       <Text>Check console for movies</Text>
//     </View>
//   );
// };

// export default App;



// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { View, Text } from 'react-native';

// const App = () => {
//   useEffect(() => {
//     const postData = {
//       title: 'React Native',
//       description: 'Learning how to make POST requests in React Native',
//       movies:{"id": "6", "title": "Super30", "releaseYear": "2019" }
//     };

//     axios
//       .post('https://jsonplaceholder.typicode.com/posts', postData) 
//       .then(function(response) {
//         console.warn('POST response:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error in POST request:', error);
//       });
//   }); 

//   return (
//     <View>
//       <Text>Check console for POST request response</Text>
//     </View>
//   );
// };

// export default App;
// App.js
import React from 'react';
import { View, Alert } from 'react-native';
import Form from './src/Form';  
import { submitFormData } from './src/ApiService';  

const App = () => {
 
  const handleFormSubmit = (formData:any) => {
    submitFormData(formData)  
      .then((response) => {
        Alert.alert('Form Submitted!', `Response: ${JSON.stringify(response)}`); 
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to submit form');  
      });
  };

  return (
    <View>
      <Form onSubmit={handleFormSubmit} />  
    </View>
  );
};

export default App;


