// import React, {useState, useEffect} from 'react';
// import {Text, View, Button, TextInput} from 'react-native';
// import {SignUpStyle} from '../../welcome/createAcc/createAccount-style';
// import axios from 'axios';

// export default function EditMenu() {
//   const API_URL = 'http://10.0.2.2:3000';

//   const [label, setLabel] = useState('');
//   const [image, setImage] = useState('');
//   const [food, setFood] = useState('');

//   const [items, setItems] = useState(null);

//   const handleUpdate = async item => {
//     try {
//       const response = await axios.patch(
//         `${API_URL}/menu-category/` + item.id,
//         {
//           label: item.label,
//           image: item.image,
//           food: item.food,
//         },
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       {items.map(item => (
//         <View>
//           <View key={item.id}>
//             <TextInput
//               mode="outlined"
//               style={SignUpStyle.input}
//               placeholder="label"
//               value={label}
//               onChangeText={label => setLabel(label)}
//             />
//             <TextInput
//               mode="outlined"
//               style={SignUpStyle.input}
//               placeholder="image"
//               value={image}
//               onChangeText={image => setImage(image)}
//             />
//             <TextInput
//               mode="outlined"
//               style={SignUpStyle.input}
//               placeholder="food"
//               value={food}
//               onChangeText={food => setFood(food)}
//             />
//             <Button title="Save" onPress={handleUpdate(item)}></Button>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// }
